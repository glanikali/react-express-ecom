import { Router } from "express";
import { handleRegistration, handleLogin } from "../controller/auth.js";
import passport from "passport";
const router = Router();

router.post("/registration", handleRegistration);
router.post("/login", passport.authenticate("local"), handleLogin);

export default router;
