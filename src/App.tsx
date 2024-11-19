
import './App.css'
import { useState } from 'react'
import { UserProvider } from './providers/UserProviders'
import { ProductProvider } from './providers/ProductsProviders'
import { Header } from './components/Header'
import { Hijo } from './components/Hijo'
import { PulsaBotones } from './components/PulsaBotonUseRef'
import { Contador } from './components/ContadorUseRef'

function App() {
  const [show, setShow] = useState({
    isContext: false,
    isRef: false,
    isRefTwo: false,
  })

  const toggleIsContext = () => {
    setShow({
      isContext: true,
      isRef: false,
      isRefTwo: false,
    })
  }

  const toggleRef = () => {
    setShow({
      isContext: false,
      isRef: true,
      isRefTwo: false,
    })
  }

  const toggleRefTwo = () => {
    setShow({
      isContext: false,
      isRef: false,
      isRefTwo: true,
    })
  }

  return (
    <>
      <div className='App__menu'>
        <button
          onClick={toggleIsContext}
        >
          useContext
        </button>
        <button
          onClick={toggleRef}
        >
          useRef
        </button>
        <button
          onClick={toggleRefTwo}
        >
          useRefTwo
        </button>
      </div>
      <UserProvider>
        <ProductProvider>
          <Header/>
          <div className='App'>

            {
              !!show.isContext && <Hijo />
            }
            {
              !!show.isRef && <PulsaBotones/>
            }
            {
              !!show.isRefTwo && <Contador/>
            }
            
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App
