import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Inicio() {
  const navegar = useNavigate();
  return (
    <>
     <h1>Inicio: SPA</h1>
     <button onClick={(e)=> navegar('/centro')}>Centro</button>
     <button onClick={(e)=> navegar('/ciclo')}>Ciclo</button>
     <button onClick={(e)=> navegar('/curso')}>Curso</button>
    </>
  )
}

export default Inicio