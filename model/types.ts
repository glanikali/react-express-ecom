export interface ProductClass {
  id: number;
  name: string;
  price: number;
  image_url?: string;
}
export interface CartClass {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  total: number;
  removeFromCart(id: number): void;
  addToCart(): void;
}
