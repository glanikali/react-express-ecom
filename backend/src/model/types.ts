export interface ProductClass {
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

export interface CartItems{
  id:number;
  name: string;
  price: number;
  image_url?: string;
}