import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { FcCheckmark,FcCancel } from "react-icons/fc";
import usuariosActions from "../redux/actions/usuarioActions"
import {connect} from 'react-redux'
import useValidacion from '../hooks/useValidacion'
import useAlerts from '../hooks/useAlerts'

const FormSignUp = (props) => {

  const formulario = {nombre : "",apellido : "",email : "",password :"",urlFoto : "",}
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

  // inputs 
  const nombre = useRef()
  const apellido = useRef()
  const email = useRef()
  const password = useRef()
  const urlFoto = useRef()
  const pais = useRef()

  const HandleSelect = (e)=> e.target.value !== 'null' ? setPaisSeleccionado(e.target.value) : setPaisSeleccionado('null')

  const submitForm = async(e)=> {
    e.preventDefault()
    if( validacion.formularioEstado.nombre === 'check' && validacion.formularioEstado.apellido === 'check' && validacion.formularioEstado.email === 'check' && validacion.formularioEstado.password === 'check' && validacion.formularioEstado.urlFoto === 'check' && paisSeleccionado !== 'null' ){

     const nuevoUsuario = await props.nuevoUsuario(nombre.current.value,apellido.current.value,email.current.value,password.current.value,urlFoto.current.value,paisSeleccionado)

      nombre.current.value = ""
      apellido.current.value = ""
      email.current.value= ""
      password.current.value= ""
      urlFoto.current.value= ""
      pais.current.value = "null"

      validacion.resetFormulario()
      setPaisSeleccionado('null')

      !nuevoUsuario.data.success ? alertas.alerta('error', nuevoUsuario.data.error ) : alertas.alerta('success', 'Successful sign up')
    }
    else{ alertas.alerta('error', 'Check the form fields and try again' ) }
  }

  return (
    <>
    <form className="d-flex flex-column" onSubmit={submitForm}>
      <div className="input_form">
        <input type="text" name="firstName" placeholder="First name" ref={nombre} onChange={() => validacion.validarInput('nombre',{nombre:nombre.current.value})}/>
        {validacion.formularioEstado.nombre === 'check'&& <FcCheckmark className="input_form_icono" />}
        {validacion.formularioEstado.nombre === 'error'&&<FcCancel className="input_form_icono"  />}
      </div>
      <div className="input_form">
      <input type="text" name="lastName" placeholder="Last name" ref={apellido} onChange={() => validacion.validarInput('apellido',{apellido: apellido.current.value})}/>
        {validacion.formularioEstado.apellido === 'check'&& <FcCheckmark className="input_form_icono" />}
        {validacion.formularioEstado.apellido === 'error'&&<FcCancel className="input_form_icono"  />}
      </div>
      <div className="input_form">
        <input type="email" name="email" placeholder="Email" ref={email} autoComplete="new-email" onChange={() => validacion.validarInput('email',{email: email.current.value})}/>
        {validacion.formularioEstado.email === 'check'&& <FcCheckmark className="input_form_icono" />}
        {validacion.formularioEstado.email === 'error'&&<FcCancel className="input_form_icono"  />}
      </div>
      <div className="input_form">
        <input type="password" name="password" placeholder="Password" ref={password} onChange={() => validacion.validarInput('password',{password:password.current.value})}/>
        {validacion.formularioEstado.password === 'check'&& <FcCheckmark className="input_form_icono" />}
        {validacion.formularioEstado.password === 'error'&&<FcCancel className="input_form_icono"  />}
      </div>
      <div className="input_form">
        <input type="text" name="urlFoto" placeholder="Url profile picture" ref={urlFoto} onChange={() => validacion.validarInput('foto',{urlFoto:urlFoto.current.value})}/>
        {validacion.formularioEstado.urlFoto === 'check'&& <FcCheckmark className="input_form_icono" />}
        {validacion.formularioEstado.urlFoto === 'error'&&<FcCancel className="input_form_icono"  />}
      </div>
      {paises.length > 0 
      ? (
          <div className="input_form">
            <select placeholder="Choose your country" onChange={HandleSelect} ref={pais} required>
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
