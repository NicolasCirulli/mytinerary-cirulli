import {useState,useEffect} from 'react';

const useValidacion = (inicial) =>{
    
    
      // recibe desde la props un objeto con los campos del formulario

      const [formularioEstado, setFormularioEstado] = useState(inicial);
      const [errores, setErrores] = useState([])

      // Cuando se modifica el estado de formularioEstado llama al metodo detectarErrores para actualizar tambien ese estado
      useEffect(() =>{
        detectarErrores()
      },[formularioEstado])

      // metodo para reiniciar el estado formulario a su valor inicial
      const resetFormulario = ()=> setFormularioEstado(inicial)

      // Mediante este metodo le pasamos los errores encontrados al segundo state que va a ser de tipo array y contener todos los errores encontrados
      const detectarErrores = () => setErrores(Object.values(formularioEstado))
      
      // Funcion que modifica un input(llega por argumento), mediante una exprecion regular que tambien le llega como argumento, tambien debe llegarle el value del input
      const validar = (input,exprecion,values) =>{
        let validacion = exprecion.test( values)
        validacion 
          ?setFormularioEstado({...formularioEstado, [input]: 'check'})
          :setFormularioEstado({...formularioEstado, [input]:`Invalid ${input}`})
      }
      // Metodo que se encarga de llamar a la funcion validar, recibe de que tipo es el input (en formato string) y el value del input en cuestion
      const validarInput = (tipo,inputs)=>{
        let reNombre = /^[A-Za-z]{3,12}$/
        let reApellido = /^[A-Za-z]{3,16}$/
        let reEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
        let rePassword = /^[a-zA-Z0-9]{8,16}$/
        let reUrl = /^(ftp|http|https):\/\/[^ "]+$/
        if(inputs.length > 0){
            if(tipo === "Name")return validar(tipo,reNombre,inputs)
            if(tipo === "LastName")return validar(tipo,reApellido,inputs)
            if(tipo === "Email")return validar(tipo,reEmail,inputs)
            if(tipo === "Password")return validar(tipo,rePassword,inputs)
            if(tipo === "UrlPicture")return validar(tipo,reUrl,inputs)
        }
        setFormularioEstado({...formularioEstado, [tipo]:''})
        
      }
      return {formularioEstado, validarInput,resetFormulario,errores,detectarErrores}
}

export default useValidacion