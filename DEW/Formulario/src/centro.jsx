import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Centro() {
  const navegar = useNavigate();
  return (
    <>
     <h1>Centro: CIFP César Manrique</h1>
     <button onClick={(e)=> navegar('/centro')}>Centro</button>
     <button onClick={(e)=> navegar('/ciclo')}>Ciclo</button>
     <button onClick={(e)=> navegar('/curso')}>Curso</button>
    </>
  )
}

export default Centro