interface Props {
  className?: string;
}

const Submit = ({ className = "" }: Props) => {
  return (
    <input
      className={`h-[65px] bg-violet-800 text-white p-4 font-bold cursor-pointer hover:bg-violet-500 text-xl rounded ${className}`}
      type="submit"
    />
  );
};

export default Submit;
