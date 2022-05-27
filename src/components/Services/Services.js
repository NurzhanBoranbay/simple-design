
import './Services.scss'
import LinkRed from "../LinkRed/LinkRed";
import img_1 from '../../images/img/plan/services_plan-img-1.png'
import img_2 from '../../images/img/plan/services_plan-img-2.png'
import img_3 from '../../images/img/plan/services_plan-img-3.png'
import img_left_1 from '../../images/img/plan/services_img-left-1.png'
import img_left_2 from '../../images/img/plan/services_img-left-2.png'
import img_left_3 from '../../images/img/plan/services_img-left-3.png'

const Services = () => {
   return (
      <section className="services" >
         <div className="container">
            <h2 className="services__title title">Наши услуги</h2>
            <div className="services__plan plan-1">
               <div className="services__plan-title">Планировка за 99 000 ₸</div>
               <div className="services__plan-subtitle">Срок выполнения: 5 дней</div>
               <div className="services__plan-descr">
                  Мы разработаем для вас уникальное планировочное решение квартиры, которое будет соответствовать как нормам эргономики, так и вашим личным пожеланиям, а также подготовим чертеж для согласования планировки.
               </div>
               <div className="services__plan-steps">
                  <span className="services-span">2 варианта планировки + финальный</span>
                  <span className="services-span">обмерный план</span>
                  <span className="services-span">план демонтажа стен</span>
                  <span className="services-span">план монтажа перегородок</span>
               </div>
            </div>
            <div className="services__contact">
               <LinkRed text="Оставить заявку" />
               <a href="../../example/project-example.pdf" className="services__example" download>Посмотреть пример</a>
            </div>
            <div className="services__image image-right">
               <div className="plan__img">
                  <div className="plan__img-1"><img src={img_1} alt="Plan Image 1" /></div>
                  <div className="plan__img-2"><img src={img_2} alt="Plan Image 2" /></div>
                  <div className="plan__img-3"><img src={img_3} alt="Plan Image" /></div>
               </div>
            </div>

            <div className="services__plan plan-2">
               <div>
                  <div className="services__plan-title">Дизайн-проект за 199 000 ₸</div>
                  <div className="services__plan-subtitle">Срок выполнения: 14 дней</div>
                  <div className="services__plan-descr">
                     Разработаем планировочное решение вашей квартиры, далее на его основе мы подготовим альбом, состоящий из 12 чертежей, необходимых строителям для ремонта.
                  </div>
                  <div className="services__plan-steps">
                     <span className="services-span">2 варианта планировки + финальный</span>
                     <span className="services-span">планы демонтажа и монтажа стен</span>
                     <span className="services-span">сантехника</span>
                     <span className="services-span">план потолка</span>
                     <span className="services-span">план пола и плинтусов</span>
                     <span className="services-span">план дверей</span>
                  </div>
                  <div className="services__contact">
                     <LinkRed text="Оставить заявку" />
                     <a href="../../example/project-example.pdf" className="services__example" download>Посмотреть пример</a>
                  </div>
                  <div className="services__image image-left">
                     <div className="plan__img">
                        <div className="plan__img-1"><img src={img_left_1} alt="Plan Image 1" /></div>
                        <div className="plan__img-2"><img src={img_left_2} alt="Plan Image 2" /></div>
                        <div className="plan__img-3"><img src={img_left_3} alt="Plan Image" /></div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default Services;