import './App.css'
import { About, Footer, Header, Home, Skills } from './components'



function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Footer />
      </main>
    </>
  )
}

export default App
