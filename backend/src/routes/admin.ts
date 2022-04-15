import { Router } from "express";
import {
  getAddProductView,
  postProduct,
  getProduct,
} from "../controller/admin.js";

const router = Router();

router.get("/add-product", getAddProductView);
router.post("/product", postProduct);
router.get("/product", getProduct);

export default router;
