import React from "react";
import {Link, useNavigate} from 'react-router-dom'


export default function Centro(){
    const navegar = useNavigate();

    return(
        <>
            <div><h1>Mi centro es CIFP César Manrique</h1></div>
            <button onClick={(e)=>navegar('/')}>Ir a Inicio</button>
            <button onClick={(e)=>navegar('/ciclo')}>Ir a Ciclo</button>
            <button onClick={(e)=>navegar('/curso')}>Ir a Curso</button>
        </>
    )
}