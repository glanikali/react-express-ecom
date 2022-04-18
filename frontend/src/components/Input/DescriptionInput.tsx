import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { buildInputClassName, Props } from ".";

const DescriptionInput = ({ maxWidth = false }: Props) => {
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
  const error = errors?.productName;

  return (
    <div className="col-span-2">
      <label className={`font-bold capitalize text-lg`} htmlFor="description">
        {"Product Description:"}
      </label>
      <textarea
        id="description"
        rows={4}
        maxLength={500}
        placeholder="enter a product description here..."
        onFocus={() => handleOnFocus()}
        className={buildInputClassName({
          hasError: !!error,
          className: `h-[65px] w-full bg-zinc-100	p-2 rounded focus:outline-0 ${
            maxWidth ? "w-full" : "sm:w-[550px]"
          } text-xl text-left border-2 ${
            outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
          }`,
        })}
        {...register("description", {
          required: true,
          onBlur: () => handleBlur(),
        })}
      />
    </div>
  );
};

export default DescriptionInput;
