import React from 'react';
import {Numbering} from './index';

const ActiveCard = ({
    colorLite,
    colorDeep,
    id,
    title,
    activeCard,
    subtitle,
    img,
}) => {
    return (
        <div className='flex justify-center items-center lg:flex-row flex-col h-full max-w-full'>
            <div
                className='relative cursor-pointer flex items-center justify-between lg:flex-grow grow-0 lg:h-full h-auto lg:w-auto w-full lg:p-0 p-5'
                style={{backgroundColor: `${colorLite}`}}
            >
                <div className='lg:absolute lg:bottom-4 lg:left-1/2 lg:flex lg:mx-auto lg:transform lg:-translate-x-1/2 duration-700 ease-in-out transition-all lg:mb-3 z-30'>
                    <Numbering colorDeep={colorDeep} id={id} />
                </div>
                <div className='flex lg:absolute lg:rotate-90 lg:top-32 lg:left-1/2 lg:transform lg:-translate-x-1/2 duration-700 ease-in-out transition-all z-30 text-navy font-medium uppercase lg:w-56 w-auto lg:mx-auto'>
                    {title}
                </div>
            </div>

            <div
                className={`flex flex-col items-start justify-center gap-5 bg-white h-full m-6 ${
                    activeCard === id && 'lg:grow-[4] max-w-full'
                }`}
            >
                <h1 className='font-bold uppercase -mt-2 text-lg text-navy'>
                    {title}
                </h1>
                <p className='lg:w-[38rem] md:text-base text-sm leading-relaxed'>
                    {subtitle}
                </p>
                <img
                    src={img}
                    alt={title}
                    loading='eager'
                    width='320'
                    height='180'
                    className='lg:block hidden rounded-xl w-72'
                />
            </div>
        </div>
    );
};

export default ActiveCard;
