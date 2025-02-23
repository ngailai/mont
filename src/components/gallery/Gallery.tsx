'use client';

import Image from 'next/image';
import {useState} from 'react';

import db from '@/app/db/gallery.json';
import {gallery} from '@/models/gallery';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [imgPop, setImgPop] = useState<boolean>(false);

    const swipeImg = (moveType: string) => {
        if (moveType === 'prv') {
            if (selectedImg === 0) setSelectedImg(db.gallery.length - 1);
            else setSelectedImg(selectedImg - 1);
        }

        if (moveType === 'nxt') {
            if (selectedImg === db.gallery.length - 1) setSelectedImg(0);
            else setSelectedImg(selectedImg + 1);
        }
    };

    return (
        <>
            <div className='flex flex-wrap items-center justify-center mt-10'>
                {db.gallery.map((loc: gallery, i: number) => (
                    <a
                        onClick={() => {
                            setSelectedImg(i);
                            setImgPop(true);
                        }}
                        key={i}
                        className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 cursor-pointer hover:scale-110 transition-all ease-linear'
                    >
                        <Image
                            src={`/gallery/${loc.img}`}
                            alt={loc.location}
                            width={300}
                            height={250}
                            className='w-full h-64 object-cover'
                        />
                    </a>
                ))}
            </div>
            {imgPop && (
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center gap-3'>
                    <a
                        onClick={() => setImgPop(false)}
                        className='absolute top-2 right-2 cursor-pointer'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 128 128'
                            className='w-10 h-10'
                        >
                            <circle cx='64' cy='64' r='64' fill='#c93636' />
                            <path
                                d='m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4,0l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z'
                                fill='#fff'
                            />
                        </svg>
                    </a>

                    <a
                        onClick={() => swipeImg('prv')}
                        className='bg-green rounded-full ml-2 hover:translate-x-2 transition-all ease-linear cursor-pointer'
                    >
                        <svg
                            fill='none'
                            height='24'
                            viewBox='0 0 24 24'
                            width='24'
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-10 h-10 md:w-16 md:h-16 fill-white'
                        >
                            <path
                                clipRule='evenodd'
                                d='M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z'
                                fillRule='evenodd'
                            />
                        </svg>
                    </a>

                    <div>
                        <Image
                            src={`/gallery/${db.gallery[selectedImg].img}`}
                            alt={db.gallery[selectedImg].location}
                            width={650}
                            height={500}
                            className='w-full max-w-[650px] h-auto'
                        />
                        <h3 className='text-center text-white font-bold uppercase text-3xl mt-3'>
                            {db.gallery[selectedImg].location}
                        </h3>
                    </div>

                    <a
                        onClick={() => swipeImg('nxt')}
                        className='bg-green rounded-full mr-2 hover:-translate-x-2 transition-all ease-linear cursor-pointer'
                    >
                        <svg
                            fill='none'
                            height='24'
                            viewBox='0 0 24 24'
                            width='24'
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-10 h-10 md:w-16 md:h-16 fill-white'
                        >
                            <path
                                clipRule='evenodd'
                                d='M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z'
                                fillRule='evenodd'
                            />
                        </svg>
                    </a>

                    <nav className='absolute hidden left-0 right-0 bottom-5 lg:flex justify-center gap-3 px-4'>
                        {db.gallery.map((loc: gallery, i: number) => (
                            <a
                                onClick={() => setSelectedImg(i)}
                                className={`hover:-translate-y-2 transition-all ease-linear cursor-pointer ${
                                    selectedImg === i ? '-translate-y-2' : ''
                                }`}
                                key={i}
                            >
                                <Image
                                    src={`/gallery/${loc.img}`}
                                    alt={loc.location}
                                    width={80}
                                    height={80}
                                />
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Gallery;
