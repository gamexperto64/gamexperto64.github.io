import { useState } from 'react'


export default function App({addPersona}) {
    const persona ={
        nombre: "",
        edad: true,
        ciclo: "superior"
    }
    let setNombre
    [persona.nombre, setNombre] = useState(persona.nombre);

    let setEdad
    [persona.edad, setEdad] = useState(persona.edad);

    let setCiclo
    [persona.ciclo, setCiclo] = useState(persona.ciclo);
    
    return(
        <form action="" id='form' method='post' onSubmit={(e) => (e.preventDefault(), addPersona(persona), console.log(persona))}> 
            <label htmlFor="nombre">Nombre completo:</label>
            <input type="text" name="nombre" id="nombre" value={persona.nombre} onChange={e => setNombre(e.target.value)}/>
            <br />
            <br />
            <label htmlFor="edad">Es Mayor de Edad</label>
            <input type="checkbox" name="edad" id="edad" checked={persona.edad} onChange={e => setEdad(e.target.checked)}/>
            <br />
            <br />
            <input type="radio" name="ciclo" id="superior" value="superior" checked={persona.ciclo == "superior"} onChange={e => setCiclo(e.target.value)}/>
            <label htmlFor="superior">Ciclo Superior</label>
            <br />
            <br />
            <input type="radio" name="ciclo" id="medio" value="medio" checked={persona.ciclo == "medio"} onChange={e => setCiclo(e.target.value)}/>
            <label htmlFor="medio">Ciclo Medio</label>
            <br />
            <br />
            <input type="submit" value="Enviar"/>
        </form>
    )
}


