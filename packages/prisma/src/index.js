"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const client_1 = require("@prisma/client");
// Create a singleton instance of PrismaClient
let prismaClient;
if (process.env.NODE_ENV === "production") {
    prismaClient = new client_1.PrismaClient();
}
else {
    // Ensure we don't create multiple instances during development
    if (!global.prisma) {
        global.prisma = new client_1.PrismaClient();
    }
    prismaClient = global.prisma;
}
exports.client = prismaClient;
// Export the types from Prisma
__exportStar(require("@prisma/client"), exports);
