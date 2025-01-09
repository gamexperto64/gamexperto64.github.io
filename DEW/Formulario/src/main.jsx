import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Contenedor from './Contenedor.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Inicio.jsx';
import Centro from './Centro.jsx';
import Ciclo from './Ciclo.jsx';
import Curso from './Curso.jsx';
import Layoutlet from './Layoutlet.jsx';
import Daw2 from './Daw2.jsx';
import Grupo from './Grupo.jsx';
import Add from './Add.jsx';
import Lista from './listaAlumnado.jsx';

export const alumnos = [
  {id: 1, grupo:"A", nombre: "Juan"},
  {id: 2, grupo:"A", nombre: "Eva"},
  {id: 3, grupo:"B", nombre: "Ana"},
  {id: 4, grupo:"B", nombre: "Julia"},
  {id: 5, grupo:"B", nombre: "Antonio"},
];    
const grupos = ["A","B"];


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Contenedor />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layoutlet />}>
        <Route index element={<Inicio />}></Route>
        <Route path="/ciclo" element={<Ciclo />}></Route>
        <Route path="/centro" element={<Centro />}></Route>
        <Route path="/curso" element={<Curso />}></Route>
        <Route path="/daw2" element={<Daw2 />}></Route>
        <Route path="/grupo/:letra" element={<Grupo />}></Route>
        <Route path="/add" element={<Add grupos={grupos} alumnos={alumnos} />}></Route>
        <Route path="/listaAlumnado" element={<Lista alumnos={alumnos}/>}></Route>
        <Route path="*" element={<Navigate to="/" replace="true" />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
