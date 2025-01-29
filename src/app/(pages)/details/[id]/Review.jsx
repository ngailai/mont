import React from 'react';
import person_image from '../../../../../public/assets/bianco_2.png';
import {AiFillStar} from 'react-icons/ai';
import Image from 'next/image';
import {format} from 'date-fns';

const Review = ({review}) => {
    return (
        <div className='mt-16 flex flex-col gap-24 w-1/3'>
            <div className='flex w-full gap-4'>
                <div className='w-14 h-14'>
                    <Image
                        className='rounded-full object-cover w-full h-full'
                        src={person_image}
                    />
                </div>
                <div className='mt-4'>
                    <h3 className='text-xl font-bold'>Enow john</h3>
                    <span className='text-slate-700'>2 days ago</span>
                    <div className='mt-4 text-slate-800'>best hotel</div>
                    <div>
                        <span className='flex items-center gap-2'>
                            <AiFillStar color='rgb(59, 130, 246)' size={22} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
