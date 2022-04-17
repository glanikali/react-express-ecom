import { useFormContext } from "react-hook-form";
import { isNumberObject } from "util/types";
import { buildInputClassName, Props } from ".";

const PriceInput = ({ maxWidth = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.productName;

  return (
    <input
      id="price"
      maxLength={500}
      type="number"
      placeholder="Price"
      className={buildInputClassName({
        hasError: !!error,
        className: `h-[65px] w-full bg-zinc-200	p-2 text-white ${
          maxWidth ? "w-full" : "sm:w-[550px]"
        } text-xl text-left`,
      })}
      {...register("price", { required: true, value: isNumberObject })}
    />
  );
};

export default PriceInput;
