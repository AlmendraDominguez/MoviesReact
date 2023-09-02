import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

import "./Buscador.css"
import { useState } from "react";

export const Buscador = () => {
  const navigate = useNavigate() 
  const [txtBuscador,setTxtBuscador] = useState ("") 

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    navigate(`/MoviesReact?search=${txtBuscador}`) 
  }

  return (
    <form className="containerBuscador" onSubmit={handleSubmit}> 
      <div className="cajaBuscador">
        <input 
          value={txtBuscador}
          onChange={(e)=>setTxtBuscador(e.target.value)}
          type="text" 
          className="inputBuscador" 
        />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};