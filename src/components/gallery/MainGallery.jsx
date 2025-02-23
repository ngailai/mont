import React from 'react';
import Gallery from './Gallery';

const MainGallery = () => {
    return (
        <section className="bg-[url('/bg-1.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='py-20 bg-black bg-opacity-20'>
                <div className='container mx-auto px-4'>
                    <p className='text-5xl text-black-600'>Top Souvenirs ...</p>
                    <Gallery />
                    ...
                </div>
            </div>
        </section>
    );
};

export default MainGallery;
