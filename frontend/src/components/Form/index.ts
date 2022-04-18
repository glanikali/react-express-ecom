export type FormData = {
  productName?: string;
  price?: number;
  image_url?: string;
  description?: string;
};

export const buildDefaultValues = () => {
  return {
    productName: "",
    price: 1.00,
    image_url: "",
    description: "",
  };
};
