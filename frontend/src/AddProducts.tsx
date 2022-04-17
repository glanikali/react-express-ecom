import AddProductsFormWrapper from "./components/Form/AddProductFormWrapper";
import Container from "./components/UI/Container";
import Card from "./components/UI/Card";
import ProductNameInput from "./components/Input/ProductNameInput";
import PriceInput from "./components/Input/PriceInput";
import Submit from "./components/Input/Submit";
import DescriptionInput from "./components/Input/DescriptionInput";

const AddProducts = () => {
  return (
    <Container>
      <Card className="mx-auto w-1/2">
        <h1 className="font-bold">Admin: Add Products</h1>
        <AddProductsFormWrapper>
          <ProductNameInput maxWidth />
          <PriceInput maxWidth />
          <DescriptionInput maxWidth />
          <Submit />
        </AddProductsFormWrapper>
      </Card>
    </Container>
  );
};

export default AddProducts;
