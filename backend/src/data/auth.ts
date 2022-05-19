import { PrismaClient, Prisma } from "@prisma/client";
import { CartClass, ProductClass } from "../model/types";
const prisma = new PrismaClient();

type Profile = {
  email: string;
  hash: string;
  salt: string;
  username: string;
};
export const createUser = async ({ email, salt, hash, username }: Profile) => {
  if (await doesUserExist(email)) {
    throw "email is not unique";
  }
  const res = await prisma.users.create({
    data: { email, salt, hash, username },
  });
  return res;
};

export const doesUserExist = async (email: string) => {
  const res = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  return res;
};

export const findUserById = async (id: number) => {
  const res = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return res;
};
