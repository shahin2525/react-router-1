import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink className="mr-6" to="/">
          Home
        </NavLink>
        <NavLink className="mr-6" to="/users">
          Users
        </NavLink>
        <NavLink className="mr-6" to={"/about"}>
          About
        </NavLink>
        <NavLink className="mr-6" to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className="mr-6" to={"/posts"}>
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
