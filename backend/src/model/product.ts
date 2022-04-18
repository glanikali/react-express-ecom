import { ProductClass, CartItems } from "./types";
import { fetchAllDB, newProductDB } from "../data/index";

const type = "products";

class Product implements ProductClass {
  name: string;
  price: number;
  image_url?: string;
  description?: string;
  constructor(
    name: string,
    price: number,
    image_url: string | "" = "",
    description: string | "" = ""
  ) {
    this.name = name;
    this.price = price;
    this.image_url = image_url;
    this.description = description;
  }
  async save() {
    return newProductDB(this);
  }
  static async fetchAll(): Promise<CartItems[]> {
    return fetchAllDB();
  }
}

export default Product;
