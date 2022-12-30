import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shop"> Shop</Link>
        </li>

        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/login"> login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
