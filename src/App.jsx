import {LandingPage} from "./pages/LandingPage";
import { PeliculaDetalle } from "./pages/PeliculaDetalle";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import "./App.css";

function App() {
  return (
<BrowserRouter>
      <header >
      <h1 className="title" >PELICULAS</h1>
      </header>
      <main>
        <LandingPage/>
      </main>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
    </Routes>
     
</BrowserRouter>
  );
}

export default App;