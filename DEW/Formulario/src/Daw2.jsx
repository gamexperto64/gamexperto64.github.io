import React from "react";
import { Link } from "react-router-dom";

const grupos = ["A","B"]; 
export default function Daw2(){
    return(
        <>
            <h3>Grupos del curso 2º DAW</h3>
            <ul>
                {grupos.map(grupo => 
                    <li key={grupo}>
                        <Link to={`/grupo/${grupo}`}>2º DAW grupo{grupo}</Link>
                    </li>)}
            </ul>
        </>
    )
}
