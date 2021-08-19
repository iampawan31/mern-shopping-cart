import "./ProductScreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import React from "react";

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.getProduct);
  const { product, loading, error } = productDetails;

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);
  return (
    <div className="product-screen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        error
      ) : (
        <React.Fragment>
          <div className="product-screen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__price">Price: ${product.price}</p>
              <p className="left__description">{product.description}</p>
            </div>
          </div>
          <div className="product-screen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span
                  className={
                    product.countInStock > 0 ? "in-stock" : "out-of-stock"
                  }
                >
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </p>
              <p>
                <button onClick={addToCartHandler} type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductScreen;
