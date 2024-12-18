import './App.css'
import { About, Contact, Footer, Header, Home, Portfolio, ScrollUp, Skills } from './components'



function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
