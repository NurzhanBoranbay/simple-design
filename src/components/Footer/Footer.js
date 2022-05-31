import './Footer.scss';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__block">
               <div className="footer__logo">
                  Simple <span className="logo__red">Design</span>
                  <span className="logo__text">дизайн интерьеров</span>
               </div>
               <div className="footer__nav">
                  <li className="footer__list">
                     <a href="" className="footer__link">Главная</a>
                  </li>
                  <li className="footer__list">
                     <a href="" className="footer__link">Тест</a>
                  </li>
                  <li className="footer__list">
                     <a href="" className="footer__link">О нас</a>
                  </li>
                  <li className="footer__list">
                     <a href="" className="footer__link">Цены</a>
                  </li>
               </div>
               <div className="footer__policy">
                  <a href="#" className="privacy">Политика конфиденциальности</a>
                  <a href="#">Условия пользования</a>
               </div>
               <div className="footer__call">
                  <a href="#" className="call__num">+7 700 505 30 00</a>
                  <span className="work__data">с 9:00 до 18:00</span>
               </div>
            </div>
         </div>
         <div className="author">
            <div className="author__text">(с) 2022. Все права защищены.</div>
         </div>
      </footer>
   );
};

export default Footer;