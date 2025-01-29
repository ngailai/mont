import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from '../../../public/assets/hero/Logo.png';
import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faXTwitter,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-blue-400 text-black py-4'>
            {/* Footer Content */}
            <div
                className=' mx-auto px-2 grid
            grid-cols-1 md:grid-cols-4 gap-3 py-8'
            >
                {/* Logo and description */}
                <div>
                    {/* Adding logo from URL */}
                    <Image
                        src={Logo}
                        alt='monjooo.cm logo'
                        className='mb-4 w-20'
                    />
                    <h2 className='text-2xl font-bold mb-4'>
                        monjooo.cm, Souvenirs for the Soul
                    </h2>

                    <p className='text-gray-600'>Buea, Cameroon</p>
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
                            className='text-gray-600 hover:text-black'
                        >
                            <FontAwesomeIcon icon={faTiktok} size='lg' />
                        </a>
                    </div>
                </div>

                {/* Explore Column */}
                <div>
                    <h3 className='font-bold mb-4'>Explore</h3>
                    <ul className='text-gray-600 space-y-2'>
                        <li>
                            <a href='#' className='hover:text-black'>
                                Camp
                            </a>
                        </li>

                        <li>
                            <a href='#' className='hover:text-black'>
                                Have Great Souvenirs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Languages Column */}
                <div>
                    <h3 className='font-bold mb-4'>Languages</h3>
                    <ul className='text-gray-600 space-y-2'>
                        <li>
                            <a href='#' className='hover:text-black'>
                                English
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-black'>
                                French
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Competitive Exams Column */}
                <div>
                    <h3 className='font-bold mb-4'>Contacts</h3>
                    <ul className='text-gray-600 space-y-2'>
                        <li>
                            <a href='#' className='hover:text-black'>
                                +237 674808077,
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-black'>
                                +237674006542
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-black'>
                                +237672094256
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='text-center text-red-500 mt-1'>
                @monjooo.cm,2025 All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
