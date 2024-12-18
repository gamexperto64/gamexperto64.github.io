import React from "react";
import {Link, useNavigate} from 'react-router-dom'


export default function Ciclo(){
    const navegar = useNavigate();
    
    return(
        <>
            <div><h1>Mi ciclo es DAW</h1></div>
            <button onClick={(e)=>navegar('/')}>Ir a Inicio</button>
            <button onClick={(e)=>navegar('/centro')}>Ir a Centro</button>
            <button onClick={(e)=>navegar('/curso')}>Ir a Curso</button>
        </>
    )
}