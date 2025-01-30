import Bimbia from '../../../../../public/assets/bimbia (3).jpg';
import Limbe from '../../../../../public/assets/limbe.jpg';
import Berlin from '../../../../../public/assets/berlin.jpg';
import Hamburg from '../../../../../public/assets/Hamburg.jpg';
import Paris from '../../../../../public/assets/paris.jpg';
import St_tropez from '../../../../../public/assets/StTropez.jpg';
import Beach from '../../../../../public/assets/limbe1.jpg';
import Buea from '../../../../../public/assets/Buea.jpg';
import db from '@/lib/db';
import {NextResponse} from 'next/server';

export async function GET(req) {
    try {
        const Bimbia_listings = await db.listing.count({
            where: {
                location: 'Bimbia',
            },
        });

        const Limbe_listings = await db.listing.count({
            where: {
                location: 'Limbe',
            },
        });

        const Beach_listings = await db.listing.count({
            where: {
                location: 'Beach',
            },
        });

        const Buea_listings = await db.listing.count({
            where: {
                location: 'Buea',
            },
        });

        const berlin_listings = await db.listing.count({
            where: {
                location: 'berlin',
            },
        });

        const hamburg_listings = await db.listing.count({
            where: {
                location: 'hamburg',
            },
        });

        const st_tropez_listings = await db.listing.count({
            where: {
                location: 'st-tropez',
            },
        });

        const paris_listings = await db.listing.count({
            where: {
                location: 'paris',
            },
        });

        const results = [
            {
                numOfPlaces: Bimbia_listings,
                image: Bimbia,
                value: 'Bimbia',
            },
            {
                numOfPlaces: Limbe_listings,
                image: Limbe,
                value: 'Limbe',
            },
            {
                numOfPlaces: Beach_listings,
                image: Beach,
                value: 'Beach',
            },
            {
                numOfPlaces: Buea_listings,
                image: Buea,
                value: 'Buea',
            },
            {
                numOfPlaces: berlin_listings,
                image: Berlin,
                value: 'berlin',
            },
            {
                numOfPlaces: hamburg_listings,
                image: Hamburg,
                value: 'hamburg',
            },
            {
                numOfPlaces: st_tropez_listings,
                image: St_tropez,
                value: 'st-tropez',
            },
            {
                numOfPlaces: paris_listings,
                image: Paris,
                value: 'paris',
            },
        ];

        const sortedResults = results
            .sort((a, b) => b.numOfPlaces - a.numOfPlaces)
            .slice(0, 4);

        return NextResponse.json(sortedResults);
    } catch (error) {
        return NextResponse.error(error);
    }
}
