type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="p-4 grid gap-4 grid-cols-1">{children}</div>;
};

export default Container;
