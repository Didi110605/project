import {Routes, Route} from 'react-router-dom'


import Header from "./components/Header";
import Main from './pages/Main';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductItem from './pages/ProductItem';
import ProductsFromCategory from './pages/ProductsFromCategory';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/allcategories" element={<Categories/>}/>
            <Route path="/products/category" element={<ProductsFromCategory type='category'/>}/>
            <Route path="/products/sale" element={<ProductsFromCategory type='sale'/>}/>
            <Route path="/products/all" element={<ProductsFromCategory type='all'/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/products/:id" element={<ProductItem/>}/>
        </Routes> 
        <Footer/>
      </div>
    </Provider>
    
  );
}

export default App;