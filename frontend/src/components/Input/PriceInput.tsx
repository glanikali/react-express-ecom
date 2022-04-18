import { useFormContext } from "react-hook-form";
import { useState } from "react";

import { buildInputClassName, Props } from ".";

const PriceInput = ({ maxWidth = false }: Props) => {
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
      <p className={`font-bold capitalize text-lg`}>Product Price:</p>

      <div
        className={`grid grid-cols-10 border-2 ${
          outline ? "border-violet-800 drop-shadow-md" : "border-transparent"
        }`}
      >
        <label className="h-[65px] w-full bg-zinc-100 grid" htmlFor="price">
          <p className="place-self-center text-xl">$</p>
        </label>
        <input
          id="price"
          maxLength={500}
          // onChange={setOutline(true)}
          step=".01"
          min=".01"
          onFocus={() => handleOnFocus()}
          type="number"
          placeholder="Price"
          className={buildInputClassName({
            hasError: !!error,
            className: `h-[65px] w-full rounded bg-zinc-100 col-span-9 focus:outline-0 p-2  ${
              maxWidth ? "w-full" : "sm:w-[550px]"
            } text-xl text-left`,
          })}
          {...register("price", {
            required: true,
            onBlur: () => handleBlur(),
          })}
        />
      </div>
    </div>
  );
};

export default PriceInput;
