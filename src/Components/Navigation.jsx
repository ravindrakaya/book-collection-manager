import { Link } from "react-router-dom";

const Navigation = () => {
 
  return (
    <div className="nav-header">
      <h3>
        <Link to="/" className="logo link-style">
          @BCM
        </Link>
      </h3>

      <ul className="nav-link-container">
        <li className="nav-link">
          <Link to="/" className="link-style">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/about" className="link-style">
            About
          </Link>
        </li>
        {/* <li className="nav-link">
          <Link to="/add-book" className="link-style">
            AddBook
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
