import { useState } from "react";

export default function ListaPersonas({personas}){
    let borrarPersona;
    [personas, borrarPersona] = useState(personas)
    return (
        <table>
            <tr>
                <th>Nombre</th>
                <th>Es Mayor de edad</th>
                <th>Ciclo</th>
            </tr>
            {personas.map((persona, i) => <tr key={i}>
                <td>{`${persona.nombre}`}</td>
                <td>{`${persona.edad}`}</td>
                <td>{`${persona.ciclo}`}</td>
            </tr>)}
        </table>
    );
}