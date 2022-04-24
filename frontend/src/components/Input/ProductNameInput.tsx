import { useFormContext } from "react-hook-form";
import { buildInputClassName, Props } from ".";
import { useState } from "react";

const ProductNameInput = ({ maxWidth = false }: Props) => {
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
    <div className="col-span-2 sm:col-span-1">
      <label className={`font-bold capitalize text-lg`} htmlFor="productName">
        {"Product Name:"}
      </label>
      <input
        autoFocus
        id="productName"
        maxLength={500}
        type="text"
        placeholder="Product Name"
        onFocus={() => handleOnFocus()}
        className={buildInputClassName({
          hasError: !!error,
          className: `h-14 w-full bg-zinc-100 rounded	p-2 focus:outline-0 ${
            maxWidth ? "w-full" : "sm:w-[550px]"
          } text-xl text-left border-2 ${
            outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
          }`,
        })}
        {...register("productName", {
          required: true,
          onBlur: () => handleBlur(),
        })}
      />
    </div>
  );
};

export default ProductNameInput;
