import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 classsName="brand">DB</h1>
      <ul className="link">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="links">
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
