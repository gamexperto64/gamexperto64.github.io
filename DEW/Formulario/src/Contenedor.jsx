import React from "react"
import FrmPersona from './FrmPersona'

let personas = [];
export default function Contenedor(){
    function addPersona(persona){
        personas.push(persona);
        console.log(personas);
    }
    return(
        <FrmPersona addPersona = {addPersona}/>
    )
}