import path from "path";
import Product from "../model/product.js";
import { Request, Response, NextFunction } from "express";

export const getAddProductView = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
};

export const postProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, price, image_url, description } = req.body;
  const priceToInt = parseInt(req.body.price);
  const product = new Product(name, priceToInt, image_url, description);
  const result = await product
    .save()
    .then((res1) => res.status(200).json("complete"))
    .catch((err) => res.status(400).json("bad request"));
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  res.render(path.join(__dirname, "../", "views", "shop.pug"), {
    title: "Shop",
    products,
  });
};
