'use client';
import {data} from './data/data';
import {useState} from 'react';
import {ActiveCard, InactiveCard} from './pages';

function App() {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <div className=' m-auto lg:mt-24 mt-16 md:px-16 px-4 text-gray-500'>
            {/*header text*/}
            <div className='text-center mx-auto max-w-screen-lg'>
                <h1 className='font-bold text-indigo-600 my-3 md:text-3xl text-2xl'>
                    {data.title}
                </h1>
                <p className='font-normal leading-relaxed text-black lg:text-base text-sm'>
                    {data.subTitle}
                </p>
            </div>
            {/*Accordion*/}
            <div className='flex items-center justify-center mx-auto my-16'>
                <div className='flex gap-3 lg:flex-row flex-col w-full h-full'>
                    {data.accordionData.map(
                        ({id, title, subtitle, img, colorDeep, colorLite}) => (
                            <div
                                key={id}
                                onClick={() => setActiveCard(id)}
                                className={`${
                                    activeCard === id
                                        ? 'lg:grow-[5] lg:max-w-full h-[250px]'
                                        : 'h-[70px]'
                                } lg:h-auto duration-700 ease-in-out relative flex-grow overflow-hidden rounded-2xl transition-all border border-gray-200`}
                            >
                                {activeCard === id ? (
                                    <ActiveCard
                                        colorLite={colorLite}
                                        colorDeep={colorDeep}
                                        id={id}
                                        title={title}
                                        subtitle={subtitle}
                                        img={img}
                                        activeCard={activeCard}
                                    />
                                ) : (
                                    <InactiveCard
                                        colorDeep={colorDeep}
                                        colorLite={colorLite}
                                        id={id}
                                        title={title}
                                    />
                                )}
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
