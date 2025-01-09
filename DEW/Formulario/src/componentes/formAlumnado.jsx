import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { grupos } from '../main';
import { alumnos } from '../main';

export default function Formulario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ id: '', nombre: '', grupo: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const alumno = alumnos.find(alumno => alumno.id === id);
      if (alumno) {
        setFormData(alumno);
      } else {
        navigate('/');
      }
    }
  }, [id, navigate]);

  const validate = () => {
    const errors = {};
    if (!formData.id) errors.id = 'El ID es obligatorio.';
    if (id && formData.id !== id) errors.id = 'El ID no se puede modificar.';
    if (alumnos.some(alumno => alumno.id === formData.id) && !id) errors.id = 'El ID debe ser único.';
    if (formData.nombre.length < 4 || formData.nombre.length > 20) errors.nombre = 'El nombre debe tener entre 4 y 20 caracteres.';
    if (!formData.grupo) errors.grupo = 'Debe seleccionar un grupo.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    if (id) {
      const index = alumnos.findIndex(alumno => alumno.id === id);
      alumnos[index] = formData;
    } else {
      alumnos.push(formData);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Editar Alumno' : 'Añadir Alumno'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={formData.id}
            onChange={e => setFormData({ ...formData, id: e.target.value })}
            disabled={!!id}
          />
          {errors.id && <p classname="error">{errors.id}</p>}
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={e => setFormData({ ...formData, nombre: e.target.value })}
          />
          {errors.nombre && <p classname="error">{errors.nombre}</p>}
        </div>
        <div>
          <label>Grupo:</label>
          <select
            value={formData.grupo}
            onChange={e => setFormData({ ...formData, grupo: e.target.value })}
          >
            <option value="">Seleccionar</option>
            {grupos.map(grupo => (
              <option key={grupo} value={grupo}>
                {grupo}
              </option>
            ))}
          </select>
          {errors.grupo && <p classname="error">{errors.grupo}</p>}
        </div>
        <button type="submit">{id ? 'Actualizar' : 'Añadir'}</button>
        <button type="button" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
}


