import { useState } from "react"
import FrmPersona from './FrmPersona'
import ListaPersona from './ListaPersona'

let personas = [];
export default function Contenedor(){
    const [numPersonas, setNumPersonas] = useState(0);

    function addPersona(persona){
        personas.push(persona);
        setNumPersonas(personas.length);
        localStorage.setItem("Personas", JSON.stringify(personas));
    }
    return(
        //Lista de personas (TAREA PARA MAÑANA)
        //... lo ideal ... componente <ListaPersonas>
        // o programarlo directamente aquí
        <>
            <FrmPersona addPersona = {addPersona}/>
            <ListaPersona personas={personas}/>
        </>
    )
}