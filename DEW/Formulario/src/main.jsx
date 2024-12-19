//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './Contenedor.jsx'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Inicio from './inicio'
import Centro from './centro'
import Ciclo from './ciclo'
import Curso from './curso'
import Layoutlet from './Layoutlet'
import Daw2 from './daw2'
import Grupo from './grupo'

createRoot(document.getElementById('root')).render(
  /*
  <StrictMode>
    <App />
  </StrictMode>,
  */
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layoutlet/>}>
                <Route index element={<Inicio/>}></Route>
                <Route path="/centro" element={<Centro/>}></Route>
                <Route path="/ciclo" element={<Ciclo/>}></Route>
                <Route path="/curso" element={<Curso/>}></Route>
                <Route path="/daw2" element={<Daw2/>}></Route>
                <Route path="/grupo/:letra" element={<Grupo/>}></Route>
                <Route path='*' element={<Navigate to="/" replace="true"/>}></Route>
            </Route>    
        </Routes>
    </BrowserRouter>
)
