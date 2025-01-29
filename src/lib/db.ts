import {PrismaClient} from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

export default db;

// import {PrismaClient} from '@prisma/client';

// declare global {
//     const prisma: PrismaClient | undefined;
// }

// const globalForPrisma = globalThis as unknown as {prisma: PrismaClient};

// export const db = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
