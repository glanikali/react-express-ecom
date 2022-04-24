import { useForm, FormProvider } from "react-hook-form";
import { FormData, buildDefaultValues } from ".";
import axios from "axios";
import { useAppDispatch } from "../../store/hooks";
import { addProductsActions } from "../../store/addProductsSlice";
import { baseURL } from "../../lib/baseUrl";
import useSWR, { useSWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

const AddProductsFormWrapper = ({ children }: Props) => {
  const { data } = useSWR(baseURL);
  const { mutate } = useSWRConfig();

  //form methods - form context
  const methods = useForm<FormData>({
    defaultValues: buildDefaultValues(),
  });
  const { handleSubmit } = methods;

  //redux
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: FormData) => {
    dispatch(addProductsActions.addProductsLoadingState(true));

    const normalizeData = { ...formData, name: formData.productName };

    const postData = await axios
      .post(`${baseURL}/admin/product`, normalizeData)
      .then((res) => {
        dispatch(addProductsActions.addProducts(200));
      })
      .catch((err) => {
        dispatch(
          addProductsActions.addProductsError({ error: true, status: 400 })
        );
        console.log(err);
      });
    mutate(baseURL, [postData, ...data], false);
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
