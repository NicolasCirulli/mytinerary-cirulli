import {useState} from 'react';

const useValidacion = (inicial) =>{
    
      const [formularioEstado, setFormularioEstado] = useState(inicial);  
      const resetFormulario = ()=> setFormularioEstado(inicial)
      const validarInput = (tipo,inputs)=>{
        if(tipo === "nombre") {
          if(inputs.nombre !== ''){
            let re = /[a-zA-Z ]{3,20}/
            let validacion = re.exec( inputs.nombre) 
            validacion ? setFormularioEstado({...formularioEstado, nombre: 'check'}) : setFormularioEstado({...formularioEstado, nombre: 'error'})
          }else {setFormularioEstado({...formularioEstado, nombre: ''})}
        }
        if(tipo === "apellido") {
          if(inputs.apellido !== ''){
            let re = /[a-zA-Z ]{3,20}/
            let validacion = re.exec( inputs.apellido ) 
            validacion ? setFormularioEstado({...formularioEstado, apellido: 'check'}) : setFormularioEstado({...formularioEstado, apellido: 'error'})
          }else {setFormularioEstado({...formularioEstado, apellido: ''})}
        }
        if(tipo === "email") {
          if(inputs.email !== ''){
            let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            let validacion = re.exec( inputs.email ) 
            validacion ? setFormularioEstado({...formularioEstado, email: 'check'}) : setFormularioEstado({...formularioEstado, email: 'error'})
          }else {setFormularioEstado({...formularioEstado, email: ''})}
        }
        if(tipo === "password") {
          if(inputs.password !== ''){
            let re = /^[A-Za-z]\w{8,16}$/
            let validacion = re.exec( inputs.password ) 
            validacion ? setFormularioEstado({...formularioEstado, password: 'check'}) : setFormularioEstado({...formularioEstado, password: 'error'})
          }else {setFormularioEstado({...formularioEstado, password: ''})}
        }
        if(tipo === "foto") {
          if(inputs.urlFoto !== ''){
            let re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            let validacion = re.exec( inputs.urlFoto ) 
            validacion ? setFormularioEstado({...formularioEstado, urlFoto: 'check'}) : setFormularioEstado({...formularioEstado, urlFoto: 'error'})
          }else {setFormularioEstado({...formularioEstado, urlFoto: ''})}
        }
    
      }
      return {formularioEstado, validarInput,resetFormulario}
}

export default useValidacion