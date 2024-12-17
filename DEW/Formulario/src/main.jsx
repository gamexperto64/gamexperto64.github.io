//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './Contenedor.jsx'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Curso from './curso'

createRoot(document.getElementById('root')).render(
  /*
  <StrictMode>
    <App />
  </StrictMode>,
  */
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><h1>Inicio</h1></div>}></Route>
      <Route path='/centro' element={<div><h1>CIFP César Manrique</h1></div>}></Route>
      <Route path='/ciclo' element={<div><h1>Mi ciclo es DAW</h1></div>}></Route>
      <Route path='/curso' element={<Curso></Curso>}></Route>
      <Route path='*' element={<Navigate to="/" replace="true"/>}></Route>
    </Routes>
  </BrowserRouter>
)
