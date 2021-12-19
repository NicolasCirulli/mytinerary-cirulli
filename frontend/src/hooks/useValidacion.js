import {useState,useEffect} from 'react';

const useValidacion = (inicial) =>{
      // inputs : creo un modelo de inputs que recibe por parametro los valores que necesita
      const crearInput = (input,ref,tipo,placeholder,mensaje,mensajeError)=>{
        return (
            <div className="input_form">
            <input
              type={tipo}
              placeholder={placeholder}
              ref={ref}
              onChange={() =>validarInput(input, ref.current.value)}
            />
            {formularioEstado[input] === "check" && (
              <span className="text-center font-bold warning-input">
                {mensaje} <span className="color-verde">✔</span>{" "}
              </span>
            )}
            {formularioEstado[input] !== "check" &&
              formularioEstado[input] !== "" && (
                <span className="text-center font-bold warning-input">
                  {mensajeError}
                  <span className="color-rojo">❌</span>
                </span>
              )}
          </div>
        )
      }
    
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
        let reTitulo = /^[A-Za-z]$/
        let rePrecio = /^[0-5]{1}$/
        let reHashtag = /^[A-Za-z]{3,16}$/
        if(inputs.length > 0){
            if(tipo === "Name")return validar(tipo,reNombre,inputs)
            if(tipo === "LastName")return validar(tipo,reApellido,inputs)
            if(tipo === "Email")return validar(tipo,reEmail,inputs)
            if(tipo === "Password")return validar(tipo,rePassword,inputs)
            if(tipo === "UrlPicture")return validar(tipo,reUrl,inputs)
            if(tipo === "Titulo")return validar(tipo,reTitulo,inputs)
            if(tipo === "Precio")return validar(tipo,rePrecio,inputs)
            if(tipo === "Hashtag")return validar(tipo,reHashtag,inputs)
        }
        setFormularioEstado({...formularioEstado, [tipo]:''})
        
      }
      return {formularioEstado, validarInput,resetFormulario,errores,detectarErrores,crearInput}
}

export default useValidacion