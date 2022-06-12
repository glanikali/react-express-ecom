import { useForm, FormProvider } from "react-hook-form";
import { Login, buildDefaultLoginValues } from ".";
import axios from "axios";
import { baseURL } from "../../lib/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AuthActions } from "../../store/auth";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const LoginFormWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.AuthReducer);

  const methods = useForm<Login>({
    defaultValues: buildDefaultLoginValues(),
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (login.submitted) {
      if (login.error) {
        reset({ password: "" });
      }
      if (login.success) {
        dispatch(AuthActions.resetLoginState());
        reset();
      }
    }
  }, [login, reset, dispatch]);

  const onSubmit = (loginObject: Login) => {
    axios
      .post(`${baseURL}/auth/login`, loginObject, { withCredentials: true })
      .then((res) => {
        dispatch(
          AuthActions.updateLoginState({
            error: false,
            submitted: true,
            success: true,
          })
        );
        navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(
          AuthActions.updateLoginState({
            error: true,
            submitted: true,
            success: false,
          })
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
