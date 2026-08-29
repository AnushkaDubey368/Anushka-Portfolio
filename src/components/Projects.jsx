import { FolderGit2, Calendar, Layout } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'OnlineFeedbackCollector',
      tech: 'HTML, Python (Flask), SQLite, Bootstrap 5',
      date: "Aug' 26",
      desc: [
        'Engineered a robust backend infrastructure using Flask and SQLite, securely managing 100% of non-reloading AJAX form submissions, which optimized server response times by 40% and improved data handling efficiency by 30%.',
        'Leveraged Chart.js for interactive dashboard analytics based on feedback parameters such as average rating, sentiment ratios, and score distributions; achieved a 50% reduction in manual reporting time through real-time metric cards and automated CSV exports.'
      ]
    },
    {
      title: 'KrishiMitra',
      tech: 'Python, Artificial Intelligence, Application Programming Interfaces',
      date: "May' 26",
      desc: [
        'Engineered a Python-based AI crop disease detection system, enabling instant image diagnosis and achieving 92% accuracy.',
        'Revamped inventory management by accurately forecasting demand for top-selling items, cutting wastage by 30% and optimizing stock.',
        'Implemented a 24/7 AI chatbot via REST APIs for real-time agricultural queries, reducing response times by 60%.'
      ]
    },
    {
      title: 'Cybershield',
      tech: 'HTML, CSS, JavaScript',
      date: "Feb' 26",
      desc: [
        'Architected an interactive cybersecurity education portal with 10 tools, transforming theoretical concepts into hands-on learning, boosting engagement by 40%.',
        'Transformed the management interface to seamlessly coordinate rooms, staff, and customers, boosting operational efficiency by 50%.',
        'Engineered real-time simulation modules (Brute Force, Phishing, AES, Port Scanners), enabling users to safely practice ethical testing strategies.'
      ]
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layout size={16} /> Portfolio Work
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Applications built with modern technologies and interactive experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="card project-card">
              <div className="project-header">
                <h3 className="project-title text-gradient">{project.title}</h3>
                <span className="project-date">
                  <Calendar size={14} /> {project.date}
                </span>
              </div>
              
              <div className="project-meta">
                <FolderGit2 size={16} className="text-muted" />
                <span className="project-tech font-mono">{project.tech}</span>
              </div>

              <ul className="project-desc-list">
                {project.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
