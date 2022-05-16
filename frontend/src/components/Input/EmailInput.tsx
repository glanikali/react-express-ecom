import { useFormContext } from "react-hook-form";
import { buildInputClassName, Props } from ".";
import { useState } from "react";

const EmailInput = ({ maxWidth = false }: Props) => {
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
  const error = errors?.email;

  return (
    <div className="">
      <label className={`font-bold capitalize text-lg`} htmlFor="email">
        {"Enter Email:"}
      </label>
      <input
        autoFocus={true}
        id="email"
        maxLength={500}
        type="email"
        placeholder="email"
        onFocus={() => handleOnFocus()}
        className={buildInputClassName({
          hasError: !!error,
          className: `h-14 w-full bg-zinc-100 rounded	p-2 focus:outline-0 ${
            maxWidth ? "w-full" : "sm:w-[550px]"
          } text-xl text-left border-2 ${
            outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
          }`,
        })}
        {...register("email", {
          required: true,
          onBlur: () => handleBlur(),
        })}
      />
    </div>
  );
};

export default EmailInput;
