import express, { Express } from "express";
import path from "path";
import adminRoutes from './routes/admin';
import shopRoutes from "./routes/shop";
// import cors from 'cors'

const app: Express = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(3001, () => {
  console.log(`server works: http://localhost:3001`);
});

export default app;
