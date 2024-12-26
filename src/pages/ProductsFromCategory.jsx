import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchSaleProducts } from "../asyncActions/data";
import { useNavigate } from "react-router-dom";
import styles from './PFC.css';

function ProductsFromCategoriPage(props) {
  const { type } = props;
  const products = useSelector(store => store.products.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'all') {
      dispatch(fetchAllProducts());
    } else if (type === 'sale') {
      dispatch(fetchSaleProducts());
    }
  }, [type, dispatch]);

  return (
    <div className={`mainContent`}>
      <h4>All Products</h4>
      <div className={`productsContainer`}>
        <ul className={`productsList`}>
          {products.map(product => (
            <li
              className={`productCard`}
              key={product.id}
              onClick={() => navigate("/products/" + product.id)}
            >
              <div
                className={`productImage`}
                style={{ backgroundImage: `url(http://localhost:3333${product.image})` }}
              />
              <div className={`productInfo`}>
                <p className={`productTitle`}>{product.title}</p>
                <p className={`productPrice`}>${product.price}</p>
                {product.discont_price && (
                  <p className={`productDiscount`}>
                    ${product.discont_price}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsFromCategoriPage;