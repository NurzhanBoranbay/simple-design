import './Questions.scss';
import Question from "./Question";

const Questions = () => {

   return (
      <section className="questions">
         <div className="container">
            <div className="questions__title title">Часто задаваемые вопросы</div>
            <div className="questions__items">
               <Question/>
               <Question/>
               <Question/>
               <Question/>
               <Question/>
            </div>
         </div>
      </section>
   );
};

export default Questions;