import { Mail, Phone, ArrowRight, Send, Terminal, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaPython, FaReact, FaJsSquare, FaGitAlt, FaCloud } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import './Hero.css'

export default function Hero() {
  const FloatingBadge = ({ icon: Icon, label, color, style }) => (
    <div className="floating-tech-badge" style={{ ...style, '--badge-color': color }}>
      <Icon size={16} />
      <span>{label}</span>
    </div>
  )

  return (
    <section id="home" className="hero-section section">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="hero-status-tag">
              <span className="status-dot"></span>
              <span>Available for Projects & Collaboration</span>
            </div>

            <h1 className="hero-title">
              <span className="text-gradient">ANUSHKA KUMARI</span>
            </h1>

            <div className="hero-subtitle-box">
              <span className="font-mono text-accent">&gt;</span>
              <span className="typewriter-text font-mono">Software Developer & AI Specialist</span>
            </div>

            <p className="hero-bio">
              A passionate Computer Science student focused on building practical web applications, 
              AI-powered products, robust backend architectures, and modern digital experiences using 
              technologies such as <strong>Python</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>C++</strong>.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#cv-resume" className="btn btn-secondary hero-btn">
                <span>View CV / Resume</span>
              </a>
              <a href="#contact" className="btn btn-secondary hero-btn">
                <span>Contact Me</span>
                <Send size={18} />
              </a>
            </div>

            <div className="hero-social-links">
              <a href="https://github.com/AnushkaDubey368" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub Profile">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anushkadubey01/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn Profile">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:anushkadubeyshawarn@gmail.com" className="social-icon-link" title="Send Email">
                <Mail size={20} />
              </a>
              <a href="tel:+919234911265" className="social-icon-link" title="Call">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-interactive-avatar">
              
              {/* Outer Orbit Rings */}
              <div className="orbit-ring orbit-outer"></div>
              <div className="orbit-ring orbit-inner"></div>

              {/* Floating Orbiting Tech Badges inspired by reference UI */}
              <FloatingBadge icon={FaPython} label="Python" color="#3776ab" style={{ top: '6%', left: '4%' }} />
              <FloatingBadge icon={FaJsSquare} label="JavaScript" color="#f7df1e" style={{ top: '2%', right: '12%' }} />
              <FloatingBadge icon={FaReact} label="React" color="#61dafb" style={{ top: '48%', right: '-8%' }} />
              <FloatingBadge icon={SiCplusplus} label="C++" color="#00599c" style={{ bottom: '12%', right: '4%' }} />
              <FloatingBadge icon={FaCloud} label="Google Cloud" color="#4285f4" style={{ bottom: '4%', left: '16%' }} />
              <FloatingBadge icon={FaGitAlt} label="Git" color="#f05032" style={{ top: '44%', left: '-8%' }} />

              {/* Avatar Center Frame */}
              <div className="hero-image-frame">
                <img src="/images/profile.png" alt="Anushka Kumari" className="hero-profile-img" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
