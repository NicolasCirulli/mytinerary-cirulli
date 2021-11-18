import React, { useState } from "react";
import CardSlide from "./CardSlide";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const CarouselCompo = () => {
  const ciudades =[
    {
      pais: "Japan",
      nombre: "Tokyo",
      descripcion:
        "' Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. '",
        imagen: ""
    },
    {
      pais: "South Korea",
      nombre: "Busan",
      descripcion:
        "Busan (formerly written as Pusan) is the largest port city and second-largest city in South Korea. It lies on the southeast tip of the Korean Peninsula. It is important for transport and shipping. It is best known for Busan Port and Haeundae Beach. The port takes many ships and accommodate trades among other countries.",
    },

    {
      pais: "Unite State",
      nombre: "Miami",
      descripcion:
        "Miami, city, seat (1844) of Miami-Dade county, southeastern Florida, U.S. A major transportation and business hub, Miami is a leading resort and Atlantic Ocean port situated on Biscayne Bay at the mouth of the Miami River. The Everglades area is a short distance to the west",
    },

    {
      pais: "Japan",
      nombre: "Kyoto",
      descripcion:
        "Kyoto, located in the Kansai region of Japan, is the country's seventh largest city, with a population of 1.4 million people. Steeped in history, Kyoto is home to roughly one quarter of Japan's national treasures, countless shrines and temples, and seventeen sites recognized by UNESCO as World Heritage Sites.",
    },
  ]
  

  return (
    <>
      <div className="carousel_custom">
        <AiFillCaretLeft className="fs-1" />
        <div>
          <div className=" carousel_custom_item ">
            {ciudades.map((ciudad) => {
              return (
                <CardSlide
                  key={ciudad.nombre}
                  arrayCiudades={ciudades}
                  ciudad={ciudad}
                />
              );
            })}
          </div>
        </div>
        <AiFillCaretRight className="fs-1" />
      </div>
    </>
  );
};

export default CarouselCompo;
