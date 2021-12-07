import React from "react";
import {Link} from 'react-router-dom'
import FormSignUp from "./FormSignUp"
import FormSignIn from "./FormSignIn"
const ContenedorSign = ({singup})=>{
    // Recibe un booleano y dependiendo si es true o false determina el texto y btn
    let texto;
    let btn;
    let ruta;
    singup ? (texto = 'Already have an account?') : (texto = "Don't you have an account yet?")
    singup ? (btn = 'Log in here') : (btn = 'Sign up here')
    singup ?  (ruta = '/Signin') : (ruta = '/Signup')
    
    
    return (
       <div className="contenedor_inputs">
           <div className="contenedor_inputs_card">
                <div className="contenedor_inputs_card_izquierda">
                    <img src="./assets/images/viajero.png" alt="img" />
                    <div className="contenedor_inputs_card_izquierda_btn">
                        <h2 className="font-bold montserrat">Hello Adventurer!</h2>
                        <p className="font-bold poppins">{texto}</p>
                            <Link to={ruta}><button  className="font-bold texto-naranja">{btn}</button></Link>
                    </div>
                </div>
                <div className="contenedor_inputs_card_derecha">
                    {singup && <FormSignUp />}
                    {!singup && <FormSignIn/>}
                </div>
           </div>
       </div>
    )

}

export default ContenedorSign