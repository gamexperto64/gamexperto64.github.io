import React from "react";
import {Link} from 'react-router-dom'


export default function inicio(){
    return(
        <>
            <div><h1>Inicio</h1></div>
            <ul>
                <li><Link to="/centro" >Centro</Link></li>
                <li><Link to="/ciclo" >Ciclo</Link></li>
                <li><Link to="/curso" >Curso</Link></li>
            </ul>
        </>
    )
}