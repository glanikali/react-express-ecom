type InputClassNameProps = {
  className?: string;
  hasError?: boolean;
};

export const ERROR_CLASSES =
  "border-pink-500 text-pink-500 placeholder-pink-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500";

export function buildInputClassName({
  hasError = false,
  className = "",
}: InputClassNameProps) {
  return hasError ? `${className} ${ERROR_CLASSES}` : `${className}`;
}

export interface Props {
  maxWidth?: boolean;
  textAlign?: string;
}
