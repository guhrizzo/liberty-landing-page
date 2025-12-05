import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import LimpaNome from './limpa-nome';
import Quitacao from './quitacao';
import { DarkModeProvider } from './DarkModeContext';


function App() {
  

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/limpa-nome' element={<LimpaNome />} />
          <Route path='/' element={<Quitacao />} />
          <Route path='*' element={''} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
