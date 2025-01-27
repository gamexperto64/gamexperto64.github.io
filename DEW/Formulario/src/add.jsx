import React from 'react'
import './App.css';
import './index.css';
import { useNavigate } from 'react-router-dom';

function Add({grupos, addAlumno, validAdd}) {
  const navegar = useNavigate();
  return (
    <form id="myForm"> 
      <div>
        <label htmlFor="id">Id:</label>
        <input type="number" name="id" pattern="\d+" id="id" required/>        
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" pattern="[A-Za-z]{4,20}" id="nombre" required/>
      </div>
      <div>
        <label htmlFor="grupo">Grupo:</label>
        <select name="grupo" id="grupo" required>
            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
        </select>        
      </div>
      <button type="submit" onClick={ (e) => {
          let formulario = document.getElementById('myForm');
          e.preventDefault()
          if(formulario.checkValidity() && validAdd(formulario.id.value)) {
            addAlumno({id:formulario.id.value, grupo:formulario.grupo.value, nombre:formulario.nombre.value}); 
            navegar('/alumnos');
          } else {
            formulario.id.setCustomValidity("El id es inválido o está vacío");
            alert(formulario.id.validationMessage || formulario.nombre.validationMessage);
          }
          formulario.id.setCustomValidity("");
        }}>Añadir</button>
    </form>
  )
}

export default Add