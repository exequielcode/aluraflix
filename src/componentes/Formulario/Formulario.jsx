import { useContext } from "react";
import styles from "./Formulario.module.css"
import CampoTexto from "../CampoTexto/index"
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea/index"
import { FormularioContext } from "../../Context/FormularioContext"

const Formulario = (props) => {
  

    const {
      titulo,
      actualizarTitulo,
      imagen,
      actualizarImagen,
      video,
      actualizarVideo,
      descripcion,
      actualizarDescripcion,
      categoria,
      actualizarCategoria,
    } = useContext(FormularioContext);
  
  
    return (
      <>
        <section className={styles.contenedor_formulario}>
          <h3>{props.titulo}</h3>
          <form onSubmit={props.manejarEnvio} onReset={props.alLimpiar}>
            <CampoTexto
              titulo="Titulo"
              placeholder="Ingrese el titulo..."
              name="titulo"
              type="text"
              required
              valor={titulo}
              actualizarValor={actualizarTitulo}
            />
            <CampoTexto
              titulo="Imagén"
              placeholder="Ingrese el enlace de la imagén..."
              name="imagen"
              type="url"
              required
              valor={imagen}
              actualizarValor={actualizarImagen}
            />
            <CampoTexto
              titulo="Vídeo"
              placeholder="Ingrese el enlace del vídeo..."
              name="video"
              type="url"
              required
              valor={video}
              actualizarValor={actualizarVideo}
            />
            <ListaCategorias
              valor={categoria}
              actualizarCategoria={actualizarCategoria}
            />
            <TextArea
              titulo="Descripción"
              placeholder="Ingrese la descripción del vídeo..."
              name="descripcion"
              type="text"
              required
              valor={descripcion}
              actualizarValor={actualizarDescripcion}
            />
  
            <CampoTexto type="submit" valor="GUARDAR" />
            <CampoTexto type="reset" valor="LIMPIAR" />
          </form>
        </section>
      </>
    );
  };
  
  export default Formulario;