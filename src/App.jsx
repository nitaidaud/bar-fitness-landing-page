import { useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Contact from './components/contact'
import Services from './components/services'
import About from './components/about'
import Customers from './components/customers'
import Trainers from './components/trainers'
import Messages from './components/messages'
import 'animate.css';

function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })
    document.querySelectorAll('.fade-in').forEach(section => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Customers />
        <Services />
        <Trainers />
        <div className='contact-section'>
          <Messages />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
