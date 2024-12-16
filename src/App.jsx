import './App.css'
import { About, Contact, Footer, Header, Home, Skills } from './components'



function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
