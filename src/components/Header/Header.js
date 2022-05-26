import Nav from "./Nav/Nav";
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            Simple <span className="span-1">Design</span><br/>
            <span className="span-2">дизайн интерьера</span>
          </div>
          <div className="header__nav">
            <Nav />
          </div>
          <div className="header__phone">
            <a href="tell:+77005053000" className="phone__number">+7 700 505 3000</a>
            <span className="work__date">с 9:00 до 18:00</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;