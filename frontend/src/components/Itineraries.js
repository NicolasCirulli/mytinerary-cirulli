import React,{ useState} from "react";
    const Itineraries = () => {
    const [display, setDisplay] = useState(false)
    const HandleDisplay = ()=> setDisplay(!display)

  return (
    <>
      <div className="itinerary">
        <h2 className="itinerary_title">Walking through the central park</h2>
        <div className="itinerary_body">
          <div className="d-flex flex-column">
            <span>Price</span>
            <span>Duration: 2 Hours</span>
          </div>
          <div>
            <img src="asd" alt="cara del loco" width="150" height="150" />
            <h2>Juan Perez</h2>
          </div>
          <div className="d-flex justify-content-center">
            <span>#Walk</span>
            <span>#CentralPark</span>
            <span>#Sublime</span>
          </div>
          </div>
          
           { display  && <div className="itinerary_activities">
              <h2>UNDER CONSTRUCTOR</h2>
            </div>}
          
          <button onClick={HandleDisplay}> click</button>
        </div>
      
    </>
  );
};

export default Itineraries;
