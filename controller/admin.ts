const path = require("path");
const Product = require('../model/product')

import {Request, Response, NextFunction} from 'express'

export const getAddProductView = (req: Request, res:Response, next:NextFunction) =>{
    res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
}

export const postProduct = (req: Request, res:Response, next:NextFunction) =>{
    const { name, price, image_url } = req.body;
    const product = new Product(name, price, image_url);
    product.save(); 
    res.redirect("/");
}

export const getProduct = async (req: Request, res:Response, next:NextFunction) =>{
    const products = await Product.fetchAll();
    res.render(path.join(__dirname, "../", "views", "shop.pug"), {
      title: "Shop",
      products,
    });
}

