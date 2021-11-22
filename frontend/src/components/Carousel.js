import React from "react";
import CardSlide from "./CardSlide";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselCompo = () => {
  const ciudades = [
    [
      {
        pais: "Japan",
        nombre: "Tokyo",
        descripcion:
          "' Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. '",
        nombreImagen: "Tokyo",
      },
      {
        pais: "South Korea",
        nombre: "Busan",
        descripcion:
          "Busan (formerly written as Pusan) is the largest port city and second-largest city in South Korea. It lies on the southeast tip of the Korean Peninsula. It is important for transport and shipping. It is best known for Busan Port and Haeundae Beach. The port takes many ships and accommodate trades among other countries.",
        nombreImagen: "Busan",
      },

      {
        pais: "United States",
        nombre: "Miami",
        descripcion:
          "Miami, city, seat (1844) of Miami-Dade county, southeastern Florida, U.S. A major transportation and business hub, Miami is a leading resort and Atlantic Ocean port situated on Biscayne Bay at the mouth of the Miami River. The Everglades area is a short distance to the west",
        nombreImagen: "Miami",
      },

      {
        pais: "Japan",
        nombre: "Kyoto",
        descripcion:
          "Kyoto, located in the Kansai region of Japan, is the country's seventh largest city, with a population of 1.4 million people. Steeped in history, Kyoto is home to roughly one quarter of Japan's national treasures, countless shrines and temples, and seventeen sites recognized by UNESCO as World Heritage Sites.",
        nombreImagen: "Kyoto",
      },
    ],
    [
      {
        pais: "France",
        nombre: "Paris",
        descripcion:
          "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
        nombreImagen: "Paris",
      },
      {
        pais: "Italy",
        nombre: "Rome",
        descripcion:
          "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.",
        nombreImagen: "Rome",
      },

      {
        pais: " Ireland",
        nombre: "Dublin",
        descripcion:
          "Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey. Its historic buildings include Dublin Castle, dating to the 13th century, and imposing St Patrick’s Cathedral, founded in 1191. City parks include landscaped St Stephen’s Green and huge Phoenix Park, containing Dublin Zoo. The National Museum of Ireland explores Irish heritage and culture.",
        nombreImagen: "Dublin",
      },

      {
        pais: "Portugal",
        nombre: "Portimão",
        descripcion:
          "Portimão is a port city in the Algarve region of southern Portugal. It’s known for its old quarter, busy marina and proximity to many beaches. Museu de Portimão is housed in a restored 19th-century cannery, with displays on local history. The Gothic-style Nossa Senhora da Conceição church has azulejo tiles. To the south are Rocha Beach, backed by ochre cliffs, and the medieval Fort of Santa Catarina de Ribamar.",
        nombreImagen: "Portimão",
      },
    ],
    [
      {
        pais: "Spain",
        nombre: "San Sebastian",
        descripcion:
          "San Sebastián is a resort town on the Bay of Biscay in Spain’s mountainous Basque Country. It’s known for Playa de la Concha and Playa de Ondarreta, beaches framed by a picturesque bayfront promenade, and world-renowned restaurants helmed by innovative chefs. In its cobblestoned old town (Parte Vieja), upscale shops neighbor vibrant pintxo bars pairing local wines with bite-size regional specialties.",
        nombreImagen: "SanSebastian",
      },
      {
        pais: "Brazil",
        nombre: "Rio de Janeiro",
        descripcion:
          "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest",
        nombreImagen: "RioDeJaneiro",
      },

      {
        pais: "Italy",
        nombre: "Venice",
        descripcion:
          "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
        nombreImagen: "Venice",
      },

      {
        pais: "Argentina",
        nombre: "Buenos Aires",
        descripcion:
          "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace. Other major attractions include Teatro Colón, a grand 1908 opera house with nearly 2,500 seats, and the modern MALBA museum, displaying Latin American art.",
        nombreImagen: "BuenosAires",
      },
    ],
  ];
  return (
    <>
      <h2 className="titulo_carousel">Popular MyTineraries</h2>

      <Carousel className="carousel_custom" interval={2000} indicators={false} touch={true}>
            {ciudades.map((array) => {
              return (
                
                <CarouselItem>
                    <div className=" carousel_custom_item ">
                        {array.map((ciudad) => (<CardSlide key={ciudad.nombre} ciudad={ciudad} />))}
                    </div>
                </CarouselItem>
                
              );
            })}
      </Carousel>
    </>
  );
};

export default CarouselCompo;
