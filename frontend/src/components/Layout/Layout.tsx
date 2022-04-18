import Header from "./Header";
import Wrapper from "./Wrapper";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
