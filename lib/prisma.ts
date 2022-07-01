import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

interface GlobalCtx {
  prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as unknown as GlobalCtx).prisma) {
    (global as unknown as GlobalCtx).prisma = new PrismaClient();
  }
  prisma = (global as unknown as GlobalCtx).prisma;
}

export { prisma };
