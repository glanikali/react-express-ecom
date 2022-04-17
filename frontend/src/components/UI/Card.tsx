type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`rounded p-4 shadow-lg grid grid-cols-1 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
