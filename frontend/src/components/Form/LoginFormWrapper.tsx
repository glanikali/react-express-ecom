import { useForm, FormProvider } from "react-hook-form";
import { Login, buildDefaultLoginValues } from ".";
import axios from "axios";
import { baseURL } from "../../lib/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { AuthActions } from "../../store/auth";

type Props = {
  children: React.ReactNode;
};

const LoginFormWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm<Login>({
    defaultValues: buildDefaultLoginValues(),
  });

  const { handleSubmit } = methods;

  const onSubmit = (loginObject: Login) => {
    axios
      .post(`${baseURL}/auth/login`, loginObject, { withCredentials: true })
      .then((res) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(
          AuthActions.updateLoginState({ error: true, submitted: true })
        );
      });
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
