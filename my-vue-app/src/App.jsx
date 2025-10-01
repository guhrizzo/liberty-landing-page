import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import LimpaNome from './limpa-nome';
import Quitacao from './quitacao';
import { DarkModeProvider } from './DarkModeContext';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />; 

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/limpa-nome' element={<LimpaNome />} />
          <Route path='/quitacao-fatura' element={<Quitacao />} />
          <Route path='*' element={''} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
