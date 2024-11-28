// import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// para evitar que el useeffect se ejecute dos veces:
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)


// Version original, donde useEffect se ejecuta dos veces

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/