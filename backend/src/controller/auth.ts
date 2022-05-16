import { Request, Response, NextFunction } from "express";
import { genPassword } from "../lib/password";
import { connection } from "../passport/database";
import { UserType } from "../passport/passport";

export const handleRegistration = async (req: Request, res: Response) => {
  console.log(req.body);
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const User = connection.models.User;
  const newUser = new User({
    username: req.body.email,
    hash,
    salt,
  });

  newUser
    .save()
    .then((user: UserType) => console.log(user))
    .catch((err: any) => console.log(err));

  res.status(201).json({ message: "registration success" });
};

export const handleLogin = async (req: Request, res: Response) => {};
