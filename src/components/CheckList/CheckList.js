
import './CheckList.scss'
import LinkRed from "../LinkRed/LinkRed";
import check_list from '../../images/img/check-list.png'

const CheckList = () => {
   return (
      <div className="check__list">
         <div className="check__list-img">
            <img src={check_list} alt="Check List"/>
         </div>
         <div className="check__list-question">
            <div className="question__title">Планируете ремонт?</div>
            <div className="question__text">Ответьте на несколько вопросов и получите бесплатный чек-лист по ремонту</div>
            <LinkRed text="Получить чек-лист" />
         </div>
      </div>
   );
};

export default CheckList;