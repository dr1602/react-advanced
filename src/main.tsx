// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// para evitar que el useeffect se ejecute dos veces:
createRoot(document.getElementById('root')!).render(
    <App />
)


// Version original, donde useEffect se ejecuta dos veces

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/