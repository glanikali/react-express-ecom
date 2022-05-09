import React from "react";

type Props = {
  type?: "button" | "reset" | "submit" | undefined;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  type = "button",
  className,
  children,
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`h-16 w-full bg-violet-800 text-white p-4 font-bold cursor-pointer hover:bg-violet-500 text-xl rounded transition-all shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
