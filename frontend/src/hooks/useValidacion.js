import {useState} from 'react';

const useValidacion = (inicial) =>{
    
      const [formularioEstado, setFormularioEstado] = useState(inicial);  
      const resetFormulario = ()=> setFormularioEstado(inicial)
      const validarInput = (tipo,inputs)=>{
        if(tipo === "nombre") {
          if(inputs.nombre !== ''){
            let re = /^[A-Za-z]{3,12}$/
            let validacion = re.test( inputs.nombre)
            console.log(validacion); 
            validacion ? setFormularioEstado({...formularioEstado, nombre: 'check'}) : setFormularioEstado({...formularioEstado, nombre: 'error'})
          }else {setFormularioEstado({...formularioEstado, nombre: ''})}
        }
        if(tipo === "apellido") {
          if(inputs.apellido !== ''){
            let re = /^[A-Za-z]{3,16}$/
            let validacion = re.exec( inputs.apellido ) 
            validacion ? setFormularioEstado({...formularioEstado, apellido: 'check'}) : setFormularioEstado({...formularioEstado, apellido: 'error'})
          }else {setFormularioEstado({...formularioEstado, apellido: ''})}
        }
        if(tipo === "email") {
          if(inputs.email !== ''){
            let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
            let validacion = re.exec( inputs.email ) 
            validacion ? setFormularioEstado({...formularioEstado, email: 'check'}) : setFormularioEstado({...formularioEstado, email: 'error'})
          }else {setFormularioEstado({...formularioEstado, email: ''})}
        }
        if(tipo === "password") {
          if(inputs.password !== ''){
            let re = /^[a-zA-Z0-9]{8,16}$/
            let validacion = re.exec( inputs.password ) 
            validacion ? setFormularioEstado({...formularioEstado, password: 'check'}) : setFormularioEstado({...formularioEstado, password: 'error'})
          }else {setFormularioEstado({...formularioEstado, password: ''})}
        }
        if(tipo === "foto") {
          if(inputs.urlFoto !== ''){
            let re = /^(ftp|http|https):\/\/[^ "]+$/;
            let validacion = re.exec( inputs.urlFoto ) 
            validacion ? setFormularioEstado({...formularioEstado, urlFoto: 'check'}) : setFormularioEstado({...formularioEstado, urlFoto: 'error'})
          }else {setFormularioEstado({...formularioEstado, urlFoto: ''})}
        }
    
      }
      return {formularioEstado, validarInput,resetFormulario}
}

export default useValidacion