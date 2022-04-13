 const getDir = (type:string) => {
  if (type === "products") return __dirname + "/products.json";
  if (type === "cart") return __dirname + "/cart.json";
  return ''
};

export default getDir;
