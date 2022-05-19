import express, { Express, Response, Request, NextFunction } from "express";
import path from "path";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import authRoutes from "./routes/auth.js";
import { corsMiddleware } from "./cors/index.js";
import session from "express-session";
import passport from "passport";
import { createClient } from "redis";
import connectRedis from "connect-redis";
import "dotenv/config";
import "./passport/passport";

//
const RedisStore = connectRedis(session);

const app: Express = express();

app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//redis client
const client = createClient({ legacyMode: true });
client.connect().catch(console.error);

app.use(
  session({
    secret: "foo",
    resave: false,
    saveUninitialized: false,

    store: new RedisStore({
      host: "127.0.0.1",
      port: 6379,
      client,
      ttl: 260,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV !== "production" ? false : true,
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
