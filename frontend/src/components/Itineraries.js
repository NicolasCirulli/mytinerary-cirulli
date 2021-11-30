import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const Itineraries = ({objeto}) => {
  const [display, setDisplay] = useState(false);
  const HandleDisplay = () => setDisplay(!display);
  const [prueba,setPrueba] = useState(objeto)
  

  return (
    <>
      <div className="itinerary">
        <h2 className="itinerary_title">{prueba.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
            <span className="font-bold texto-naranja">Price : {prueba.price}</span>
            <span className="font-bold texto-naranja">Duration :  {prueba.duracion}</span>
          </div>
          <div className="itinerary_item_dos mt-2">
            <img src={`/assets/images/${prueba.img}.jpg`} alt="cara del loco" width="150" height="150" />
            <h2 className="font-bold texto-naranja"> {prueba.nombre} </h2>
          </div>
          <div className="itinerary_item_tres">
            {prueba.likes > 0 ? <><FcLike/> <span className="font-bold ">{prueba.like}</span></> : <> <FcLikePlaceholder/> <span className="font-bold">{prueba.like}</span></> }
            <div>
          { prueba.hashtags.map( hastag => <span className="font-bold texto-naranja"># {hastag} </span> ) }
            </div>
          </div>
        </div>

        {display && (
          <div className="itinerary_activities">
        
            <img src="/assets/images/under.png" alt="" className="under"/>
           
            
          </div>
          
        )}

        <button onClick={HandleDisplay} className="itinerary_btn" >
          {" "}
          {display ? "view less" : "view more"}
        </button>
      </div >
     

      
    </>
  );
};

export default Itineraries;
