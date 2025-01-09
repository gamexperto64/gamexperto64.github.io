import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const grupos = ["A", "B"]

function Daw2() {
  const navegar = useNavigate();
  return (
    <div>
        <h1>2º DAW</h1>
        <ul>
            {grupos.map((grupo,i) => (
                <li key={`${i}+${grupo}`}><Link to={`/grupo/${grupo}`}>2º DAW Grupo {grupo}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Daw2
