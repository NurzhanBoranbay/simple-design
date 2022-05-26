
import './HowWork.scss'
import img_1 from '../../images/img/work_img-1.jpg'
import img_2 from '../../images/img/work_img-2.jpg'

const HowWork = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="work__block">
          <div className="work__steps">
            <h2 className="work__title title">Как это работает?</h2>

            <div className="work__step step-1">
              <div className="work__step-title">Выбор состава проекта</div>
              <div className="work__step-subtitle">
                Выберите состав вашего проекта: только планировка или дизайн-проект
              </div>
            </div>

            <div className="work__step step-2">
              <div className="work__step-title">Настройка проекта</div>
              <div className="work__step-subtitle">
                Отметьте в корзине нужен ли вам профессиональный замер, подбор строительной бригады или точный просчет сметы
              </div>
            </div>

            <div className="work__step step-3">
              <div className="work__step-title">Создание чертежей</div>
              <div className="work__step-subtitle">
                Наши дизайнеры спроектируют интерьер, подготовят чертежи.
              </div>
            </div>

          </div>
          <div className="work__image">
            <div className="work__image-block">
              <div className="work__image-1"><img src={img_1} alt="Image Sofa"/></div>
              <div className="work__image-2"><img src={img_2} alt="Image Sofa"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;