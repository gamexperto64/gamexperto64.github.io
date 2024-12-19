import React from "react";
import { useParams } from "react-router-dom";

let alumnos = [
    {id: 1, grupo: 'A', nombre: "Juan"},
    {id: 2, grupo: 'A', nombre: "Eva"},
    {id: 3, grupo: 'B', nombre: "Ana"},
    {id: 4, grupo: 'B', nombre: "Julia"},
    {id: 5, grupo: 'B', nombre: "Antonio"},
]
export default function Grupo(){
    const {letra} = useParams();
    return(
        <>
            <h3>Alumnos del curso 2º DAW {letra}</h3>
            <ul>
                {alumnos.filter(alumno => 
                    alumno.grupo == letra ).map(a => 
                        <li key={a.nombre}>{a.nombre}</li>
                    )
                }
            </ul>
            <form action="" id="formAlumnos">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" />
                <br />
                <input type="submit" value="Añadir alumno"/>
            </form>
        </>
    )
}

