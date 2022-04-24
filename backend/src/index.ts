import express, { Express } from "express";
import path from "path";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import { corsMiddleware } from "./cors/index.js";

const app: Express = express();
app.use(corsMiddleware);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(3001, () => {
  console.log(`server works: http://localhost:3001`);
});

export default app;
