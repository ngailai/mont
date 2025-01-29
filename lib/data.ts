import {DollarSign, Settings, Users} from 'lucide-react';

export const navlinks = [
    {
        link: '/',
        text: 'Home',
        exact: true,
    },
    {
        link: '/news',
        text: 'News',
        exact: true,
    },
    {
        link: '/contact',
        text: 'Contact',
        exact: true,
    },
    {
        link: '/donation',
        text: 'Donate',
        style: 'border',
        exact: true,
    },
];

// dashboard routes
export const navItems = [
    {name: 'Dashboard', icon: DollarSign, href: '/dashboard'},
    {name: 'News', icon: Users, href: '/dashboard/news'},
    {name: 'Volunteers', icon: Users, href: '/dashboard/volunteers'},
    {name: 'Donations', icon: DollarSign, href: '/dashboard/donation'},
    {name: 'Settings', icon: Settings, href: '/dashboard/profile'},
];

// carousel array
export const homeCarousel = [
    {
        img: '/imgs/baner-1.jpg',
        title: 'be a Kind Heart',
        className: 'width-100 , height-100',
    },
    {
        img: '/imgs/baner-2.jpg',
        title: 'be a Kind Heart',
        className: 'width-100 , height-100',
    },
    {
        img: '/imgs/baner-3.jpg',
        title: 'be a Kind Heart',
        className: 'width-100 , height-100',
    },
];

// icons
export const iconsData = [
    {image: '/imgs/icons/koran.png'},
    {image: '/imgs/icons/mosque.png'},
    {image: '/imgs/icons/society.png'},

    {image: '/imgs/icons/social-security.png'},
];

// couses
export const causeData = [
    {
        image: '/imgs/charity2.jpg',
        title: 'Reach Out',
        desc: 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor',
    },
    {
        image: '/imgs/charity3.jpg',
        title: 'Change Lives',
        desc: 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor',
    },
    {
        image: '/imgs/charity6.jpg',
        title: 'Asist remote areas',
        desc: 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor',
    },
];
