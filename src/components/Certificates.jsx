import { Award, X, ChevronLeft, ChevronRight, ExternalLink, Calendar, Building2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Certificates.css'

export default function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const certificates = [
    { 
      title: 'Python Technology (Industrial Training)', 
      issuer: 'DigiCoders', 
      date: "Jul' 25", 
      link: '/images/cert-digicoders.png',
      description: 'Comprehensive industrial training certification covering Python core concepts, object-oriented programming, data structures, and practical application development.'
    },
    { 
      title: 'SGBSUNNATI Foundation', 
      issuer: 'Infosys', 
      date: "Aug' 25", 
      link: '/images/cert-infosys.png',
      description: 'Specialized program completion credential under Infosys Springboard focusing on technical proficiency, problem-solving, and digital skill sets.'
    },
    { 
      title: 'Employability Skills', 
      issuer: 'Wadhwani Foundation', 
      date: "Sep' 25", 
      link: '/images/cert-wadhwani.png',
      description: 'Professional readiness certificate covering essential workplace competencies, communication, critical thinking, and professional adaptability.'
    },
    { 
      title: 'CSX Cybersecurity Fundamentals Certificate (CSXF)', 
      issuer: 'Lenovo', 
      date: "Apr' 26", 
      link: '/images/cert-lenovo.png',
      description: 'Foundational certification in cybersecurity principles, network security concepts, threat identification, and vulnerability management.'
    },
    { 
      title: 'Arcade Adventure: App Dev and Cloud Observability', 
      issuer: 'Google Cloud', 
      date: "Jun 19, 2026",
      link: '/images/gcp-arcade-adventure.png',
      description: 'Google Cloud Skills Arcade award recognizing proficiency in cloud application development, system logging, monitoring metrics, and cloud observability.'
    },
    { 
      title: 'Arcade Trail: Data Engineering and Information Protection', 
      issuer: 'Google Cloud', 
      date: "Jun 21, 2026",
      link: '/images/gcp-arcade-trail.png',
      description: 'Google Cloud Skills Arcade award validating competencies in big data processing pipelines, data security governance, and information protection.'
    },
    { 
      title: 'Arcade Base Camp June 2026', 
      issuer: 'Google Cloud', 
      date: "Jun 27, 2026",
      link: '/images/gcp-arcade-basecamp.png',
      description: 'Google Cloud Skills Arcade milestone award recognizing achievement across core cloud computing labs and foundational architectural challenges.'
    },
    { 
      title: 'Arcade Voyage: Identity Management and Pre-trained AI APIs', 
      issuer: 'Google Cloud', 
      date: "Jun 28, 2026",
      link: '/images/gcp-arcade-voyage.png',
      description: 'Google Cloud Skills Arcade award for implementing IAM security controls, access policies, and integrating Google Cloud Vision, Natural Language, and Translation AI APIs.'
    },
    { 
      title: 'Introduction to Artificial Intelligence', 
      issuer: 'Infosys Springboard', 
      date: "Jul 30, 2026",
      link: '/images/cert-infosys-ai.png',
      description: 'Official course completion certificate issued by Infosys Springboard covering core Artificial Intelligence concepts, machine learning foundations, and intelligent systems.'
    },
  ]

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedIndex])

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }

  const activeCert = selectedIndex !== null ? certificates[selectedIndex] : null

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={16} /> Credentials
          </div>
          <h2 className="section-title">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Click on any license card to view full certificate details and documentation preview.
          </p>
        </div>

        <div className="grid grid-3">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="card cert-card clickable-card"
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(index) }}
            >
              <Award size={32} className="text-gradient mb-3" />
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer text-muted">{cert.issuer}</div>
              <div className="cert-date font-mono">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal using React Portal to mount on document.body */}
      {selectedIndex !== null && activeCert && ReactDOM.createPortal(
        <div className="lightbox-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Header with Title & Close button inside the modal frame */}
            <div className="lightbox-header">
              <span className="lightbox-header-title">Certificate Details</span>
              <button className="lightbox-close-btn" onClick={() => setSelectedIndex(null)} title="Close (Esc)">
                <X size={20} />
              </button>
            </div>

            {/* Lightbox body with relative positioning for nav buttons */}
            <div className="lightbox-body">
              {/* Navigation buttons */}
              <button className="lightbox-nav-btn prev-btn" onClick={handlePrev} title="Previous Certificate (Left Arrow)">
                <ChevronLeft size={24} />
              </button>
              <button className="lightbox-nav-btn next-btn" onClick={handleNext} title="Next Certificate (Right Arrow)">
                <ChevronRight size={24} />
              </button>

              <div className="lightbox-grid">
                {/* Media column */}
                <div className="lightbox-media-container">
                  {activeCert.link ? (
                    <img 
                      src={activeCert.link} 
                      alt={activeCert.title} 
                      className="lightbox-cert-img" 
                    />
                  ) : (
                    <div className="lightbox-placeholder">
                      <Award size={56} className="text-gradient" />
                      <span>Digital Badge Credential</span>
                    </div>
                  )}
                </div>

                {/* Details column */}
                <div className="lightbox-details">
                  <div className="lightbox-badge font-mono">
                    <Calendar size={14} /> {activeCert.date}
                  </div>

                  <h2 className="lightbox-title">{activeCert.title}</h2>

                  <div className="lightbox-issuer-row">
                    <Building2 size={18} className="text-gradient" />
                    <span>Issued by <strong>{activeCert.issuer}</strong></span>
                  </div>

                  <p className="lightbox-description">
                    {activeCert.description}
                  </p>

                  {activeCert.link && (
                    <a 
                      href={activeCert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary lightbox-link-btn"
                    >
                      <span>Open Full Image</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="lightbox-footer font-mono">
              Certificate {selectedIndex + 1} of {certificates.length}
            </div>

          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
