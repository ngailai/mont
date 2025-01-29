import db from '@/lib/db';
import {calcAndSortListings} from '@/lib/sortListings';
import {NextResponse} from 'next/server';

export async function GET(req, ctx) {
    try {
        const {id} = await ctx.params;

        const listing = await db.listing.findUnique({
            where: {
                id,
            },
            include: {
                reviews: true,
                reservations: true,
            },
        });
        const avgRating =
            listing.reviews.reduce((a, b) => {
                return a + b.stars;
            }, 0) / listing.reviews.length;

        const listingWithRating = {
            ...listing,
        };

        return NextResponse.json({
            ...listing,
            avgRating: avgRating ? Number(avgRating.toFixed(2)) : 0,
        });
    } catch (error) {
        return NextResponse.error(error);
    }
}
