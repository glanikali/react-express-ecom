import { PrismaClient, Prisma } from "@prisma/client";
import { CartClass, ProductClass } from "../model/types";
const prisma = new PrismaClient();

type Profile = {
  email: string;
  password: string;
};
export const createUser = async (profile: Profile) => {
  const { email, password } = profile;
  if (await doesUserExist(email)) {
    throw "email is not unique";
  }
  const res = await prisma.users.create({
    data: { email, password },
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
