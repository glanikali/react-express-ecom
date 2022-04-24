import React from "react";

interface Props {
  className?: string;
}
const Spinner = ({ className = "" }: Props) => {
  return (
    <div
      className={`border-4 border-solid rounded-[50%] border-t-pink-500 animate-spin ${
        className ? className : " h-[120px] w-[120px]"
      }`}
    ></div>
  );
};

export default Spinner;
