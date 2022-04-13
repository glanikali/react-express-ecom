import readFile from "../lib/readFile";
import writeFile from "../lib/writeFile";
import { v4 as uuidv4 } from "uuid";
import { ProductClass } from "./types";

const type = "products";

class Product implements ProductClass {
  id: number;
  name: string;
  price: number;
  image_url: string;
  constructor(id: number, name: string, price: number, image_url: string) {
    this.name = name;
    this.price = price;
    this.image_url = image_url;
    this.id = id;
  }
  async save() {
    const oldProducts = await Product.fetchAll();
    this.id = parseInt(uuidv4());
    const newProducts = JSON.stringify([this, ...oldProducts]);
    const res = await writeFile(newProducts, type);
  }
  static async fetchAll(): Promise<ProductClass[]> {
    const products: Array<ProductClass> = await readFile(type).then(
      (data: any) => JSON.parse(data)
    );
    return products;
  }
}

export default Product;
