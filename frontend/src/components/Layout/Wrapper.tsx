type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <div className="w-11/12 mx-auto py-4 sm:w-4/6">{children}</div>;
};

export default Wrapper;
