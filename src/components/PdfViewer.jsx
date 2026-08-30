import { FileText, Download, ExternalLink, Eye, X } from 'lucide-react'
import { useState } from 'react'
import './PdfViewer.css'

export default function PdfViewer() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const pdfUrl = '/portfolio.pdf'

  return (
    <section id="portfolio-pdf" className="pdf-section">
      <div className="container">
        <div className="pdf-card">
          <div className="pdf-info">
            <div className="pdf-icon-wrapper">
              <FileText size={32} className="pdf-icon" />
            </div>
            <div className="pdf-text">
              <h3 className="pdf-title">Official Portfolio Document (PDF)</h3>
              <p className="pdf-description">
                View or download Anushka Kumari's complete technical portfolio resume & credentials document.
              </p>
            </div>
          </div>

          <div className="pdf-actions">
            <button 
              className="btn btn-secondary pdf-btn"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye size={18} />
              <span>Preview PDF</span>
            </button>

            <a 
              href={pdfUrl} 
              download="Anushka_Kumari_Portfolio.pdf" 
              className="btn btn-primary pdf-btn"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen PDF Modal Preview */}
      {isPreviewOpen && (
        <div className="pdf-modal-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <div className="pdf-modal-header-left">
                <FileText size={20} className="text-accent" />
                <span>Anushka Kumari - Portfolio Document Preview</span>
              </div>
              <div className="pdf-modal-header-right">
                <a 
                  href={pdfUrl} 
                  download="Anushka_Kumari_Portfolio.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} /> Download
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
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Portfolio PDF Preview"
                className="pdf-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
