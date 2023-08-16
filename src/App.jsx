import About from './About'
import { Footer } from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Navbar />
      <Home />
      <section className="menu">
        <Products />
      </section>
      <About />
      <Footer />
    </div>
  )
}

export default App
