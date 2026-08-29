import { Moon, Sun, Contrast, Menu, X, Send } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme, highContrast, toggleContrast }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Anushka
          <span className="logo-dot">.</span>dev
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button 
            className="action-btn icon-circle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className={`action-btn icon-circle-btn ${highContrast ? 'active-contrast' : ''}`} 
            onClick={toggleContrast}
            aria-label="Toggle High Contrast"
            title="Toggle High Contrast"
          >
            <Contrast size={18} />
          </button>

          <a href="#contact" className="btn btn-connect hidden-mobile">
            <span>Hire / Connect</span>
          </a>

          <button 
            className="mobile-toggle action-btn" 
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}
