import { Request, Response, NextFunction } from "express";
import path from "path";
import Product from "../model/product.js";
import Cart from "../model/cart.js";
import { fetchAllDB, getProductById } from "../data/index.js";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await fetchAllDB()
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => res.status(400).json("error"));
};

export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const product = await getProductById(idNumber)
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => res.status(400).json("error"));
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));
};

export const getCartView = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Cart.fetchAll();
  res.render(path.join(__dirname, "../", "views", "shop.pug"), {
    title: "Cart",
    products,
  });
};

// type ReqProps = {
//   id: string | ParsedQs;
//   name: string | ParsedQs;
//   price: string | ParsedQs;
//   image_url?: string | ParsedQs;
// };

export const postAddToCart = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { id, name, price, image_url } = req.query;
  // const newId = id && parseInt(id);
  // const newPrice = price && parseInt(price);
  // const cartItem = new Cart(newId, name, newPrice, image_url);
  // cartItem.addToCart();
  res.redirect("/cart");
};
