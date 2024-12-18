import React from "react";
import { useParams } from "react-router-dom";

const alumnos = [
    {grupo: 'A', nombre: "Juan"},
    {grupo: 'A', nombre: "Eva"},
    {grupo: 'B', nombre: "Ana"},
    {grupo: 'B', nombre: "Julia"},
    {grupo: 'B', nombre: "Antonio"},
]
export default function Grupo(){
    const {letra} = useParams();
    return(
        <>
            <h3>Alumnos del curso 2º DAW {letra}</h3>
            <ul>
                {alumnos.filter(alumno => alumno.grupo == letra )
                        .map(a => <li key={a.nombre}>{a.nombre}</li>
                        )
                }
            </ul>            
        </>
    )
}