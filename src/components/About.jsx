import { User, Cpu, Code2, Lightbulb } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <User size={16} /> Background
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about engineering intelligent software systems, modern web platforms, and practical digital solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-p">
              I am a proactive and driven <strong>Software Developer</strong> pursuing a Bachelor of Technology in Computer Science at Lovely Professional University.
            </p>
            <p className="about-p">
              With a strong foundation in modern web frameworks, artificial intelligence, and efficient algorithms, I enjoy transforming ideas into intuitive and responsive digital experiences while focusing on clean architecture and reliable backend systems.
            </p>

            <div className="about-highlights">
              <div className="about-pill">
                <Cpu size={18} />
                <span>AI Integration</span>
              </div>
              <div className="about-pill">
                <Code2 size={18} />
                <span>Full-Stack Development</span>
              </div>
              <div className="about-pill">
                <Lightbulb size={18} />
                <span>Practical Problem Solving</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
