import { useContext } from "react";
import styles from "./NuevoVideo.module.css"
import Formulario from "../../componentes/Formulario/Formulario"
import TituloNuevoVideo from "../../componentes/TituloNuevoVideo/index"
import { FormularioContext } from "../../Context/FormularioContext";

const NuevoVideo = () => {
  const { manejarEnvio, alLimpiar } = useContext(FormularioContext);

  return (
    <>
      <main className={styles.contenedor_principal}>
        <TituloNuevoVideo />
        <Formulario
          titulo="Crear Tarjeta"
          manejarEnvio={manejarEnvio}
          alLimpiar={alLimpiar}
        />
      </main>
    </>
  );
};

export default NuevoVideo;