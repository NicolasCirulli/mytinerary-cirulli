import Swal from "sweetalert2";
const useAlerts = () => {
  const alerta = (tipo, mensaje) => {
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
        timer: 2000,
        timerProgressBar: true,
        confirmButtonColor: "#414141",
      });
    }
  };

  return { alerta };
};
export default useAlerts;
