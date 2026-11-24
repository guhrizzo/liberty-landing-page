import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './DarkModeContext.jsx'

function AppWithPreloader() {
  useEffect(() => {
    document.getElementById('preloader')?.remove()
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <AppWithPreloader />
    </DarkModeProvider>
  </StrictMode>,
)
