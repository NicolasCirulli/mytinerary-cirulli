import {Link} from 'react-router-dom'
const BotonCrearItinerario = ({ ciudad }) => {
  return (
    <>
    <div className="text-center bg-oscuro pt-5"> 
      <Link to='/CreateItinerary'><button className="btn btn-city">Do you want to create an itinerary?</button></Link>
    </div>
    </>
  );
};

export default BotonCrearItinerario;
