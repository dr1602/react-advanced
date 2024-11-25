
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
import { TareasRed } from './components/CardReducer/TareasReducer'
import { CounterRed } from './components/CardReducer/EdadReducer'
import { ItiReducer } from './components/CardReducer/ItiReducer'
import { TodoList } from './components/CardReducer/InitReducer'
import { TodoListStateReducer } from './components/CardReducer/StateReducer'
import { Main } from './components/CardCall/Main'

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
    toggleRedOne,
    toggleRedTwo,
    toggleRedThree,
    toggleRedFour,
    toggleRedFive,
    toggleCallback,
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
    {
      func: toggleRedOne,
      title: 'useRedOne',
    },
    {
      func: toggleRedTwo,
      title: 'useRedTwo',
    },
    {
      func: toggleRedThree,
      title: 'useRedThree',
    },
    {
      func: toggleRedFour,
      title: 'useRedFour',
    },
    {
      func: toggleRedFive,
      title: 'useRedFive',
    },
    {
      func: toggleCallback,
      title: 'useCall',
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
            className='App__menu--button'
          >
            {item.title}
          </button>
        ))
      }

      </div>
      <UserProvider>
        <ProductProvider>
          <Header/>
          <div className='App__container'>

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
            {
              !!show.isReducer && <TareasRed/>
            }
            {
              !!show.isRedTwo && <CounterRed/>
            }
            {
              !!show.isRedThree && <ItiReducer/>
            }
            {
              !!show.isRedFour && <TodoList username='Dave'/>
            }
            {
              !!show.isRedFive && <TodoListStateReducer username='Taylor'/>
            }
            {
              !!show.isCallback && <Main/>
            }
            
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App


/*

useReducer es muy similar a useState, pero te permite mover 
la lógica de actualización de estado de los controladores de eventos a una única función fuera de tu componente. 
Más información sobre elegir entre useState y useReducer.

Ejercicios de practica para los reducers:

https://es.react.dev/learn/extracting-state-logic-into-a-reducer#writing-reducers-well

*/