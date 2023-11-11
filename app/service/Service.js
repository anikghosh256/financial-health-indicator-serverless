import { PrismaClient, Prisma  } from "@prisma/client";

export default class Service{
  constructor() {
    this.client = new PrismaClient();
    this.prisma = Prisma;
  }
}