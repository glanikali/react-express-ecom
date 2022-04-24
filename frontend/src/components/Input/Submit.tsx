import LoadingSpinner from "../UI/LoadingSpinner";
interface Props {
  className?: string;
  loading?: boolean;
}

const Submit = ({ className = "", loading = false }: Props) => {
  return (
    <div className={`${className} ${loading ? "opacity-50" : ""} relative shadow-md transition-all`}>
      <button
        className={`h-16 w-full bg-violet-800 text-white p-4 font-bold cursor-pointer hover:bg-violet-500 text-xl rounded transition-all`}
        type="submit"
        disabled={loading}
      >
        {loading ? "" : "Submit"}
      </button>
      {loading && (
        <div className="absolute w-full h-full top-0 grid place-content-center">
          <LoadingSpinner className="h-[40px] w-[40px]" />
        </div>
      )}
    </div>
  );
};

export default Submit;
