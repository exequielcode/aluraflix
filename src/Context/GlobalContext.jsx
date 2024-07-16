import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const videoRef = useRef(null)
  const formRef = useRef(null)

  const [abrirModal, setAbrirModal] = useState(false);

  const urlApi = "https://my-json-server.typicode.com/exequielcode/aluraFlix-api/videos";

  const [videos, setVideos] = useState([]);

  const [actualizadorVideos, setActualizadorVideos] = useState(false)

  const categorias = [
    {
      titulo: "Frontend",
      color: "#6BD1FF",
    },
    {
      titulo: "Backend",
      color: "#00C86F",
    },
    {
      titulo: "Innovación y gestión",
      color: "#FFBA05",
    },
  ];


  useEffect(() => {
    const getVideos = async () => {
      try {
        const respuesta = await fetch(urlApi);
        const videos = await respuesta.json();
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, [actualizadorVideos]); 

  const [videoSeleccionado, setVideoSeleccionado] = useState({
    id: "1",
    titulo: "Challenge React",
    descripcion:
      "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    imagen_url: "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
    video_url: "https://www.youtube.com/embed/ov7vA5HFe6w?si=hIZaUuAVA38jTcqI",
    categoria: "Frontend",
    color: "#6BD1FF",
  });

  return (
    <GlobalContext.Provider
      value={{
        abrirModal,
        setAbrirModal,
        videos,
        setVideos,
        videoSeleccionado,
        setVideoSeleccionado,
        urlApi,
        actualizadorVideos,
        setActualizadorVideos,
        videoRef, 
        formRef,
        categorias
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;