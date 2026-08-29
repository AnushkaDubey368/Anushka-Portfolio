import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setStatus('submitting')

    // Construct mailto link with pre-filled details
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`)
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoUrl = `mailto:anushkadubeyshawarn@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`

    // Trigger user mail client & provide instant on-screen success feedback
    setTimeout(() => {
      window.location.href = mailtoUrl
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 600)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={16} /> Connection
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Looking for new opportunities, collaborations, or have a question? Send me a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a href="mailto:anushkadubeyshawarn@gmail.com" className="card contact-card clickable-contact">
              <Mail className="contact-icon text-gradient" size={32} />
              <h3>Email</h3>
              <span className="text-muted">anushkadubeyshawarn@gmail.com</span>
            </a>
            
            <a href="tel:+919234911265" className="card contact-card clickable-contact">
              <Phone className="contact-icon text-gradient" size={32} />
              <h3>Phone</h3>
              <span className="text-muted">+91 9234911265</span>
            </a>

            <div className="card contact-card">
              <MapPin className="contact-icon text-gradient" size={32} />
              <h3>Location</h3>
              <span className="text-muted">Phagwara, Punjab</span>
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="form-alert alert-success">
                <CheckCircle2 size={20} />
                <span>Message prepared! Opening your mail application...</span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-alert alert-error">
                <AlertCircle size={20} />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  value={formData.name} 
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  value={formData.email} 
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Project Inquiry / Job Opportunity" 
                value={formData.subject} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Hi Anushka, I'd like to discuss..." 
                value={formData.message} 
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <span>Preparing Email...</span>
                  <Loader2 size={18} className="spin-icon" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
