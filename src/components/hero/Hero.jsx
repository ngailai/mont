import React from 'react';
import Image from 'next/image';

const Hero = ({image, mainHeader, secondaryHeader}) => {
    return (
        <div>
            <div className='relative h-screen w-full'>
                <Image
                    src={image}
                    className='brightness-50 h-full w-full object-cover'
                    alt='hero image'
                />
                <div className='absolute bottom-0 left-0 right-0 top-0  flex flex-col  items-center justify-center gap-8'>
                    <h2 className='text-6xl font-bold text-white'>
                        {mainHeader}
                    </h2>
                    <h5 className='text-4xl text-white font-semibold'>
                        {secondaryHeader}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Hero;
