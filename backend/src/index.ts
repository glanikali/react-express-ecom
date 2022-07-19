import express, { Express, Response, Request, NextFunction } from "express";
import path from "path";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import authRoutes from "./routes/auth.js";
import { corsMiddleware } from "./cors/index.js";
import session from "express-session";
import passport from "passport";
import { createClient } from "redis";
// import Redis from "ioredis";
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
const client = createClient({
  legacyMode: true,
  socket: {
    port: parseInt(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
  },
});
client.connect().catch(console.error );

//redisio
// let client = new Redis({
//   host: process.env.REDIS_HOST,
//   password: process.env.REDIS_PASSWORD,
//   port: parseInt(process.env.REDIS_PORT),
// });

app.use(
  session({
    secret: "foo",
    resave: false,
    saveUninitialized: false,

    store: new RedisStore({
      host: process.env.REDIS_HOST,
      pass: process.env.REDIS_PASSWORD,
      port: parseInt(process.env.REDIS_PORT),
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
