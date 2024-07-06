import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link className="mr-6" to="/">
          Home
        </Link>
        <Link className="mr-6" to="/users">
          Users
        </Link>
        <Link className="mr-6" to={"/about"}>
          About
        </Link>
        <Link className="mr-6" to={"/contact"}>
          Contact
        </Link>
        <Link className="mr-6" to={"/posts"}>
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
