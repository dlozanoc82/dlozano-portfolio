import './App.css'
import { About, Contact, Footer, Header, Home, ScrollUp, Skills } from './components'



function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
