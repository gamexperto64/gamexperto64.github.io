import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Layoutlet(){
    return(
        <main>
            <nav>
                <Link to="/inicio">Inicio</Link> |
                <Link to="/centro"> Centro</Link> |
                <Link to="/daw2"> 2º DAW</Link> |
                <Link to="/listaAlumnado"> Alumnos</Link> |
                <Link to="/formAlumnado"> Añadir alumno</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </main>
    )
}