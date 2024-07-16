import styles from "./Footer.module.css"
import logo from "./logo-footer.png"

const Pie = () => {
    return (
      <>
        <footer className={styles.pie}>
          <img src={logo} alt="logo alura" />
          <p>Creado por Exequiel Sotelo - 2024</p>
        </footer>
      </>
    );
  };
  
  export default Pie;

