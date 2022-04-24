import useSWR from "swr";
import { baseURL } from "./lib/baseUrl";

const Shop = () => {
  const { data, error } = useSWR(baseURL);
  if(error){
      console.log("error state")
  }
  if(!data){
    console.log("loading")
  }
  if(data){
    console.log(data)
  }
  return <div>Shop</div>;
};

export default Shop;
