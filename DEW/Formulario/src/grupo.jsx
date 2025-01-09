import React from "react";
import { useParams } from "react-router-dom";
import { alumnos } from "./main";

const grupos = ['A','B']
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
        </>
    )
}

