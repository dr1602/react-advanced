
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
import { Counter } from './components/CardUseRef/FiveUseRef'
import { Stopwatch } from './components/CardUseRef/SixUseRef'
import { Form } from './components/CardUseRef/SevenUseRef'
import { CatFriends } from './components/CardUseRef/EightUseRef'
import { VideoPlayer } from './components/CardUseRef/NineUseRef'
import { FormTwo } from './components/CardUseRef/TenUseRef'

function App() {

  const { 
    show, 
    toggleIsContext, 
    toggleRef, 
    toggleRefTwo, 
    toggleRefThree,
    toggleRefFour,
    toggleRefFive,
    toggleRefSix,
    toggleRefSeven,
    toggleRefEigth,
    toggleRefNine,
    toggleRefTen,
  } = useShow()

  const options = [
    {
      func: toggleIsContext,
      title: 'useContext',
    },
    {
      func: toggleRef,
      title: 'useRef',
    },
    {
      func: toggleRefTwo,
      title: 'useRefTwo',
    },
    {
      func: toggleRefThree,
      title: 'useRefThree',
    },
    {
      func: toggleRefFour,
      title: 'useRefFour',
    },
    {
      func: toggleRefFive,
      title: 'useRefFive',
    },
    {
      func: toggleRefSix,
      title: 'useRefSix',
    },
    {
      func: toggleRefSeven,
      title: 'useRefSeven',
    },
    {
      func: toggleRefEigth,
      title: 'useRefEigth',
    },
    {
      func: toggleRefNine,
      title: 'useRefNine',
    },
    {
      func: toggleRefTen,
      title: 'useRefTen',
    },
  ]

  return (
    <>
      <div className='App__menu'>

      {
        options.map((item, index) => (
          <button
            key={index}
            onClick={item.func}
          >
            {item.title}
          </button>
        ))
      }

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
            {
              !!show.isRefFive && <Counter/>
            }
            {
              !!show.isRefSix && <Stopwatch/>
            }
            {
              !!show.isRefSeven && <Form/>
            }
            {
              !!show.isRefEight && <CatFriends/>
            }
            {
              !!show.isRefNine && <VideoPlayer/>
            }
            {
              !!show.isRefTen && <FormTwo/>
            }
            
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App
