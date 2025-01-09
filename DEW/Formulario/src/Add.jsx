import React from 'react'
import './index.css';
import PropTypes from 'prop-types';

function Add({grupos, alumnos}) {
  return (
    <form id="myForm"> 
      <div>
        <label htmlFor="id">id:</label>
        <input type="text" name="id" pattern="\d+" id="id" required/>
      </div>
      <div>
        <label htmlFor="nombre">nombre:</label>
        <input type="text" name="nombre" pattern="[A-Za-z]{4,20}" id="nombre" required/>
      </div>
      <div>
        <label htmlFor="grupo">grupo:</label>
        <select name="grupo" id="grupo" required>
            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
        </select>

      </div>
        <button type="submit" onClick={ (e) => {
          let formulario = document.getElementById("myForm")
          if(!formulario.checkValidity()){
            e.preventDefault()
            if(formulario.id.validationMessage !== ''){
              alert("Error de ID: "+formulario.id.validationMessage)
            }
            if(formulario.nombre.validationMessage !== ''){
              alert("Error de Nombre:" +formulario.nombre.validationMessage)
            }  
          }
          let newAlumno = {id:formulario.id.value, nombre: formulario.nombre.value, grupo: formulario.grupo.value}
          addAlumno(newAlumno);
        }
        

        }>Añadir</button>
    </form>
  )
}

Add.propTypes = {
  alumnos: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string,
    nombre: PropTypes.string,
    grupo: PropTypes.string,
    })
  ),
  grupos: PropTypes.arrayOf(
    PropTypes.string
  )
}
export default Add