import { useForm, FormProvider } from "react-hook-form";
import { Register, buildDefaultRegisterValues } from ".";
import axios from "axios";
import { baseURL } from "../../lib/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { AuthActions } from "../../store/auth";

type Props = {
  children: React.ReactNode;
};

const RegisterFormWrapper = ({ children }: Props) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const methods = useForm<Register>({
    defaultValues: buildDefaultRegisterValues(),
  });

  const { handleSubmit } = methods;

  const onSubmit = (registerObject: Register) => {
    console.log(registerObject);
    axios
      .post(`${baseURL}/auth/registration`, registerObject)
      .then((res) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(
          AuthActions.updateRegisterState({ error: true, submitted: true })
        );
      });
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

export default RegisterFormWrapper;
