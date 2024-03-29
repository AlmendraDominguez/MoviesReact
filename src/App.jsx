import {LandingPage} from "./pages/LandingPage";
import { PeliculaDetalle } from "./pages/PeliculaDetalle";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header >
        <h1 className="title" >Películas</h1>
      </header>

      <Routes>
        <Route path="/MoviesReact" element={<LandingPage/>} />
        <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;