import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const Itineraries = ({datos}) => {
  const [display, setDisplay] = useState(false);
  const HandleDisplay = () => setDisplay(!display);
  const [itinerario,setitinerario] = useState(datos)
  

  return (
    <>
      <div className="itinerary">
        <h2 className="itinerary_title">{itinerario.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
            <span className="font-bold texto-naranja">Price : {itinerario.precio}</span>
            <span className="font-bold texto-naranja">Duration :  {itinerario.duracion}</span>
          </div>
          <div className="itinerary_item_dos mt-2">
            <img src={`/assets/images/${itinerario.guiaImg}.jpg`} alt="cara del loco" width="150" height="150" />
            <h2 className="font-bold texto-naranja"> {itinerario.guia} </h2>
          </div>
          <div className="itinerary_item_tres">
            {
              itinerario.likes > 0 
                ? <><FcLike/> <span className="font-bold ">{itinerario.likes}</span></> 
                : <> <FcLikePlaceholder/> <span className="font-bold">{itinerario.likes}</span></> 
            }
            <div>
          { itinerario.hashtags.map( hastag => <span className="font-bold texto-naranja"># {hastag} </span> ) }
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
