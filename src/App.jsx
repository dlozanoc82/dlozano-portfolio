import './App.css'
import { About, Header, Home } from './components'



function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
