import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const scrollPercentage = (window.scrollY / scrollHeight) * 100
        // Show floating button when scrolled down past 30% of page height
        if (scrollPercentage >= 30) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`scroll-to-top-fab ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp size={22} />
    </button>
  )
}
