import styles from "./Page404.module.css"

const Page404 = () => {
    return <main className={styles.contenedor} >
        <h2>Error 404: Página no encontrada. </h2>
        <p>Lo sentimos, la página que estas buscando no existe.</p>
        <img src="./img/imagen_404.jpg" alt="imagen 404" />
        
    </main>
}

export default Page404