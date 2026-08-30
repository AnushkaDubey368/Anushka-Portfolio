import { FileText, Download, ExternalLink, Eye, X } from 'lucide-react'
import { useState } from 'react'
import './PdfViewer.css'

export default function PdfViewer() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const driveViewUrl = 'https://drive.google.com/file/d/1eSvX8JrhyW-aLl9NIuduTzD1-5NtXj3k/view?usp=sharing'
  const driveEmbedUrl = 'https://drive.google.com/file/d/1eSvX8JrhyW-aLl9NIuduTzD1-5NtXj3k/preview'
  const driveDownloadUrl = 'https://drive.google.com/uc?export=download&id=1eSvX8JrhyW-aLl9NIuduTzD1-5NtXj3k'

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
              href={driveDownloadUrl} 
              target="_blank"
              rel="noopener noreferrer"
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
                  href={driveViewUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={14} /> Open in Drive
                </a>
                <a 
                  href={driveDownloadUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
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
                src={driveEmbedUrl}
                title="Curriculum Vitae Preview"
                className="pdf-iframe"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
