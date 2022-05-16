export type FormData = {
  productName?: string;
  price?: number;
  image_url?: string;
  description?: string;
};

export const buildDefaultValues = () => {
  return {
    productName: "",
    price: 1.0,
    image_url: "",
    description: "",
  };
};

export type Register = {
  email: string;
  password: string;
};

export const buildDefaultRegisterValues = () => {
  return { email: "", password: "" };
};

export type Login = {
  email: string;
  password: string;
};

export const buildDefaultLoginValues = () => {
  return { email: "", password: "" };
};
