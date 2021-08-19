import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../components/Product";

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home-screen">
      <h2 className="home-screen__title">Latest Products</h2>
      <div className="home-screen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              id={product._id}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
