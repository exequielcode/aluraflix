import { useContext } from "react";
import styles from "./ListaCategorias.module.css"
import { GlobalContext } from "../../Context/GlobalContext";


const ListaCategorias = (props) => {
  const {categorias} = useContext(GlobalContext)

  const manejarCambio = (e) => {
    props.actualizarCategoria(e.target.value);
  };

  return (
    <>
      <div className={styles.contenedor_categorias}>
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>
            Seleccione una categoría
          </option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.titulo}>
              {categoria.titulo}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ListaCategorias;