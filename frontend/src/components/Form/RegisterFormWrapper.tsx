import { useForm, FormProvider } from "react-hook-form";
import { Register, buildDefaultRegisterValues } from ".";
import axios from "axios";
import { baseURL } from "../../lib/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AuthActions } from "../../store/auth";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const RegisterFormWrapper = ({ children }: Props) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { register } = useAppSelector((state) => state.AuthReducer);
  const methods = useForm<Register>({
    defaultValues: buildDefaultRegisterValues(),
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (register.submitted) {
      if (register.error) {
        reset();
      }
      if (register.success) {
        dispatch(AuthActions.resetRegisterState());
        reset();
      }
    }
  }, [register, reset, dispatch]);

  const onSubmit = (registerObject: Register) => {
    console.log(registerObject);
    axios
      .post(`${baseURL}/auth/registration`, registerObject)
      .then((res) => {
        dispatch(
          AuthActions.updateRegisterState({
            error: false,
            submitted: true,
            success: true,
          })
        );
        navigate("/", { replace: true });
      })
      .catch((err) => {
        dispatch(
          AuthActions.updateRegisterState({
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
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default RegisterFormWrapper;
