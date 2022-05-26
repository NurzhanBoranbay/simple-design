
import './Nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <li className="nav__link"><a href="#" className="nav__link nav__link-active">Главная</a></li>
      <li className="nav__link"><a href="#" className="nav__link">Тест</a></li>
      <li className="nav__link"><a href="#" className="nav__link">Каталог</a></li>
      <li className="nav__link"><a href="#" className="nav__link">О нас </a></li>
      <li className="nav__link"><a href="#" className="nav__link">Цены</a></li>
    </nav>
  );
};

export default Nav;