import React from "react";
import { useParams } from "react-router-dom";

const alumnos = [
    {id: 1, grupo: 'A', nombre: "Juan"},
    {id: 2, grupo: 'A', nombre: "Eva"},
    {id: 3, grupo: 'B', nombre: "Ana"},
    {id: 4, grupo: 'B', nombre: "Julia"},
    {id: 5, grupo: 'B', nombre: "Antonio"},
]
const grupos = ['A','B']
export default function Grupo(){
    const {letra} = useParams();
    return(
        <>
            <h3>Alumnos del curso 2º DAW {letra}</h3>
            <ul>
                {alumnos.filter(alumno => 
                    alumno.grupo == letra ).map(a => 
                        <li key={a.nombre}>{a.nombre}</li>
                    )
                }
            </ul>
            <div>
                <form action="" id="addAlumnos">
                    <h3>Añadir Alumno</h3>
                    <div>
                        <label htmlFor="id">ID: </label>
                        <input type="text" name="id" id="id" required/>
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" required/>
                    </div>
                    <div>
                        <label htmlFor="grupo">Grupo: </label>
                        <select name="grupo" id="grupo" required>
                            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
                        </select>
                    </div>
                    <input type="submit" value="Añadir alumno"/>
                </form>
            </div>
            <div>
                <form action="" id="deleteAlumnos">
                    <h3>Borrar Alumno</h3>
                    <div>
                        <label htmlFor="id">ID: </label>
                        <input type="text" name="id" id="id" required/>
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" required/>
                    </div>
                    <div>
                        <label htmlFor="grupo">Grupo: </label>
                        <select name="grupo" id="grupo" required>
                            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
                        </select>
                    </div>
                    <input type="submit" value="Borrar alumno"/>
                </form>
            </div>
            <div>
                <form action="" id="editAlumnos">
                    <h3>Editar datos del Alumno</h3>
                    <div>
                        <label htmlFor="id">ID: </label>
                        <input type="text" name="id" id="id" required/>
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" required/>
                    </div>
                    <div>
                        <label htmlFor="grupo">Grupo: </label>
                        <select name="grupo" id="grupo" required>
                            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
                        </select>
                    </div>
                    <input type="submit" value="Actualizar alumno"/>
                </form>
            </div>
            
        </>
    )
}

