import { Link, useLocation } from "react-router-dom";

const mainNav = [
  { path: "/", name: "Home" },
  { name: "Cart", path: "/cart" },
  { name: "Add Products", path: "/admin/add-product" },
  { name: "Manage Products", path: "/admin/manage-products" },
];

const Header = () => {
  let urlParam = useLocation();

  return (
    <header>
      <nav className="drop-shadow-lg">
        <ul className="flex gap-4 bg-violet-800 h-full list-none place-content-center place-items-center p-4 relative">
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
      </nav>
    </header>
  );
};

export default Header;
