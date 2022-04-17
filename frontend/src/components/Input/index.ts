type InputClassNameProps = {
  className?: string;
  hasError?: boolean;
};

export const ERROR_CLASSES =
  "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500";

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
