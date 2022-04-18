import { useForm, FormProvider } from "react-hook-form";
import { FormData, buildDefaultValues } from ".";
import axios from "axios";
import { useAppDispatch } from "../../store/hooks";
import { addProductsActions } from "../../store/addProductsSlice";

type Props = {
  children: React.ReactNode;
};

const AddProductsFormWrapper = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const methods = useForm<FormData>({
    defaultValues: buildDefaultValues(),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    dispatch(addProductsActions.addProductsLoadingState(true));

    const baseURL =
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_BASE_URL_DEV
        : process.env.REACT_APP_BASE_URL_PROD;

    const normalizeData = { ...data, name: data.productName };
    console.log(normalizeData);
    axios
      .post(`${baseURL}/admin/product`, normalizeData)
      .then((res) => {
        console.log(res);
        dispatch(addProductsActions.addProducts(200));
      })
      .catch((err) => {
        dispatch(
          addProductsActions.addProductsError({ error: true, status: 400 })
        );
        console.log(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default AddProductsFormWrapper;
