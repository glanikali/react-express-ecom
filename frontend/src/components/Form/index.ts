export type FormData = {
  productName?: string;
  price?: number;
  image_url?: string;
  description?: string;
};

export const buildDefaultValues = () => {
  return {
    productName: "",
    price: 0,
    image_url: "",
    description: "",
  };
};
