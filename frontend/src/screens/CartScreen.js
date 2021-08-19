import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(qty) + Number(item.qty), 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cart-screen">
      <div className="cart-screen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.product}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCartHandler={removeFromCartHandler}
              item={cartItem}
            />
          ))
        )}
      </div>
      <div className="cart-screen__right">
        <div className="cart-screen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
