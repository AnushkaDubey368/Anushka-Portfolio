import { FileText, Download, Eye, X } from 'lucide-react'
import { useState } from 'react'
import './PdfViewer.css'

export default function PdfViewer() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const resumeUrl = '/resume.pdf'

  return (
    <section id="cv-resume" className="pdf-section">
      <div className="container">
        <div className="pdf-card">
          <div className="pdf-info">
            <div className="pdf-icon-wrapper">
              <FileText size={32} className="pdf-icon" />
            </div>
            <div className="pdf-text">
              <h3 className="pdf-title">Curriculum Vitae / Resume (CV)</h3>
              <p className="pdf-description">
                View or download Anushka Kumari's official CV resume document.
              </p>
            </div>
          </div>

          <div className="pdf-actions">
            <button 
              className="btn btn-secondary pdf-btn"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye size={18} />
              <span>Preview CV</span>
            </button>

            <a 
              href={resumeUrl} 
              download="Anushka_Kumari_CV.pdf" 
              className="btn btn-primary pdf-btn"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen CV PDF Modal Preview */}
      {isPreviewOpen && (
        <div className="pdf-modal-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <div className="pdf-modal-header-left">
                <FileText size={20} className="text-accent" />
                <span>Anushka Kumari - Curriculum Vitae (CV) Preview</span>
              </div>
              <div className="pdf-modal-header-right">
                <a 
                  href={resumeUrl} 
                  download="Anushka_Kumari_CV.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} /> Download CV
                </a>
                <button 
                  className="pdf-modal-close" 
                  onClick={() => setIsPreviewOpen(false)}
                  title="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="pdf-modal-body">
              <iframe 
                src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Curriculum Vitae Preview"
                className="pdf-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
