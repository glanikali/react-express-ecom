import path from "path";
import Product from "../model/product.js";
import { Request, Response, NextFunction } from "express";
import { newProductDB } from "../data/index.js";

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
  const { name, price, image_url } = req.body;

  req.body.price = parseInt(req.body.price);

  /// db
  const res2 = await newProductDB(req.body);
  console.log(res2);

  const product = new Product(name, price, image_url);
  product.save();
  res.redirect("/");
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
