import React from "react"
import FrmPersona from './FrmPersona'

let personas = [];
export default function Contenedor(){
    function addPersona(persona){
        personas.push(persona);
        console.log(personas);
    }
    return(
        //Lista de personas (TAREA PARA MAÑANA)
        //... lo ideal ... componente <ListaPersonas>
        // o programarlo directamente aquí
        <FrmPersona addPersona = {addPersona}/>
    )
}