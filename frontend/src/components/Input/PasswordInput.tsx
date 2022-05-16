import { useFormContext } from "react-hook-form";
import { buildInputClassName, Props } from ".";
import { useState } from "react";

const PasswordInput = ({ maxWidth = false }: Props) => {
  const [outline, setOutline] = useState<boolean>(false);

  const handleOnFocus = () => {
    setOutline(true);
  };
  const handleBlur = () => {
    setOutline(false);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.password;

  return (
    <div className="">
      <label className={`font-bold capitalize text-lg`} htmlFor="password">
        {"Enter Password:"}
      </label>
      <input
        autoFocus={false}
        id="password"
        maxLength={500}
        minLength={8}
        type="password"
        placeholder="password"
        onFocus={() => handleOnFocus()}
        className={buildInputClassName({
          hasError: !!error,
          className: `h-14 w-full bg-zinc-100 rounded	p-2 focus:outline-0 ${
            maxWidth ? "w-full" : "sm:w-[550px]"
          } text-xl text-left border-2 ${
            outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
          }`,
        })}
        {...register("password", {
          required: true,
          onBlur: () => handleBlur(),
        })}
      />
    </div>
  );
};

export default PasswordInput;
