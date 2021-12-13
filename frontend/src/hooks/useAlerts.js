import Swal from "sweetalert2";
import {toast} from "react-toastify";

const useAlerts = () => {
  const alerta = (tipo, mensaje, array) => {
    if (tipo === "error") {
      Swal.fire({
        icon: "error",
        html: `<p class='font-bold texto-naranja'>${mensaje}</p>`,
        background: "#414141",
        backdrop: true,
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: "#414141",
      });
    }
    if (tipo === "success") {
      Swal.fire({
        icon: "success",
        html: `<span class='font-bold texto-naranja'>${mensaje}</span>`,
        background: "#414141",
        backdrop: true,
        timer: 600,
        timerProgressBar: true,
        confirmButtonColor: "#414141",
      });
    }
    if (tipo === "errores") {
      Swal.fire({
        icon: "error",
        html: array.map(
          (e) => `<p class='font-bold texto-naranja'>${e.message}</p>`
        ),
        background: "#414141",
        backdrop: true,
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: "#414141",
      });
    }
    if (tipo === "errores-front") {
      const filtrado = array
        .filter((e) => e !== "check")
        .filter((e) => e !== "");
      filtrado.length === 0 &&
        filtrado.push("Check the form fields and try again");
      Swal.fire({
        icon: "error",
        html: filtrado.map(
          (e) => `<p class='font-bold texto-naranja'>${e}</p>`
        ),
        background: "#414141",
        backdrop: true,
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: "#414141",
      });
    }
  };

  const tostadas = (error,array) => {
    if(error === 'front')
    { const filtrado = array
        .filter((e) => e !== "check")
        .filter((e) => e !== "");
      const mapeado = filtrado.map(e => e = {'message': e})
        console.log(mapeado);
        mapeado.map(e => toast.error(e.message, {
        theme:'dark',
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      }))}

      if(error === 'back')
      {
        array.map(e => toast.error(e.message, {
        theme:'dark',
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      }))
    }

  };

  return { alerta,tostadas };
};
export default useAlerts;
