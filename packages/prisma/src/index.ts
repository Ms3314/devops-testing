import { PrismaClient } from "@prisma/client";

// Create a singleton instance of PrismaClient
let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  // Ensure we don't create multiple instances during development
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaClient = global.prisma;
}

export const client = prismaClient;

// Export the types from Prisma
export * from '@prisma/client';
