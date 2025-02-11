import styles from "./CampoTexto.module.css"

const CampoTexto = (props) => {
    const manejarCambio = (e) => {
      props.actualizarValor(e.target.value);
    };
  
    return (
      <>
        <div className={styles.campo_formulario}>
          <label htmlFor={props.name}>{props.titulo} </label>
          <input
            id={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.valor}
            required={props.required}
            onChange={manejarCambio}
          />
        </div>
      </>
    );
  };
  
  export default CampoTexto;