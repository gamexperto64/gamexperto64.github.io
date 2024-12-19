import React from "react";
import {Link, useNavigate} from 'react-router-dom';


export default function Curso(){
    const navegar = useNavigate();

    return(
        <>
            <div><h1>Mi curso es 2º DAW A</h1></div>
            <button onClick={(e)=>navegar('/')}>Ir a Inicio</button>
            <button onClick={(e)=>navegar('/centro')}>Ir a Centro</button>
            <button onClick={(e)=>navegar('/ciclo')}>Ir a Ciclo</button>
        </>
    )
}