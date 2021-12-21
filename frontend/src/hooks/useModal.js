import React,{useState,useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { StyledEngineProvider } from '@mui/material/styles';
import { FiDelete, FiEdit } from "react-icons/fi";
import {useSelector, useDispatch} from 'react-redux'
import comentariosActions from "../redux/actions/comentariosActions";
const useModal = (props) => {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    const datos = props
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 320,
        bgcolor: 'background.paper',
        border: '1px solid #9d9d9d',
        boxShadow: 10,
        p: 2,
      };
    const token = localStorage.getItem('token')

    const [identificador, setIdentificador] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modificado = useRef()

    const dispatch = useDispatch()
   

    const borrarComentario = (id) =>{
        dispatch(comentariosActions.borrarComentario(token,datos._id,id))
        datos.comentarios.forEach(e => {
          const indice = datos.comentarios.indexOf(e=> e._id === id)
          e._id === id && (datos.comentarios.splice(indice,1))
        })
        handleClose()
      }

      const modificarComentario = (e) =>{
        e.preventDefault()
        dispatch(comentariosActions.modificarComentario(token,datos._id,identificador,value))
        datos.comentarios.forEach(e => {
          e._id === identificador && (e.comentario = value)
        })
        handleClose()
      }

      const crearModalModificar = (comentarioId) =>{

          return(
              <>
                      <div>
                        <Button onClick={handleOpen} className="btn-comentario text-primary"><FiEdit/></Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <form className="modal-actualizar">
                                <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '17ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    onChange={handleChange}
                                  >
                                    <div>
                                      <TextField
                                        id="standard-multiline-static"
                                        label="Update message"
                                        multiline
                                        rows={4}
                                        defaultValue=" "
                                        variant="standard"
                                        ref={modificado}
                                        onChange={()=>setIdentificador(comentarioId)}
                                      />
                                    </div>
                              </Box>
                                <button className="bg-success" onClick={modificarComentario}> Edit</button>
                                <button className="bg-danger" onClick={handleClose}>Cancel</button>
                              </form>
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </>
        )
    }

    const crearModalBorrar = (id) =>{

        return(
            <>
                    <div>
                      <Button onClick={handleOpen} className="btn-comentario text-danger"><FiDelete/></Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className="modal_borrar">

                            <p className="font-bold"> Are you sure you want to delete this comment?
</p>
                            <button className="bg-success"onClick={()=> borrarComentario(id)}>Yes</button>
                            <button className="bg-danger"onClick={handleClose}>No</button>

                            </div>
                          </Typography>
                          
                        </Box>
                      </Modal>
                    </div>
                  </>
      )
  }


    return {crearModalModificar,crearModalBorrar}
}

export default useModal