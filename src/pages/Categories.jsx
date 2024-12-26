import { useEffect } from "react";
import { fetchCategories, fetchProductsFromCategori } from "../asyncActions/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AllCategoriesPage() {
  const navigate = useNavigate();
  const categories = useSelector(store => store.products.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    navigate('/products/category');
    dispatch(fetchProductsFromCategori(id));
  };

  return (
    <div>
      <ul className="categoriesList">
        {categories.map(categori => (
          <li key={categori.id} onClick={() => handleCategoryClick(categori.id)}>
            <img src={`http://localhost:3333${categori.image}`} alt={categori.title} />
            <p>{categori.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllCategoriesPage;