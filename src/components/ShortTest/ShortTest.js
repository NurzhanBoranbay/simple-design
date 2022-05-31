import './ShortTest.scss';
import LinkRed from "../LinkRed/LinkRed";

const ShortTest = () => {
   return (
      <section className="test">
         <div className="container">
            <div className="test__title">
               Давайте определим, что вам нравится
            </div>
            <div className="test__subtitle">
               Пройдите короткий тест и мы покажем подходящие вам стилевые решения
            </div>
            <LinkRed text="Пройти тест" />
         </div>
      </section>
   );
};

export default ShortTest;