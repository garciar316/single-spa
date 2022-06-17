import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import PintarPersonajes from "./components/PintarPersonajes";

export default function Root(props) {
  const [nombre, setNombre] = useState("");
  return(
    <div className="container">
            <h1>APP</h1>
            <Formulario setNombre={setNombre} />
            <button
                className="btn btn-success mt-2"
                onClick={() => setNombre("")}
            >
                Reiniciar
            </button>
            <PintarPersonajes nombre={nombre} />
        </div>
  );
}
