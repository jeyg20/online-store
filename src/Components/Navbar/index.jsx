import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuLeft = [
    { name: "ShopI", path: "/", className: "font-semibold text-lg" },
    { name: "All", path: "/All" },
    { name: "Clothes", path: "/Clothes" },
    { name: "Tech", path: "/Tech" },
    { name: "Furniture", path: "/Furniture" },
    { name: "Toys", path: "/Toys" },
    { name: "Others", path: "/Others" },
  ];
  const menuRight = [
    { name: "My Account", path: "/my-account" },
    { name: "My Orders", path: "/my-orders" },
    { name: "Orders History", path: "/orders-history" },
    { name: "Sign In", path: "/sign-in" },
    { name: "🛒 0", path: "/cart" },
  ];
  const activeStyle = "underline ";
  return (
    <nav className="flex justify-between items-center z-10 p-5 font-light text-md">
      <ul className="flex items-center gap-3">
        {menuLeft.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            exact
            className={({ isActive }) => `
              ${isActive && item.name !== "ShopI" ? activeStyle : ""}
              ${item.className}
              `}
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
