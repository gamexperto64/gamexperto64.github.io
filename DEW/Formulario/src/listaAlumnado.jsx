import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function lista(alumnos){
    const navegar = useNavigate();
    return(
        <div>
        <h1>2º DAW</h1>
        <ul>
            {alumnos.map(alumno => (
                <li key={alumno}>{alumno}</li>
            ))}
        </ul>
        <button onClick={(e) => navegar('/add')}>Añadir registro</button>
    </div>
    )
}
