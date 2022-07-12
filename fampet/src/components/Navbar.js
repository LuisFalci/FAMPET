import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </nav>
  );
}

export default Navbar;
