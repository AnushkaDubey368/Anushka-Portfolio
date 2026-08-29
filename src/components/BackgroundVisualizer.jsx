import { useEffect, useRef } from 'react'
import './BackgroundVisualizer.css'

export default function BackgroundVisualizer({ theme, highContrast }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (highContrast) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = { x: null, y: null, radius: 180 }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const isLight = theme === 'light'
    const particleColors = isLight 
      ? ['#ff6b00', '#0284c7', '#10b981', '#8b5cf6'] 
      : ['#ff6b00', '#38bdf8', '#34d399', '#c084fc']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resize)
    resize()

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 1.2
        this.vy = (Math.random() - 0.5) * 1.2
        this.radius = Math.random() * 2.5 + 1.2
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.04 + Math.random() * 0.03
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += this.pulseSpeed

        // Wrap around screen boundaries for smooth continuous flow
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Interactive mouse magnetic reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= forceDirectionX * force * 3
            this.y -= forceDirectionY * force * 3
          }
        }
      }
      
      draw() {
        const currentRadius = this.radius + Math.sin(this.pulse) * 0.8
        ctx.beginPath()
        ctx.arc(this.x, this.y, Math.max(0.8, currentRadius), 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.shadowBlur = 12
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Generate responsive particle density
    const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 9000), 120)
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw Particles
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      // Draw Constellation Vector Net Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 150) {
            ctx.beginPath()
            const opacity = (1 - (dist / 150)) * 0.6
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            gradient.addColorStop(0, particles[i].color)
            gradient.addColorStop(1, particles[j].color)
            
            ctx.strokeStyle = gradient
            ctx.globalAlpha = opacity
            ctx.lineWidth = 1.1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1.0
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, highContrast])

  return (
    <div className="background-visualizer">
      {highContrast ? null : <canvas ref={canvasRef} />}
    </div>
  )
}
