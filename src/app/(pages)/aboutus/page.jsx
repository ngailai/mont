import React from 'react';
import Image from 'next/image';
import './aboutus.css';
// import images from '../../../public/assets';
const Aboutus = () => {
    const factsArray = [
        {
            title: 'Founded',
            info: '2013',
        },
        {
            title: 'Employees',
            info: '5',
        },
        {
            title: 'Customers',
            info: '70',
        },
        {
            title: 'Awards won',
            info: '3',
        },
    ];
    return (
        <div className='aboutus'>
            <div className='aboutus_box'>
                <div className='aboutus_box_hero'>
                    <div className='aboutus_box_hero left'>
                        <h1>About Us</h1>
                        <p className='justify-evenly'>
                            Monjooo.cm is an Internet based platform operating
                            from Buea in the South West of Cameroon-Central
                            African sub Region. Our mission is to use
                            information and communication technologies to market
                            Mount Cameroon, her flora and fauna as well as other
                            tourist destinations across the world. Our vision is
                            to organize secured trips for national and
                            international tourists to Mount Cameroon and other
                            tourist destinations in Cameroon.
                        </p>
                    </div>
                    {/* <div className='aboutus_box_hero_right'>
                        <Image src={images.aboutus} alt='aboutus' />
                    </div> */}
                </div>
                <div className='aboutus_box_content'>
                    <div className='aboutus_box_content_left'>
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Quisquam,
                            voluptatum. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                    <div className='aboutus_box_content_right'>
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Quisquam,
                            voluptatum.
                        </p>
                    </div>
                    <div className='aboutus_box_title'>
                        <h2>Founded</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Quisquam,
                            voluptatum. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                    <div className='aboutus_box_facts'>
                        <div className='aboutus_box_facts_box'>
                            {factsArray.map((el, i) => (
                                <div
                                    className='aboutus_box_facts_box_info'
                                    key={i}
                                >
                                    <h3>{el.title}</h3>
                                    <p>{el.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
