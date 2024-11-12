
import './App.css'
import { useState } from 'react'
import { UserProvider } from './providers/UserProviders'
import { ProductProvider } from './providers/ProductsProviders'
import { Header } from './components/Header'
import { Hijo } from './components/Hijo'
import { PulsaBotones } from './components/PulsaBotonUseRef'

function App() {
  const [isContext, setIsContext] = useState<boolean>(false)
  const [isRef, setIsRef] = useState<boolean>(false)

  const toggleIsContext = () => {
    setIsContext(!isContext)
    setIsRef(false)
  }

  const toggleRef = () => {
    setIsContext(false)
    setIsRef(!isRef)
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
      </div>
      <UserProvider>
        <ProductProvider>
          <Header/>
          <div className='App'>
            {
              !!isContext && <Hijo />
            }
            {
              !!isRef && <PulsaBotones/>
            }
            
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App
