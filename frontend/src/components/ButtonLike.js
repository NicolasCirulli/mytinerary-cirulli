import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdFavorite } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useSelector, useDispatch } from 'react-redux';

const ButtonLike = ({data,itinerario,alerta})=> {


  const [count, setCount] = useState(data.length);
  const user = useSelector(state=> state.usuariosReducer._id)
  const [like, setLike] = useState(data.includes(user))
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  

  const likear = async() =>{
    if(user){
      try{
        const respuesta = await dispatch(itinerariesActions.likearItinerario(token,itinerario._id,like))
        setCount(respuesta.data.response.likes.length)
        setLike(!respuesta.data.response.likes.includes(user))
      }catch(e){console.log(e)}
    }else{
      alerta()
    }
  }
  return (
    <Box
      sx={{
        color: '#699BF5',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 1,
        },
        '& .MuiBadge-root': {
          marginRight: 2,
        },
      }}
    >
      <div className="contenedor-likes">
        <Badge color="primary" badgeContent={count}>
        <ButtonGroup>
          {/* { count > 0 
           ? <MdFavorite onClick={likear} className="fs-3 text-danger" />
           : <MdFavorite onClick={likear} className="fs-3 text-warning" />
          } */}
          <MdFavorite onClick={likear} className="fs-3 text-danger hover" />
          </ButtonGroup>
        </Badge>
        {/* <ButtonGroup>
          { 
         

            user && 
            (!like 
              ?<BiLike className="fs-2 contenedor-likes_like"
              aria-label="reduce"
              onClick={likear}
              />
              
              : <BiLike className="fs-2 contenedor-likes_dislike"
              aria-label="reduce"
              onClick={likear}
              />)
              
          }
          
        </ButtonGroup> */}
      </div>
    </Box>
  );
}

export default ButtonLike