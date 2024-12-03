import './App.css'
import React, { useEffect, useState } from 'react'

import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { UserProvider } from './providers/UserProviders'
import { options } from './providers/componentProvider'
import { ProductProvider } from './providers/ProductsProviders'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Email } from './components/Email'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'

function App() {
  const [show, setShow] = useState<string>('')
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response => response.json()))
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error))
  },[])

  const client = new QueryClient()

  return (
    // el proveedor del cliente para React QUery
    <QueryClientProvider client={client}>
      <>
        <div className='App__title'>
          <h1> Learn React </h1>
        </div>
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
            <Email/>
            <Footer/>
          </ProductProvider>
        </UserProvider>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
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