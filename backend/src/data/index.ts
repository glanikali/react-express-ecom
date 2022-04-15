import { PrismaClient } from "@prisma/client";
import { CartClass, ProductClass } from "../model/types";
const prisma = new PrismaClient();

export const newProductDB = async (product: ProductClass) => {
  const { name, price, image_url } = product;
  const createNewProduct = await prisma.products.create({
    data: {
      name,
      price,
      image_url,
    },
  });
};

export const fetchAllDB = async () => {
  const res = await prisma.products.findMany();
  return res;
};

export const getProductById = async (id: number) => {
  const res = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });
  return res;
};

export const deleteProductById = async (id: number) => {
  const res = await prisma.products.delete({
    where: {
      id: id,
    },
  });
  return res;
};
