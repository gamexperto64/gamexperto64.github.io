import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { alumnos as initialAlumnos } from '../main';

export default function Lista() {
  const [alumnos, setAlumnos] = useState(initialAlumnos);

  const handleDelete = id => {
    const updatedAlumnos = alumnos.filter(alumno => alumno.id !== id);
    setAlumnos(updatedAlumnos);
    console.log(updatedAlumnos);
  };

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.length > 0 ? (
            alumnos.map(alumno => (
              <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.grupo}</td>
                <td>
                  <Link to={`/edit/${alumno.id}`}>Editar</Link>
                  <button onClick={() => handleDelete(alumno.id)}>Borrar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay alumnos registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
