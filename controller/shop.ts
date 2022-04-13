
import {Request, Response, NextFunction} from 'express'
import path from 'path';
import Product from '../model/product';
const Cart = require('../model/cart')


export const landingPage = async (req: Request, res:Response, next:NextFunction) => {
  const products = await Product.fetchAll();
  res.render(path.join(__dirname, "../", "views", "shop.pug"), {
    title: "Shop",
    products,
  });
};

export const getSingleProduct = async  (req: Request, res:Response, next:NextFunction) => {
  const products = await Product.fetchAll();
  const productId = req.params.productId;
  const filteredProducts = products.filter(el=> el.id === parseInt(productId))
  res.render(path.join(__dirname, "../", "views", "product.pug"), {
    title: filteredProducts[0].name,
    filteredProducts,
  });
};

export const notFound =  (req: Request, res:Response, next:NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));
};

export const getCartView = async  (req: Request, res:Response, next:NextFunction) => {
  const products = await Cart.fetchAll();
  res.render(path.join(__dirname, "../", "views", "shop.pug"), {
    title: "Cart",
    products,
  });
};

export const postAddToCart =  (req: Request, res:Response, next:NextFunction) => {
  const {id, name, price, image_url} = req.query;
  console.log(image_url)
  const cartItem = new Cart(id, name, price, image_url);
  cartItem.addToCart();
  res.redirect("/cart")
};


