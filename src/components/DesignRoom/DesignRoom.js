
import './DesignRoom.scss'
import Rooms from "./Rooms/Rooms";

import img_living_1 from '../../images/img/living-rooms/room-1.jpg'
import img_living_2 from '../../images/img/living-rooms/room-2.jpg'
import img_living_3 from '../../images/img/living-rooms/room-3.jpg'

import img_children_1 from '../../images/img/children-rooms/room-1.jpg'
import img_children_2 from '../../images/img/children-rooms/room-2.jpg'
import img_children_3 from '../../images/img/children-rooms/room-3.jpg'

import img_corridor_1 from '../../images/img/corridor-rooms/room-1.jpg'
import img_corridor_2 from '../../images/img/corridor-rooms/room-2.jpg'
import img_corridor_3 from '../../images/img/corridor-rooms/room-3.jpg'
import LinkRed from "../LinkRed/LinkRed";

const livingRoom = {
   nameRoom: "Гостиные",
   designName: ["Акварель", "Ира", "Нурс",],
   imgRoom: {
      imgOne: img_living_1,
      imgTwo: img_living_2,
      imgThree: img_living_3,
   }
}

const childrenRoom = {
   nameRoom: "Детские",
   designName: ["Синяя", "Розовая", "Яркая",],
   imgRoom: {
      imgOne: img_children_1,
      imgTwo: img_children_2,
      imgThree: img_children_3,
   }
}

const corridorRoom = {
   nameRoom: "Коридоры - прихожие",
   designName: ["Ирина", "Акварель", "Кадыр",],
   imgRoom: {
      imgOne: img_corridor_1,
      imgTwo: img_corridor_2,
      imgThree: img_corridor_3,
   }
}

const DesignRoom = () => {
   return (
      <section className="design__room">
         <div className="container">
            <h2 className="design__room-title">Дизайн комнат</h2>
            <div className="design__room-subtitle">Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в интерьере,
               <br/>названиями, артикулами, цветом стен и так далее.</div>

            <Rooms
               nameRoom={livingRoom.nameRoom}
               designName={livingRoom.designName}
               imgRoom={livingRoom.imgRoom}
            />
            <Rooms
               nameRoom={childrenRoom.nameRoom}
               designName={childrenRoom.designName}
               imgRoom={childrenRoom.imgRoom}
            />
            <Rooms
               nameRoom={corridorRoom.nameRoom}
               designName={corridorRoom.designName}
               imgRoom={corridorRoom.imgRoom}
            />
            <div className="catalog__room">
               <LinkRed text="К каталогу комнат" />
            </div>
         </div>
      </section>
   );
};

export default DesignRoom;