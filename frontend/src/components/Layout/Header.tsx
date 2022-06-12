import { Link, useLocation } from "react-router-dom";


const mainNav = [
  { path: "/", name: "Shop" },
  { name: "Cart", path: "/cart" },
];

const authRoutes = [
  { name: "Add Products", path: "/admin/add-product" },
  { name: "Manage Products", path: "/admin/manage-products" },
];

const Header = () => {
  let urlParam = useLocation();

  return (
    <header>
      <nav className="drop-shadow-lg  bg-violet-800 ">
        <div className="grid gap-4 grid-cols-2 relative w-11/12 mx-auto py-4 sm:w-4/6">
          <ul className="place-self-start flex gap-4 h-full list-none place-items-center">
            {mainNav.map((el, i) => {
              return (
                <li key={i}>
                  <Link
                    className={`text-xl text-white font-bold transition-all ${
                      urlParam.pathname === el.path
                        ? "opacity-100 -translate-y-6 underline decoration-pink-500"
                        : "opacity-70"
                    } hover:underline hover:decoration-pink-500 `}
                    to={el.path}
                  >
                    {el.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to="/auth"
            className="place-self-end bg-white py-2 px-6 rounded hover"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
