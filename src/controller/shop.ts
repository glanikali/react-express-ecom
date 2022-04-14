import { Request, Response, NextFunction } from "express";
import path from "path";
import Product from "../model/product.js";
import Cart from "../model/cart.js";
import { fetchAllDB } from "../data/index.js";

export const landingPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await fetchAllDB();
  res.render(path.join(__dirname, "../", "views", "shop.pug"), {
    title: "Shop",
    products,
  });
};

export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  const productId = req.params.productId;
  const filteredProducts = products.filter(
    (el) => el.id === parseInt(productId)
  );
  res.render(path.join(__dirname, "../", "views", "product.pug"), {
    title: filteredProducts[0].name,
    filteredProducts,
  });
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