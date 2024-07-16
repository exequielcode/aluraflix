import styles from "./ModalEditar.module.css"
import Formulario from "../Formulario/Formulario";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext"
import { FormularioContext } from "../../Context/FormularioContext"

const Modal = () => {
  const { abrirModal, setAbrirModal } = useContext(GlobalContext);
  const { alLimpiar, manejarEdicion } = useContext(FormularioContext);

  const manejarModal = () =>{
    alLimpiar()
    setAbrirModal(false)
  }

  return (
    <>
    <div className={styles.overlay} ></div>
      <dialog className={styles.contenedor_modal} open={abrirModal}>
        
        <Formulario titulo="EDITAR CARD" alLimpiar={alLimpiar} manejarEnvio={manejarEdicion} />

        <form className={styles.contenedor_boton} method="dialog">
          <button>
            <img
              onClick={() => manejarModal(false)}
              src="/img/cancel.png"
              alt="cancelar"
            />
          </button>
        </form>
       
      </dialog>
       
    </>
  );
};

export default Modal;