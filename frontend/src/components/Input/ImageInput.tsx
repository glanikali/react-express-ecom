import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { buildInputClassName, Props } from ".";

const ImageInput = ({ maxWidth = false }: Props) => {
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
      <label className={`font-bold capitalize text-lg`} htmlFor="image">
        {"Product Image:"}
      </label>
      <input
        id="image"
        maxLength={500}
        type="text"
        placeholder="Image URL"
        onFocus={() => handleOnFocus()}
        className={buildInputClassName({
          hasError: !!error,
          className: `h-14 w-full bg-zinc-100	p-2 rounded focus:outline-0 ${
            maxWidth ? "w-full" : "sm:w-[550px]"
          } text-xl text-left border-2 ${
            outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
          }`,
        })}
        {...register("image_url", {
          required: true,
          onBlur: () => handleBlur(),
        })}
      />
    </div>
  );
};

export default ImageInput;
