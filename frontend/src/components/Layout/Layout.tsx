import Header from "./Header";
import Wrapper from "./Wrapper";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
