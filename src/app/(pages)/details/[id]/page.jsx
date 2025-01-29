'use client';
import {format} from 'currency-formatter';

import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {AiFillStar} from 'react-icons/ai';
import {FaBed, FaWifi} from 'react-icons/fa';
import {CiLocationOn} from 'react-icons/ci';
import BookModal from '@/components/book-modal/BookModal';
import {register} from 'swiper/element/bundle';
import Review from './Review';
import {getListingById} from './service';
import {ClipLoader} from 'react-spinners';
import Reviews from './Reviews';
import {useQuery} from '@tanstack/react-query';

register();

const HotelDetails = async (ctx) => {
    const {id} = await ctx.params;
    const [selectedStar, setSelectedStar] = useState(5);
    const [showModal, setShowModal] = useState(false);
    const swiperElRef = useRef(null);

    const {data: listing, isPending} = useQuery({
        queryKey: ['listings', {id}],
        queryFn: () => getListingById(id),
    });

    const handleShowModal = () => setShowModal((prev) => true);
    const handleHideModal = () => setShowModal((prev) => false);

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

    useEffect(() => {
        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });
    }, []);

    return (
        <div
            className={`min-h-screen w-full mt-24 ${
                showModal && 'overflow-hidden'
            }`}
        >
            {showModal && (
                <BookModal
                    listing={listing}
                    handleHideModal={handleHideModal}
                />
            )}
            <div className='h-full w-3/4 mx-auto'>
                <div>
                    <div className='w-full h-[750px] overflow-hidden mx-auto'>
                        <div className='w-full h-full'>
                            <swiper-container
                                ref={swiperElRef}
                                slides-per-view='1'
                                navigation='true'
                            >
                                {listing?.imageUrls?.map((imageUrl) => (
                                    <swiper-slide key={imageUrl}>
                                        <Image
                                            className='w-full h-[750px] object-cover rounded-lg'
                                            height='750'
                                            width='750'
                                            src={imageUrl}
                                            blurDataURL={listing.blurredImage}
                                            placeholder='blur'
                                            alt='listing'
                                        />
                                    </swiper-slide>
                                ))}
                            </swiper-container>
                        </div>
                    </div>
                    <div className='mt-12 px-6 w-full flex items-center justify-between'>
                        <h2 className='font-bold text-4xl'>{listing.name}</h2>

                        <div>
                            <span className='p-2 px-4 text-[22px] rounded-full bg-blue-600 text-white flex items-center gap-2'>
                                <AiFillStar color='white' />
                                <span className='text-white'>
                                    {listing.avgRating}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='mt-16 px-6 flex items-center gap-8'>
                        <span className='flex items-center gap-2'>
                            <CiLocationOn /> {listing.location}
                        </span>
                        <span className='flex items-center gap-2'>
                            {format(listing.pricePerNight, {locale: 'en-us'})}
                            /night
                        </span>

                        <span className='flex items-center gap-2'>
                            {listing.beds} <FaBed />
                        </span>
                        {listing.hasFreeWifi && (
                            <span className='flex items-center gap-2'>
                                Free <FaWifi />
                            </span>
                        )}
                    </div>
                    <div className='mt-16 px-6 w-full flex items-end justify-between'>
                        <p className='text-xl max-w-xl text-slate-700'>
                            {listing.desc}
                        </p>
                        <button
                            onClick={handleShowModal}
                            className='cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500'
                        >
                            Book
                        </button>
                    </div>
                </div>
                <div className='border-t-2 border-white-800 px-6 mt-16 mx-auto'>
                    <h1 className='mt-16 text-3xl font-bold'>Reviews</h1>
                    <div className='mt-8 flex items-center gap-6'>
                        {Array.from(Array(5).keys()).map((number) => (
                            <span
                                onClick={() => setSelectedStar(number + 1)}
                                className={`${
                                    selectedStar === number + 1
                                        ? 'scale-125'
                                        : ''
                                }
                                 cursor-pointer flex items-center gap-2 transition-all`}
                            >
                                {number + 1}
                                <AiFillStar
                                    size={22}
                                    color='rgb(59, 130, 246)'
                                />
                            </span>
                        ))}
                    </div>
                    <div className='mt-8 flex items-center gap-28 border rounded-lg py-4 px-6 w-max'>
                        <input
                            className='outline-none'
                            type='text'
                            placeholder='Leave your opinion...'
                        />
                        <button className='cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500'>
                            Post
                        </button>
                    </div>
                    {/* review section section */}
                    <Reviews id={id} />
                    <Reviews id={id} />
                    <Reviews id={id} />
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
