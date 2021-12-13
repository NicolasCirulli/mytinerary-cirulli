import { connect } from "react-redux";
import usuariosActions from "../redux/actions/usuarioActions";
import { useRef } from "react";
import useAlerts from "../hooks/useAlerts";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";

const FormSignIn = (props) => {
  const alertas = useAlerts();

  const email = useRef();
  const password = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const loguearUsuario = await props.iniciarSesion({
      email: email.current.value,
      contraseña: password.current.value,
      google: false,
    });
    console.log(loguearUsuario);

    if (loguearUsuario.data.error) {
      return alertas.alerta("errores", null, loguearUsuario.data.response);
    }
    alertas.alerta(
      "success",
      "Successful sign in " + loguearUsuario.data.response.email
    );
  };

  const responseGoogle = (response) => {
    console.log(response);
    let googleUser = {
      email: response.profileObj.email,
      contraseña: response.profileObj.googleId,
      google: true,
    };
    props
      .iniciarSesion(googleUser)
      .then((response) => response.data.success)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className="d-flex flex-column" onSubmit={submitForm}>
        <div className="input_form">
          <input
            type="email"
            name=""
            placeholder="Email"
            autoComplete="new-email"
            ref={email}
            auto
          />
        </div>
        <div className="input_form">
          <input
            type="password"
            name=""
            placeholder="Password"
            ref={password}
          />
        </div>
        <input
          type="submit"
          name="Sign In"
          placeholder="Sign In"
          className="btn-form"
          value="Sign In"
        />
      </form>
      <GoogleLogin
        clientId="46061314994-265078hfe23i87j6ueugsc8lmh9vs4ii.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn-form"
            disabled={renderProps.disabled}
          >
            Sign in whit google
            <FcGoogle className="mx-3" />
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

const mapDispatchToProps = {
  iniciarSesion: usuariosActions.iniciarSesion,
};
export default connect(null, mapDispatchToProps)(FormSignIn);
