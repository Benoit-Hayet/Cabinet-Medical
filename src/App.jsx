import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/assets/pages/Home';
import Temoignages from './assets/pages/Temoignages';
import Equipe from './assets/pages/Equipe';
import Cabinet from './assets/pages/Cabinet';

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/home" element={<Home/>} />
      <Route path = "*" element={<Home/>} />
      <Route path = "/temoignages" element={<Temoignages/>} />
      <Route path = "/équipe" element={<Equipe/>} />
      <Route path = "/cabinet" element={<Cabinet/>} />
    </Routes>
    </BrowserRouter>
          </div>
     
      )
    }
  
export default App;