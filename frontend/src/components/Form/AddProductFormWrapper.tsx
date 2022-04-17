import { useForm, FormProvider } from "react-hook-form";
import { FormData, buildDefaultValues } from ".";

type Props = {
  children: React.ReactNode;
};

const AddProductsFormWrapper = ({ children }: Props) => {
  const methods = useForm<FormData>({
    defaultValues: buildDefaultValues(),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default AddProductsFormWrapper;
