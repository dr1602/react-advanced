import React, { useState } from 'react'
import './App.css'
import { UserProvider } from './providers/UserProviders'
import { options } from './providers/componentProvider'
import { ProductProvider } from './providers/ProductsProviders'
import { Header } from './components/Header'

function App() {
  const [show, setShow] = useState<string>('')

  return (
    <>
      <div className='App__menu'>

      {
        options.map((item, index) => (
          <button
            key={index}
            onClick={() => (
              setShow(item.title)
            )}
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
              options.map((item, index) =>(
                show === item.title && <React.Fragment key={index}> {item.component} </React.Fragment> 
              ))
              
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