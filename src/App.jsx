import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/assets/pages/Home';

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/Home" element={<Home/>} />
      <Route path = "*" element={<Home/>} />
    </Routes>
    </BrowserRouter>
          </div>
     
      )
    }
  
export default App;