import { useFormContext } from "react-hook-form";
import { isNumberObject } from "util/types";
import { buildInputClassName, Props } from ".";

const ImageInput = ({ maxWidth = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.productName;

  return (
    <input
      id="image"
      maxLength={500}
      type="text"
      placeholder="Image Url"
      className={buildInputClassName({
        hasError: !!error,
        className: `h-[65px] w-full bg-zinc-200	p-2 text-white ${
          maxWidth ? "w-full" : "sm:w-[550px]"
        } text-xl text-left`,
      })}
      {...register("image_url", { required: true, value: isNumberObject })}
    />
  );
};

export default ImageInput;
