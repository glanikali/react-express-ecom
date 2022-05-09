import useSWR from "swr";
import { baseURL } from "../lib/baseUrl";
import Product from "../components/Shop/Product";
import { ProductInterface } from "../Interfaces/index";

const Shop = () => {
  const { data, error } = useSWR(baseURL);
  if (error) {
    console.log("error state");
  }
  if (!data) {
    console.log("loading");
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="grid gap-4 grid-cols-1">
      <h1>Shop</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {data?.map((el: ProductInterface) => (
          <Product
            key={el.id}
            id={el.id}
            name={el.name}
            price={el.price}
            image_url={el.image_url}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
