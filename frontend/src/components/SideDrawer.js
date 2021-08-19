import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["side-drawer"];
  const { cartItems } = useSelector((state) => state.cart);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(qty) + Number(item.qty), 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="side-drawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="side-drawer__cart-badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
