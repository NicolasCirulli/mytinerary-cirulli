import Figure from "react-bootstrap/Figure";
import { Carousel } from "react-bootstrap";



const PlanTrip = ()=>{
    return (
      <>
      <h2 className="parrafo fs-3 text-dark mt-3">There's a plan for every trip</h2>
        <div className=" d-flex justify-content-around">
        <Carousel>
        <Carousel.Item>
        
        <Figure className="mx-3 ">
        <Figure.Caption className="text-dark text-center">Beach</Figure.Caption>
        <Figure.Image width={400} height={250} alt="171x180" src='./assets/images/playa.jpg' className="rounded" />
        </Figure>
        </Carousel.Item>
        <Carousel.Item>

      <Figure className="mx-3 ">
        <Figure.Caption className="text-dark text-center">Mountain</Figure.Caption>
        <Figure.Image width={400} height={250} alt="171x180" src='./assets/images/montaña.jpg' className="rounded" />
      </Figure>
      </Carousel.Item>
      <Carousel.Item>

      <Figure className="mx-3  ">
        <Figure.Caption className="text-dark text-center">Popular Cities</Figure.Caption>
        <Figure.Image width={400} height={250} alt="171x180" src='./assets/images/tokyo.jpg' className="rounded" />
      </Figure>
      </Carousel.Item>

        </Carousel>
      </div>
      </>
    )
}
export default PlanTrip