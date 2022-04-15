import {Router} from "express";
import {
  landingPage,
  getCartView,
  notFound,
  postAddToCart,
  getSingleProduct,
} from "../controller/shop.js";

const router = Router();

router.get("/", landingPage);
router.get("/product/:productId", getSingleProduct);
router.get("/cart", getCartView);
router.post("/cart", postAddToCart);
router.use(notFound);

export default router;
