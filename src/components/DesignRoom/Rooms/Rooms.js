import './Rooms.scss';

const Rooms = ({nameRoom, designName, imgRoom}) => {
   const [name_1, name_2, name_3] = designName
   const {imgOne, imgTwo, imgThree} = imgRoom

   return (
      <div className="design__room-names">
         <div className="name__room">
            <div>{nameRoom}</div>
            <span className="room-line"></span>
         </div>
         <div className="design__room-block">
            <div className="room__images">
               <div className="room__img img-1">
                  <img src={imgOne} alt="Image One"/>
                  <div className="design__choice">
                     <div className="name__img">{name_1}</div>
                     <div className="choice__img">
                        <span>Выбрать</span>
                     </div>
                  </div>
               </div>
               <div className="room__img img-1">
                  <img src={imgTwo} alt="Image Two"/>
                  <div className="design__choice">
                     <div className="name__img">{name_2}</div>
                     <div className="choice__img"><span>Выбрать</span></div>
                  </div>
               </div>
               <div className="room__img img-1">
                  <img src={imgThree} alt="Image Three"/>
                  <div className="design__choice">
                     <div className="name__img">{name_3}</div>
                     <div className="choice__img"><span>Выбрать</span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Rooms;