import { useEffect, useState } from "react";
import axios from "axios";
const FormSignUp = () => {
  const [paises, setPaises] = useState([]);

  // Trae los paises de la api cuando monta el componente
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((respuesta) => setPaises(respuesta.data));
  }, []);
  return (
    <>
      <input type="text" name="" placeholder="First name" />
      <input type="text" name="" placeholder="Last name" />
      <input type="email" name="" placeholder="Email" />
      <input type="text" name="" placeholder="Password" />
      <input type="text" name="" placeholder="Url profile picture" />
      {paises.length > 0 ? (
        <select placeholder="Choose your country" required>
          <option value="null">Choose your country</option>
          {paises.map((pais) => (
            <option value={pais.name}>{pais.name}</option>
          ))}
          )
        </select>
      ):(<select ><option value="null">Loading...</option></select>)}
      <button>Create account</button>
      <button>Sign in with google</button>
    </>
  );
};

export default FormSignUp;
