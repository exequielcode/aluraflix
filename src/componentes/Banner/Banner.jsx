import styles from "./Banner.module.css"
import TituloYDescripcion from "../TituloYDescripcion/index"
import TituloCategoria from "../TituloCategoria";
import VideoDestacado from "../VideoDestacado/index"
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";



const Banner = () => {
  const { videoSeleccionado, videoRef } = useContext(GlobalContext);

  const { titulo, descripcion, categoria, video_url, color } = videoSeleccionado;


  return (
    <>
      <div className={styles.contenedor} ref={videoRef}>
        <div className={styles.box_titulos}  >
          <TituloCategoria categoria={categoria} color={color} />
          <TituloYDescripcion titulo={titulo} descripcion={descripcion} />
        </div>
        <div className={styles.box_video}>
        <VideoDestacado
          
          video={video_url}
          color={color}
          
        /></div>
      </div>
    </>
  );
};

export default Banner;