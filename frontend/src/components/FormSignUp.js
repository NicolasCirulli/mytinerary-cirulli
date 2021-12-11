import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { FcCheckmark,FcCancel } from "react-icons/fc";
import usuariosActions from "../redux/actions/usuarioActions"
import {connect} from 'react-redux'
import useValidacion from '../hooks/useValidacion'
import useAlerts from '../hooks/useAlerts'

const FormSignUp = (props) => {

  const formulario = {Name : "",LastName : "",Email : "",Password :"",UrlPicture : "",Country:""}
  // Estados
  const [paises, setPaises] = useState([]);
  const validacion = useValidacion(formulario)
  const [paisSeleccionado, setPaisSeleccionado] = useState('null');

  // Trae los paises de la api cuando monta el componente
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all?fields=name")
    .then((respuesta) => setPaises(respuesta.data));
  }, []);
  
  const alertas = useAlerts()

  // ref para los inputs
  const nombre = useRef()
  const apellido = useRef()
  const email = useRef()
  const password = useRef()
  const urlFoto = useRef()
  const pais = useRef()


  const HandleSelect = (e)=> e.target.value !== 'null' 
  ? setPaisSeleccionado(e.target.value) 
  : setPaisSeleccionado('null')

  const submitForm = async(e)=> {
    e.preventDefault()
    validacion.detectarErrores()
    
    if( validacion.formularioEstado.Name === 'check' && validacion.formularioEstado.LastName === 'check' && validacion.formularioEstado.Email === 'check' && validacion.formularioEstado.Password === 'check' && validacion.formularioEstado.UrlPicture === 'check' && paisSeleccionado !== 'null' ){

     const nuevoUsuario = await props.nuevoUsuario(nombre.current.value,apellido.current.value,email.current.value,password.current.value,urlFoto.current.value,paisSeleccionado)
      console.log(nuevoUsuario);

      nombre.current.value = ""
      apellido.current.value = ""
      email.current.value= ""
      password.current.value= ""
      urlFoto.current.value= ""
      pais.current.value = "null"

      validacion.resetFormulario()
      setPaisSeleccionado('null')

      if(!nuevoUsuario.data.success){
        return alertas.alerta('errores',null,nuevoUsuario.data.response)
      }
      alertas.alerta('success','Successful sign up ' + nuevoUsuario.data.response.email)
    }else alertas.alerta('errores-front', null, validacion.errores )
    // 'Check the form fields and try again'
  }

  return (
    <>
    <form className="d-flex flex-column" onSubmit={submitForm}>
      <div className="input_form">
        <input type="text" name="firstName" placeholder="First name - letters - min 3 max 12 " ref={nombre} onChange={() => validacion.validarInput('Name',nombre.current.value)}/>
        {validacion.formularioEstado.Name === 'check'&& <FcCheckmark className="input_form_icono" />}
      </div>
      <div className="input_form">
      <input type="text" name="lastName" placeholder="Last name - letters - min 3 max 16" ref={apellido} onChange={() => validacion.validarInput('LastName',apellido.current.value)}/>
        {validacion.formularioEstado.LastName === 'check'&& <FcCheckmark className="input_form_icono" />}
      </div>
      <div className="input_form">
        <input type="email" name="email" placeholder="Email" ref={email} autoComplete="new-email" onChange={() => validacion.validarInput('Email',email.current.value)}/>
        {validacion.formularioEstado.Email === 'check'&& <FcCheckmark className="input_form_icono" />}
      </div>
      <div className="input_form">
        <input type="password" name="password" placeholder="Password - letters & numbers - min 8 max 16" ref={password} onChange={() => validacion.validarInput('Password',password.current.value)}/>
        {validacion.formularioEstado.Password === 'check'&& <FcCheckmark className="input_form_icono" />}
      </div>
      <div className="input_form">
        <input type="text" name="urlFoto" placeholder="Url profile picture" ref={urlFoto} onChange={() => validacion.validarInput('UrlPicture',urlFoto.current.value)}/>
        {validacion.formularioEstado.UrlPicture === 'check'&& <FcCheckmark className="input_form_icono" />}
      </div>
      {paises.length > 0 
      ? (
          <div className="input_form">
            <select placeholder="Choose your country" onChange={HandleSelect} ref={pais} defaultValue="-" required>
            <option value="null">Choose your country</option>
            {paises.map((pais) => (
              <option key={pais.name} value={pais.name}>{pais.name}</option>
              ))}
          </select>
          {paisSeleccionado !== 'null' && <FcCheckmark className="input_form_icono" />}
        </div>
        )
      :(<select ><option value="null">Loading...</option></select>)}
      <input type="submit" name="CreateAccount" placeholder="Create account" className="btn-form" value="Create account" />
      <button className="btn-form">Sign in with google</button>
      </form>
    </>
  );
};


const mapDispatchToProps = {
  nuevoUsuario : usuariosActions.nuevoUsuario
};
export default connect(null, mapDispatchToProps)(FormSignUp);
