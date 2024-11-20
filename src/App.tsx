
import './App.css'
import { useShow } from './hooks/useShow'
import { UserProvider } from './providers/UserProviders'
import { ProductProvider } from './providers/ProductsProviders'
import { Header } from './components/Header'
import { Hijo } from './components/Hijo'
import { PulsaBotones } from './components/CardUseRef/PulsaBotonUseRef'
import { Contador } from './components/CardUseRef/ContadorUseRef'
import { AutoFocus } from './components/CardUseRef/AutoFocusUseRef'
import { MenPrev } from './components/CardUseRef/MensajePrevioUseRef'

function App() {

  const { 
    show, 
    toggleIsContext, 
    toggleRef, 
    toggleRefTwo, 
    toggleRefThree,
    toggleRefFour,
  } = useShow()

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
        <button
          onClick={toggleRefThree}
        >
          useRefThree
        </button>
        <button
          onClick={toggleRefFour}
        >
          useRefFour
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
            {
              !!show.isRefThree && <AutoFocus/>
            }
                        {
              !!show.isRefFour && <MenPrev/>
            }
            
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App
