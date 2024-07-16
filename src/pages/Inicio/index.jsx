import styles from "./Inicio.module.css"
import { useContext, useEffect } from "react";
import Banner from "../../componentes/Banner/Banner";
import ContenedorCards from "../../componentes/ContenedorCards";
import SinVideos from "../../componentes/SinVideos/Index";
import { GlobalContext } from "../../Context/GlobalContext"
import ModalEditar from "../../componentes/ModalEditar/index"


const Home = () => {
  const { abrirModal, formRef, categorias, videos, setVideos } = useContext(GlobalContext);

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [setVideos])

  return (
    <>
      <main className={styles.contenedor_principal}>
        <Banner />
        <div ref={formRef}>
          {videos.length === 0 ? <SinVideos /> : 
          <>
          {categorias.map((categoria, index) => (
            <ContenedorCards datos={categoria} key={index} />
          ))} </>}
        </div>
        <div>{abrirModal && <ModalEditar />}</div>
      </main>
    </>
  );
};

export default Home;