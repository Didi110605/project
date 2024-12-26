import { NavLink, useNavigate } from "react-router-dom";

import logoImg from '../images/logo.png'
import cartImg from '../images/emptyCart.png'


function Header() {
  const navigate = useNavigate()

  return (
    <div className="header">
      <img onClick={() => navigate('/')} width={40} src={logoImg} />
      <ul className="menu_wrapper">
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={'/'}><li>Main Page</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={'/allcategories'}><li>Categories</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={'/products/all'}><li>All products</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={'/products/sale'}><li>All sales</li></NavLink>
      </ul>
      <img onClick={() => navigate('/cart')} width={30} src={cartImg} />
    </div>
  );
}

export default Header;