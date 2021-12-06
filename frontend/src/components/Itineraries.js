import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


const Itineraries = ({datos}) => {
  const [display, setDisplay] = useState(false);
  const HandleDisplay = () => setDisplay(!display);
  
  let precio = []
  for (let i = 0; i < datos.precio; i++) {
    precio.push(<span>💵</span>);
  }  

  return (
    <>
      <div className="itinerary">
        <h2 className="itinerary_title">{datos.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
          <div className="itinerary_item_dos mt-2">
            <img src={`/assets/images/${datos.guiaImg}.jpg`} alt="img" width="150" height="150" />
            <h2 className="font-bold texto-naranja"> {datos.guia} </h2>
          </div>
            <span> <span className="font-bold texto-naranja">Price :</span> {precio.map( e =>  e)}</span>
            <span className="font-bold texto-naranja">Duration :  {datos.duracion}</span>
          </div>

          <div className="itinerary_item_tres">
            
            <div >{datos.likes > 0 
              ? <>  <FcLike/> <span className="font-bold ">{datos.likes}</span></> 
              : <>  <FcLikePlaceholder/> <span className="font-bold">{datos.likes}</span></> }</div>

            <div className="itinerary_hastag">
          { datos.hashtags.map( hastag => <span className="font-bold texto-naranja">{hastag} </span> ) }
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
