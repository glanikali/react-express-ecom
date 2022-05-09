import { Router } from "express";
import {
  getAllProducts,
  getCartView,
  notFound,
  postAddToCart,
  getSingleProduct,
} from "../controller/shop.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/product/:id", getSingleProduct);
router.get("/cart", getCartView);
router.post("/cart", postAddToCart);
router.use(notFound);

export default router;
