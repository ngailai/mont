import {PrismaClient} from '@prisma/client';

declare global {
    const prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient};

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
