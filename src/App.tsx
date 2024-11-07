
import './App.css'
import { Hijo } from './components/Hijo'
import { UserProvider } from './providers/UserProviders'

function App() {

  return (
    <>
      <UserProvider>
        <div className='App'>
          <Hijo />
          <Hijo />
        </div>
      </UserProvider>
    </>
  )
}

export default App
