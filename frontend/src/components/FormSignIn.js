import {connect} from 'react-redux'
import usuariosActions from "../redux/actions/usuarioActions"
import {useState,useRef} from 'react'
import useValidacion from '../hooks/useValidacion'
import useAlerts from '../hooks/useAlerts'
import { FcCheckmark,FcCancel } from "react-icons/fc";

const FormSignIn = (props) => {
  const formulario = {email : "",password :""}
  const validacion = useValidacion(formulario) 

  const alertas = useAlerts()

  const email = useRef()
  const password = useRef()

  const submitForm = async(e)=> {
    e.preventDefault()
    if(validacion.formularioEstado.email === 'check' && validacion.formularioEstado.password === 'check'){
      const loguearUsuario = await props.iniciarSesion(email.current.value,password.current.value)
      console.log(loguearUsuario);

      email.current.value= ""
      password.current.value= ""
      validacion.resetFormulario()

      !loguearUsuario.data.success ? alertas.alerta('error', loguearUsuario.data.error ) : alertas.alerta('success', 'Successful sign in ' + loguearUsuario.data.response.email)
    }else{alertas.alerta('error', 'Check the form fields and try again' )}
  }


    return (
      <>
        <form className="d-flex flex-column" onSubmit={submitForm}>
          <div className="input_form">
            <input type="email" name="" placeholder="Email" autoComplete="new-email" ref={email} auto onChange={() => validacion.validarInput('email',{email: email.current.value})}/>
            {validacion.formularioEstado.email === 'check'&& <FcCheckmark className="input_form_icono" />}
            {validacion.formularioEstado.email === 'error'&&<FcCancel className="input_form_icono"  />}
          </div>
          <div className="input_form">
            <input type="password" name="" placeholder="Password" ref={password} onChange={() => validacion.validarInput('password',{password:password.current.value})}/>
            {validacion.formularioEstado.password === 'check'&& <FcCheckmark className="input_form_icono" />}
            {validacion.formularioEstado.password === 'error'&&<FcCancel className="input_form_icono"  />}
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