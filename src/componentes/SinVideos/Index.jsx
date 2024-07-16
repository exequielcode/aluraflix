import styles from "./SinVideos.module.css"
import noVideo from "./sin_Videos.png"

const SinVideos = () =>{
    return (
        <div className={styles.sin_videos} >
            <h2>No se pudo encontrar ningún vídeo</h2>
            <img src={noVideo} alt="ningun video" />
        </div>
    )
}

export default SinVideos;