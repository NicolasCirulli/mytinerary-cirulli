import React, { useState,useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import useDisplay from "../hooks/useDisplay";
import { useSelector, useDispatch } from "react-redux";
import comentariosActions from "../redux/actions/comentariosActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import Comment from "./Comment";
import ButtonLike from './ButtonLike'
import Loader from "../components/Loader";
const CardItineraries = ({ datos }) => {
  const boton = useDisplay();
  let precio = [];
  for (let i = 0; i < datos.precio; i++) {
    precio.push(<span>💵</span>);
  }


  let itineraries = useSelector(
    (store) => store.itinerariesReducer.itinerariosCiudad
  );

  let itinerarioFind;
  itineraries && (itinerarioFind = itineraries.find((e) => e._id === datos._id))
  const [value, setValue] = useState("");
  const [itinerario, setItinerario] = useState(itinerarioFind);
  const [actividades, setActividades] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const usuarios = useSelector((store) => store.usuariosReducer.usuarios);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");


  useEffect(() => {
    dispatch(itinerariesActions.obtenerActividadesItinerario(datos._id))
    .then((result) => {
      setActividades(result.data.response);
    })
    
  },[])


  const agregarComentario = async () => {
    try {
      const respuesta = await dispatch(
        comentariosActions.agregarComentarios(token, datos._id, value)
      );
      console.log(respuesta);
      setItinerario(respuesta.data.response);
      setValue("");
    } catch (err) {
      console.log(err);
    }
  };
  const borrarComentario = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted", "", "success");
        dispatch(
          comentariosActions.borrarComentario(token, datos._id, id)
        ).then((result) => {
          setItinerario(result.data.response);
          console.log(result.data.response);
        });
        setValue("");
      } else if (result.isDenied) {
        Swal.fire("Cancel", "", "info");
      }
    });
  };
  const modificarComentario = async (comentarioId, comentario) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Update",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated", "", "success");
        dispatch(
          comentariosActions.modificarComentario(
            token,
            datos._id,
            comentarioId,
            comentario
          )
        ).then((result) => {
          setItinerario(result.data.response);
          console.log(result.data.response);
        });
        setValue("");
      } else if (result.isDenied) {
        Swal.fire("Cancel", "", "info");
      }
    });
  };

  return (
    <>
      {itinerario 
      ?<div key={itinerario.titulo} className="itinerary">
        <h2 className="itinerary_title">{itinerario.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
            <img src={itinerario.imagen} alt="image_itinerary" />
          </div>
          <div className="itinerary_item_dos">
            <img src={itinerario.guiaImg} alt="img" />
            <h2 className="font-bold texto-negro"> {itinerario.guia} </h2>
          </div>

          <div className="itinerary_item_tres">
            <span>
              {" "}
              <span className="font-bold texto-negro">Price :</span>{" "}
              {precio.map((e) => e)}
            </span>
            <span className="font-bold texto-negro">
              Duration : {itinerario.duracion} hs
            </span>
            <div>
              <ButtonLike data={itinerario.likes} itinerario={itinerario}/> 
            </div>

            <div className="itinerary_hastag">
              {itinerario.hashtags.map((hastag) => (
                <span className="font-bold texto-negro mx-1"># {hastag} </span>
              ))}
            </div>
          </div>
        </div>

        {boton.display && (
          <>
            <div className="itinerary_activities">
              {actividades && actividades.map(e=>{
                return (
                  <>
                  <div className="itinerary_activities_cards">
                    <h3>{e.titulo}</h3>
                    <img src={e.imagen} alt="img" className="under"/>
                  </div>
                  </>
                )
              })}
              
            </div>

            <div className="itinerary_comentarios">

              {
              usuarios && (itinerario.comentarios.length > 0 &&
                itinerario.comentarios.map((comentario) => {
                  let datosUsuario = usuarios.find(
                    (e) => e.id === comentario.idUsuario
                  );
                  return (
                    <Comment
                      datos={datos}
                      datosUsuario={datosUsuario}
                      comentario={comentario}
                      borrarComentario={borrarComentario}
                      modificarComentario={modificarComentario}
                    />
                  );
                }))}
              <div className="agregarComentario">
                <TextField
                  id="outlined-textarea"
                  label="Post a new comment"
                  placeholder=""
                  multiline
                  value={value}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={agregarComentario}
                >
                  <MdSend />
                </Button>
              </div>
            </div>
          </>
        )}

        <button onClick={boton.HandleDisplay} className="itinerary_btn">
          {" "}
          {boton.display ? "view less" : "view more"}
        </button>
      </div>
      : <Loader/>  
    }
    </>
  );
};

export default CardItineraries;
