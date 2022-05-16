import express, { Express, Response, Request, NextFunction } from "express";
import path from "path";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import authRoutes from "./routes/auth.js";
import { corsMiddleware } from "./cors/index.js";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import "dotenv/config";
import "./passport/passport";

const app: Express = express();

app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "foo",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.SESSION_DATABASE_URL,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(3001, () => {
  console.log(`server works: http://localhost:3001`);
});

export default app;
