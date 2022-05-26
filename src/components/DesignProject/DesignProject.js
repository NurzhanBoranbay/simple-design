
import './DesignProject..scss'
import DesignTitle from "./DesignTitle";
import LinkRed from "../LinkRed/LinkRed";
import {useState} from "react";
import basket from '../../images/icons/basket.png'
import kaspi from '../../images/icons/kaspi.png'

const DesignProject = () => {
  const [text, setText] = useState([
    {id: 1, text: 'Дизайн-проект для вашей квартиры за 2 недели и 199 000 ₸'},
    {id: 2, text: 'Не важно сколько квадратов, цена неизменно'},
    {id: 3, text: 'Рассрочка до 24 месяцев'},
  ]);
  const [nextText, setNextText] = useState(text[0].text)

  return (
    <section className="design__project">
      <div className="design__basket">
        <div className="my-order">
          <span className="order-1">Мой заказ</span>
          <span className="order-2">3 х 29 000тг</span>
        </div>
        <div className="design__basket-icon">
          <img src={basket} alt="Корзина"/>
        </div>
      </div>
      <div className="container">
        <div className="consultation">
          <DesignTitle>
            <h2 className="title">
              { nextText }
            </h2>
            <LinkRed text="Консультация" />
          </DesignTitle>
        </div>
        <div className="text__slider">
          { text.map((t, i) => (
            <span
              key={i}
              className={"span__slider" + `${t.text === nextText ? " active" : ""}`}
              onClick={() => setNextText(text[i].text)}
            ></span>
          )) }
        </div>
        <div className="design__advice">
          <div className="design__advice-items">
            <div className="advice-item item-1">
              <div className="item-text">2 недели<br/>
                <span className="span-month">срок выполнения<br/>заказа</span></div>
            </div>
            <div className="advice-item item-2">
              <div className="item-text">Не важно<br/>
                <span className="span-month">Сколько квадратов,<br/>цена - одна!</span></div>
            </div>
            <div className="advice-item item-3">
              <div className="item-text">
                Рассрочка<br/>
                <span className="span-month">до 24 месяцев</span>
                <span className="span-kaspi"><img src={kaspi} alt="Kaspi Bank"/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProject;