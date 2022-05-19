import { Request, Response, NextFunction } from "express";
import { genPassword } from "../lib/password";
import { createUser } from "../data/auth";
import { UserType } from "../passport/passport";

export const handleRegistration = async (req: Request, res: Response) => {
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  // todo: to prisma
  const result = await createUser({
    email: req.body.email,
    salt,
    hash,
    username: req.body.email,
  })
    .then((data) => res.status(201).json({ message: "registration success" }))
    .catch((err) => res.status(401).json({ message: "registration failed" }));
};

export const handleLogin = async (req: Request, res: Response) => {
  res.status(200).json("success");
};

export const handleLogout = async (req: Request, res: Response) => {
  if (req.user) {
    req.logOut();
    res.status(200).json("logged out");
  } else {
    res.status(400).json("error");
  }
};
