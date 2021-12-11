import {connect} from 'react-redux'
import usuariosActions from "../redux/actions/usuarioActions"
import {useState,useRef} from 'react'
import useValidacion from '../hooks/useValidacion'
import useAlerts from '../hooks/useAlerts'
import { FcCheckmark,FcCancel } from "react-icons/fc";

const FormSignIn = (props) => {
  const formulario = {Email : "",Password :""}
  const validacion = useValidacion(formulario) 

  const alertas = useAlerts()

  const email = useRef()
  const password = useRef()

  const submitForm = async(e)=> {
    e.preventDefault()

      const loguearUsuario = await props.iniciarSesion(email.current.value,password.current.value)
      console.log(loguearUsuario);

      email.current.value= ""
      password.current.value= ""

      if(loguearUsuario.data.error){
        return alertas.alerta('errores',null,loguearUsuario.data.response)
      }
      alertas.alerta('success','Successful sign in ' + loguearUsuario.data.response.email)
  }


    return (
      <>
        <form className="d-flex flex-column" onSubmit={submitForm}>
          <div className="input_form">
            <input type="email" name="" placeholder="Email" autoComplete="new-email" ref={email} auto />
            
            
          </div>
          <div className="input_form">
            <input type="password" name="" placeholder="Password" ref={password}/>
           
          </div>
            <input type="submit" name="Sign In" placeholder="Sign In" className="btn-form" value="Sign In" />
            <button className="btn-form">Log in with google</button>
        </form>
      </>
    );
  };
  

const mapDispatchToProps = {
  iniciarSesion : usuariosActions.iniciarSesion
};
export default connect(null, mapDispatchToProps)(FormSignIn);