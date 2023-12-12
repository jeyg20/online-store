import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuLeft = [
    {
      name: "ShopI",
      path: "/",
      className: "font-semibold text-lg",
    },
    {
      name: "Clothes",
      path: "/Clothes",
      className: "",
    },
    {
      name: "Tech",
      path: "/Tech",
      className: "",
    },
    {
      name: "Furniture",
      path: "/Furniture",
      className: "",
    },
    {
      name: "Toys",
      path: "/Toys",
      className: "",
    },
    {
      name: "Others",
      path: "/Others",
      className: "",
    },
  ];
  const menuRight = [
    {
      name: "My Account",
      path: "/my-account",
      className: "",
    },
    {
      name: "My Orders",
      path: "/my-orders",
      className: "",
    },
    {
      name: "Orders History",
      path: "/orders-history",
      className: "",
    },
    {
      name: "Sign In",
      path: "/sign-in",
      className: "",
    },
    {
      name: "🛒 0",
      path: "/cart",
      className: "",
    },
  ];
  const activeStyle = "underline";
  return (
    <nav className="flex justify-between items-center z-10 p-5 font-light text-sm">
      <ul className="flex items-center gap-3">
        {menuLeft.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            exact
            className={({ isActive, isPending }) =>
              `${isPending ? "pending" : isActive ? activeStyle : ""}  ${
                item.className
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        {menuRight.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            exact
            className={({ isActive, isPending }) =>
              `${isPending ? "pending" : isActive ? activeStyle : ""}  ${
                item.className
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
