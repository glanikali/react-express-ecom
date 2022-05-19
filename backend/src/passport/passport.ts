import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { validPassword } from "../lib/password";
import { doesUserExist, findUserById } from "../data/auth";

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

export interface UserType {
  email: string;
  hash: string;
  salt: string;
  id: number | string;
}

interface Done {
  (userFound: boolean | object, user?: boolean | UserType): void;
}

const verifyCallback = (username: string, password: string, done: Done) => {
  // todo: with prisma
  const result = doesUserExist(username)
    .then((user: UserType) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err));
};
const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy);

interface DoneSerialize {
  (userFound: boolean | object, id: number | string): void;
}
passport.serializeUser((user: UserType, done: DoneSerialize) => {
  done(null, user.id);
});
passport.deserializeUser((userId: number, done: Done) => {
  //todo prisma
  const result = findUserById(userId)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
