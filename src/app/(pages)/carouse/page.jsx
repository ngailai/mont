'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import hero from '../../../../public/assets/hero/hero1.jpg';
import hero1 from '../../../../public/assets/hero/herrroo.jpg';
import hero2 from '../../../../public/assets/hero/hero3.jpg';
import hero3 from '../../../../public/assets/hero/herro.jpg';
import hero4 from '../../../../public/assets/hero/hero5.jpg';
import hero5 from '../../../../public/assets/hero/mt22.jpg';

const carouse = () => {
    const [page, setPage] = useState(1);

    const images = [hero, hero1, hero2, hero3, hero4, hero5];

    useEffect(() => {
        let int = setInterval(() => {
            setPage((prev) => (prev + 1 >= 6 ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(int);
    }, []);
    const handleNextPage = () => {
        setPage((prev) => (prev + 1 >= 6 ? 1 : prev + 1));
    };
    const handlePrevPage = () => {
        setPage((prev) => (prev - 1 <= 0 ? 6 : prev - 1));
    };

    return (
        <main className='relative flex h-[calc(100vh-70px)] w-screen items-center justify-center '>
            <div className='absolute w-full h-full'>
                <Image
                    className='absolute object-center w-full h-full'
                    sizes='100vw'
                    fill
                    alt='Image'
                    src={images[page - 1]}
                />
                <div className='absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] text-white rounded-lg'>
                    <h2 className='text-4xl font-semibold'>
                        Welcome to monjooo.cm
                    </h2>
                    <p className='text-2xl text-purple-200 mt-4'>
                        Survenirs for your Soul
                    </p>
                </div>
            </div>

            {/* left arrow */}
            <div
                onClick={handlePrevPage}
                className='z-10 fixed bottom-1/2 left-4 text-2xl font-semibold'
            >
                <span className='inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-indigo-500'>
                    &lt;-
                </span>
            </div>

            {/* right arrow */}
            <div
                onClick={handleNextPage}
                className='z-10 fixed bottom-1/2 right-4 text-2xl font-semibold'
            >
                <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-indigo-500'>
                    - &gt;
                </span>
            </div>
        </main>
    );
};

export default carouse;
