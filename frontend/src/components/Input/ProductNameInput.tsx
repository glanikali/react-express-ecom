import { useFormContext } from "react-hook-form";
import { buildInputClassName, Props } from ".";

const ProductNameInput = ({ maxWidth = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.productName;

  return (
    <input
      id="productName"
      maxLength={500}
      type="text"
      placeholder="Product Name"
      className={buildInputClassName({
        hasError: !!error,
        className: `h-[65px] w-full bg-zinc-200	p-2 text-white ${
          maxWidth ? "w-full" : "sm:w-[550px]"
        } text-xl text-left`,
      })}
      {...register("productName", { required: true })}
    />
  );
};

export default ProductNameInput;
