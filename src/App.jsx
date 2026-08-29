import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import BackgroundVisualizer from './components/BackgroundVisualizer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (highContrast) {
      document.documentElement.setAttribute('data-contrast', 'high')
    } else {
      document.documentElement.removeAttribute('data-contrast')
    }
  }, [highContrast])



  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const toggleContrast = () => {
    setHighContrast(prev => !prev)
  }

  return (
    <>
      <BackgroundVisualizer theme={theme} highContrast={highContrast} />
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        highContrast={highContrast} 
        toggleContrast={toggleContrast} 
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
