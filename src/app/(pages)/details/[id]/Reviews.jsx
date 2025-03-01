'use client';

import React, {useState} from 'react';
import Review from './Review';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {ClipLoader} from 'react-spinners';
import {toast} from 'react-hot-toast';
import {getReviewsByListing, postReview} from './service';
import {AiFillStar} from 'react-icons/ai';
import Pagination from '@/components/pagination/Pagination';

const Reviews = ({id}) => {
    const [selectedStar, setSelectedStar] = useState(5);
    const [text, setText] = useState('');

    const queryClient = useQueryClient();
    const {data: reviews, isPending: isPendingQuery} = useQuery({
        queryFn: () => getReviewsByListing(id),
        queryKey: ['reviews'],
    });

    const {mutate, isPending} = useMutation({
        mutationFn: () => handleSubmit(),
        onSuccess: () => {
            queryClient.invalidateQueries(['listings', 'reviews']);
        },
    });

    const itemsPerPage = 4;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentReviews = reviews?.slice(itemOffset, endOffset);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (text === '') return toast.error("Review can't be empty");

            const body = {
                text,
                stars: selectedStar,
            };

            await postReview(id, body);
            toast.success('Successfully posted a review');
            setText('');
        } catch (error) {
            console.log(error);
        }
    }
    if (isPending) {
        const style = {
            marginTop: '5rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '100vh',
        };
        return (
            <div style={style}>
                <ClipLoader color={'#123abc'} loading={isPending} />
            </div>
        );
    }
    return (
        <div className='border-t-2 border-white-800 px-6 mt-16 mx-auto'>
            <h1 className='text-2xl font-semibold'>Reviews</h1>

            <>
                <div className='mt-8 flex items-center gap-6'>
                    {Array.from(Array(5).keys()).map((number) => (
                        <span
                            onClick={() => setSelectedStar(number + 1)}
                            className={`${
                                selectedStar === number + 1 ? 'scale-125' : ''
                            }
                    cursor-pointer flex items-center gap-2 transition-all`}
                        >
                            {number + 1}
                            <AiFillStar size={22} color='rgb(59, 130, 246)' />
                        </span>
                    ))}
                </div>
                <form
                    onSubmit={mutate}
                    className='mt-8 flex items-center gap-28 border rounded-lg py-4 px-6 w-max'
                >
                    <input
                        className='outline-none'
                        type='text'
                        placeholder='Leave your opinion...'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <button
                        disabled={isPending}
                        onClick={mutate}
                        className='cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 hover:bg-blue-400 transition-all'
                    >
                        Post
                    </button>
                </form>
                <div className='mt-16 h-[900px] flex flex-col gap-24 w-1/3'>
                    {currentReviews?.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                    <Pagination
                        setItemOffset={setItemOffset}
                        itemsPerPage={itemsPerPage}
                        reviews={reviews}
                    />
                </div>
            </>
        </div>
    );
};

export default Reviews;
