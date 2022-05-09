import AddProductsFormWrapper from "../components/Form/AddProductFormWrapper";
import Container from "../components/UI/Container";
import Card from "../components/UI/Card";
import ProductNameInput from "../components/Input/ProductNameInput";
import PriceInput from "../components/Input/PriceInput";
import Submit from "../components/Input/Submit";
import DescriptionInput from "../components/Input/DescriptionInput";
import ImageInput from "../components/Input/ImageInput";
import FeedbackHTTP from "../components/Form/FeedbackHTTP";
import { useAppSelector } from "../store/hooks";

const AddProducts = () => {
  const { status, loading, submitted } = useAppSelector(
    (state) => state.addProductReducer.addProducts
  );

  //reset form on status 200
  // useEffect(() => {
  //   if (status === 200) {
  //     reset();
  //     dispatch(addProductsActions.reset());
  //   }
  // }, [status]);

  
  return (
    <Container>
      <Card className="mx-auto w-full lg:w-[80ch]">
        <div>
          <h1 className="font-bold">Add Products</h1>
          <p className="text-lg">
            Admin panel for adding products to catalogue.
          </p>
        </div>
        <hr />
        <AddProductsFormWrapper>
          {submitted ? (
            <FeedbackHTTP status={status} />
          ) : (
            <>
              <ProductNameInput maxWidth />
              <PriceInput maxWidth />
              <ImageInput maxWidth />
              <DescriptionInput maxWidth />
              <hr className="col-span-2" />
              <Submit loading={loading} className="col-span-2" />
            </>
          )}
        </AddProductsFormWrapper>
      </Card>
    </Container>
  );
};

export default AddProducts;
