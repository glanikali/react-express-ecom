import { useForm, FormProvider } from "react-hook-form";
import { Login, buildDefaultLoginValues } from ".";

type Props = {
  children: React.ReactNode;
};

const LoginFormWrapper = ({ children }: Props) => {
  const methods = useForm<Login>({
    defaultValues: buildDefaultLoginValues(),
  });

  const { handleSubmit } = methods;

  const onSubmit = (e: Login) => {
    console.log(e);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default LoginFormWrapper;
