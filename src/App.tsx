
import './App.css'
import { Header } from './components/Header'
import { Hijo } from './components/Hijo'
import { UserProvider } from './providers/UserProviders'
import { ProductProvider } from './providers/ProductsProviders'

function App() {

  return (
    <>
      <UserProvider>
        <ProductProvider>
          <Header/>
          <div className='App'>
            <Hijo />
          </div>
        </ProductProvider>
      </UserProvider>
    </>
  )
}

export default App
