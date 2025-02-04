'use client';

import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineUser} from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../../public/assets/hero/logo2.png';
import {AiOutlineMenu} from 'react-icons/ai';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {signOut, useSession} from 'next-auth/react';
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faXTwitter,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [showModal, setShowModal] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const toggleModal = () => setShowModal((prev) => !prev);
    const {data: session} = useSession();

    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.scrollY === 0 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    return (
        <div
            className={`fixed z-50 h-16 w-full top-0  left-0 ${
                isScrolled ? 'shadow-md backdrop-blur' : ''
            }`}
        >
            <div className='h-full w-2/3 mx-auto flex justify-between items-center space-x-1'>
                <Link
                    href='/'
                    className='flex items-center gap-2 transition-all '
                >
                    <h1
                        className={`${
                            isScrolled ? 'text-indigo-600' : 'text-[#10040f]'
                        } text-2xl font-bold`}
                    >
                        monjooo.cm
                    </h1>
                    <Image
                        src={logo}
                        alt='logo'
                        height='55'
                        width='55'
                        className='rounded-full cursor-pointer'
                        color={`${isScrolled ? 'blue' : 'transparent'}`}
                    />

                    {/* <AiOutlineHome
                        size={25}
                        color={`${isScrolled ? 'blue' : '#20070e'}`}
                    /> */}
                </Link>
                <div className='hidden sm:flex'>
                    <ul className='hidden  sm:flex'>
                        <Link href='/'>
                            <li className='ml-10 uppercase hover:border-b text-md text-indigo-600'>
                                Home
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li className='ml-10 uppercase hover:border-b text-md text-indigo-600'>
                                About US
                            </li>
                        </Link>
                        {/* <Link href='/catalog'>
                            <li className='ml-10 uppercase hover:border-b text-md text-indigo-600'>
                                Services
                            </li>
                        </Link> */}
                        <Link href='/contact'>
                            <li className='ml-10 uppercase hover:border-b text-md text-indigo-600'>
                                CONTACT US
                            </li>
                        </Link>
                        <Link href='/acordion'>
                            <li className='ml-10 uppercase hover:border-b text-md text-indigo-600'>
                                FAQ
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className='cusor-pointer' onClick={toggleModal}>
                        <AiOutlineUser
                            size={30}
                            color={`${isScrolled ? 'blue' : '#20070e'}`}
                        />
                    </div>
                </div>
                {showModal && (
                    <>
                        <div
                            onClick={toggleModal}
                            className='absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-xl items-center'
                        >
                            {session?.user?.isAdmin && (
                                <Link
                                    className='bg-red-500 text-white px-1 py-2 rounded-xl'
                                    href='/admin/dashboard'
                                >
                                    Admin Dashboard
                                </Link>
                            )}
                            <Link
                                href='/reservations'
                                className='p-2 bg-blue-500 text-white rounded-lg'
                            >
                                Reservations
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className='text-slate-500 text-center'
                            >
                                Logout
                            </button>
                        </div>
                    </>
                )}

                <div
                    onClick={handleMenu}
                    className='md:hidden cursor-pointer pl-24'
                >
                    <AiOutlineMenu
                        size={30}
                        color={`${isScrolled ? 'blue' : '#20070e'}`}
                    />
                </div>
            </div>
            <div
                className={
                    menuOpen
                        ? 'fixed left-0 top-0 w-[42%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleMenu} className='cursor-pointer'>
                        <AiOutlineClose size={30} />
                    </div>
                </div>

                <div className='flex-col py-4'>
                    <ul>
                        <Link href='/'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 text-sm'
                            >
                                HOME
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 text-sm'
                            >
                                About US
                            </li>
                        </Link>
                        <Link href='/contact'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 text-sm'
                            >
                                Contact Us
                            </li>
                        </Link>
                        <Link href='/acordion'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 text-sm'
                            >
                                FAQ
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex mt-4 space-x-4'>
                    {/* Social Media Icons */}
                    <a
                        href='https://www.facebook.com/profile.php?id=61555084262885&mibextid=hIlR13'
                        target='_blank'
                        className='text-gray-600 hover:text-black'
                    >
                        <FontAwesomeIcon icon={faFacebook} size='lg' />
                    </a>
                    <a href='#' className='text-gray-600 hover:text-black'>
                        <FontAwesomeIcon icon={faXTwitter} size='lg' />
                    </a>
                    <a
                        href='https://www.instagram.com/monjooo.cm?igsh=NHVsMnEzeTB3dXpo'
                        target='_blank'
                        className='text-gray-600 hover:text-black'
                    >
                        <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </a>
                    <a href='#' className='text-gray-600 hover:text-black'>
                        <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
                    </a>
                    <a
                        href='https://www.youtube.com/@MonjooosMountCameroonTV'
                        target='_blank'
                        className='text-gray-600 hover:text-black'
                    >
                        <FontAwesomeIcon icon={faYoutube} size='lg' />
                    </a>
                    <a
                        href='https://www.tiktok.com/@www.monjooo.cm?_t=8idlElERUl3&_r=1'
                        target='_blank'
                        className='text-gray-600 hover:text-black'
                    >
                        <FontAwesomeIcon icon={faTiktok} size='lg' />
                    </a>
                </div>
                <div className='flex mt-4 space-x-4 justify-center'>
                    <Image
                        src={logo}
                        alt='logo'
                        height='55'
                        width='55'
                        className='rounded-full cursor-pointer'
                        color={`${isScrolled ? 'blue' : 'transparent'}`}
                    />
                </div>
                <div>
                    <p className='text-purple-950 text-center'>
                        monjooo.cm <br /> Souvenirs for the Soul
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
