import {useEffect, useState} from "react";

const Question = () => {
   const [active, setActive] = useState(false);

   return (
      <div className="questions__item">
         <div
            className={active ? 'question question__active' : 'question'}
            onClick={() => setActive(!active)}
         >
            Вопрос
            <span className="question__span-1"></span>
            <span className="question__span-2"></span>
         </div>
         <div className="question__text">
            {active
               ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat. Id sed quam consectetur condimentum tellus pellentesque a, convallis metus. Hac dui sit cursus ac id aliquet. A convallis suspendisse in nulla risus, senectus vitae. Condimentum in aliquet egestas aliquam at eu. Id bibendum iaculis netus ipsum quis amet lectus nisi mattis. Sit porttitor a vulputate aliquam elementum, odio lacus.'
               : null
            }
         </div>
      </div>
   );
};

export default Question;