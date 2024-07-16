import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header/Header"
import Inicio  from  "./pages/Inicio/index"
import NuevoVideo from "./pages/NuevoVideo/index"
import Footer from "./componentes/Footer"
import GlobalContextProvider from "./Context/GlobalContext"
import FormularioContextProvider from "./Context/FormularioContext"
import Page404 from "./pages/Page404/index"

function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <FormularioContextProvider>
            <Header />
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nuevo-video" element={<NuevoVideo />} />
                <Route path="/not-fount" element={<Page404 />} />
                <Route path="*" element={<Navigate to="not-fount" />} />
              </Routes>
            <Footer />
          </FormularioContextProvider>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App;
