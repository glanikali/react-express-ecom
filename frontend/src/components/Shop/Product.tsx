import Card from "../UI/Card";
import { ProductInterface } from "../../Interfaces/.";
import { useNavigate } from "react-router-dom";
import Image from "../UI/Image";
import Button from "../UI/Button";

const Product = ({ name, price, image_url, id }: ProductInterface) => {
  const navigate = useNavigate();
  return (
    <Card className="p-0 hover:scale-[101%]">
      {image_url && (
        <Image
          src={image_url}
          alt={`${name} `}
          height={"250px"}
          width={"100%"}
        />
      )}
      <div className="p-4 grid grid-cols-1 gap-4">
        <h2>Name: {name}</h2>
        <p>Price: {`$ ${price}`}</p>

        <Button>Add To Cart</Button>
        <Button onClick={() => navigate(`../product/${id}`)}>Details</Button>
      </div>
    </Card>
  );
};

export default Product;
