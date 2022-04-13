import readFile from "../lib/readFile";
import writeFile from "../lib/writeFile";
import { CartClass, ProductClass } from "./types";

const type: string = "cart";

class Cart implements CartClass {
  id;
  name;
  price;
  image_url?: string | undefined;
  total = 0;
  constructor(
    id: number,
    name: string,
    price: number,
    image_url: string | "" = ""
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image_url = image_url;
  }
  async addToCart() {
    const cartItems = await Cart.fetchAll();
    const newCartItems = JSON.stringify([...cartItems, this]);
    const res = await writeFile(newCartItems, type);
  }
  async removeFromCart(id: number) {
    const cartItems = await Cart.fetchAll();
    const filteredCartItems = cartItems.filter((el) => el.id !== id);
    const newCartItems = JSON.stringify(filteredCartItems);
    const res = await writeFile(newCartItems, type);
  }
  static async fetchAll() {
    const products: Array<ProductClass> = await readFile(type).then(
      (data: any) => JSON.parse(data)
    );
    return products;
  }
}

module.exports = Cart;
