import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(qty) + Number(item.qty), 0);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>MERN Shopping Cart</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart
              <span className="cart-logo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
