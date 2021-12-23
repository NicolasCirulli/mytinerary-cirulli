import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MdFavorite } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useSelector, useDispatch } from 'react-redux';

const ButtonLike = ({data,itinerario})=> {
  const [count, setCount] = useState(data.length);
  const [like, setLike] = useState(false)

  const user = useSelector(state=> state.usuariosReducer._id)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const likear = async() =>{
      try{
        const respuesta = await dispatch(itinerariesActions.likearItinerario(token,itinerario._id,like))
        setCount(respuesta.data.response.likes.length)
        setLike(!respuesta.data.response.likes.includes(user))
      }catch(e){console.log(e)}
  }
  useEffect(() => {

  },[])

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
          { count > 0 
           ? <MdFavorite className="fs-3 text-danger" />
           : <MdFavorite className="fs-3 text-warning" />
          }
        </Badge>
        <ButtonGroup>
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
          
        </ButtonGroup>
      </div>
    </Box>
  );
}

export default ButtonLike