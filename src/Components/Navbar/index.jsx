import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center z-10 p-5 font-light text-sm">
      <ul className="flex items-center gap-3">
        <li>
          <NavLink className="font-semibold text-lg" to="/" end>
            ShopR
          </NavLink>
        </li>
        <li>
          <NavLink to="/All">All</NavLink>
        </li>
        <li>
          <NavLink to="/Clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/Tech">Tech</NavLink>
        </li>
        <li>
          <NavLink to="/Furniture">Furniture</NavLink>
        </li>
        <li>
          <NavLink to="/Toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/Others">Other</NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/orders-history">Orders History</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
