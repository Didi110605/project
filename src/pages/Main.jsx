import { useDispatch, useSelector } from "react-redux";
// Импорт действий для работы с асинхронными запросами
import { fetchHomeCategories, fetchSaleForHomeProducts, fetchProductsById, fetchProductsFromCategori } from "../asyncActions/data";
// Импорт хуков из React
import { useEffect } from "react";
import OffForm from "../components/OffForm"; // Импорт компонента OffForm
import { useNavigate } from "react-router-dom"; // Импорт хука useNavigate для навигации

function HomePage() {
  const navigate = useNavigate(); // Инициализация navigate
  // Получение данных из глобального состояния Redux
  const categories = useSelector(store => store.products.category);
  const saleProducts = useSelector(store => store.products.data);
  const dispatch = useDispatch(); // Инициализация dispatch

  // useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    dispatch(fetchHomeCategories()); // Загрузка категорий для главной страницы
    dispatch(fetchSaleForHomeProducts()); // Загрузка акционных товаров
  }, [dispatch]);

  // Функция для обработки клика по категории
  const handleCategoryClick = (id) => {
    dispatch(fetchProductsFromCategori(id)); // Запрос товаров из выбранной категории
    navigate('/products/all'); // Переход на страницу со всеми товарами
  };

  // Функция для обработки клика по товару
  const handleProductClick = (id) => {
    dispatch(fetchProductsById(id)); // Запрос данных о выбранном товаре
    navigate(`/products/${id}`); // Переход на страницу товара
  };

  return (
    <div>
      <div className="baner">
        <h1>Amazing Discounts on Garden Products!</h1>
        <button>Check out</button>
      </div>

      <div className="homeContent">
        <div className="categoriesListHome">
          <div className="lineBtn">
            <h2>Categories</h2>
            <hr className="line" />
            <button onClick={() => navigate('/allcategories')} className="categoriBtn">All categories</button>
          </div>
          <ul className="categoriesList">
            {categories.map(category => (
              <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                {category.title}
                <img width={250} src={`http://localhost:3333${category.image}`} />
              </li>
            ))}
          </ul>
        </div>

        <OffForm /> {/* Компонент для оффлайн формы */}

        <div>
          <div className="lineBtn">
            <h1>Sale</h1>
            <hr className="line" />
            <button onClick={() => navigate('/products/sale')} className="categoriBtn">All sales</button>
          </div>

          <ul className="saleList">
            {saleProducts.map(product => (
              <li className="listContent" key={product.id} onClick={() => handleProductClick(product.id)}>
                <img width={250} src={`http://localhost:3333${product.image}`} />
                <p>{product.title}</p>
                <h3>${product.discont_price}</h3>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage; // Экспорт компонента HomePage