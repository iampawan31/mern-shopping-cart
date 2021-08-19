import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ name, imageUrl, description, price, id }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt="product name" />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <Link className="info__button" to={`/product/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
