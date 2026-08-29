import { 
  FileCode, 
  FileCode2, 
  FileJson, 
  Binary, 
  Cpu, 
  Sparkles, 
  Coffee, 
  Database, 
  Bot, 
  GitBranch, 
  Rocket, 
  Code2, 
  Cloud, 
  Globe, 
  Terminal, 
  Puzzle, 
  Users, 
  Award, 
  Compass 
} from 'lucide-react'
import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const skills = [
    { name: 'HTML', category: 'languages', icon: FileCode },
    { name: 'CSS', category: 'languages', icon: FileCode2 },
    { name: 'JavaScript', category: 'languages', icon: FileJson },
    { name: 'C', category: 'languages', icon: Binary },
    { name: 'C++', category: 'languages', icon: Cpu },
    { name: 'Python', category: 'languages', icon: Sparkles },
    { name: 'Java', category: 'languages', icon: Coffee },
    { name: 'SQL', category: 'languages', icon: Database },
    { name: 'Prompt Engineering', category: 'tools', icon: Bot },
    { name: 'GitHub', category: 'tools', icon: GitBranch },
    { name: 'Antigravity', category: 'tools', icon: Rocket },
    { name: 'Visual Studio Code', category: 'tools', icon: Code2 },
    { name: 'Google Cloud Platform (GCP)', category: 'tools', icon: Cloud },
    { name: 'Netlify', category: 'tools', icon: Globe },
    { name: 'PyCharm', category: 'tools', icon: Terminal },
    { name: 'Problem-Solving', category: 'soft', icon: Puzzle },
    { name: 'Team Player', category: 'soft', icon: Users },
    { name: 'Leadership', category: 'soft', icon: Award },
    { name: 'Adaptability', category: 'soft', icon: Compass },
  ]

  const filteredSkills = activeFilter === 'all' ? skills : skills.filter(s => s.category === activeFilter)

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Terminal size={16} /> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            An interactive view of programming languages, tools, platforms, and professional skills.
          </p>
        </div>

        <div className="skills-filter-container">
          <button 
            className={`skill-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >All</button>
          <button 
            className={`skill-filter-btn ${activeFilter === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveFilter('languages')}
          >Languages</button>
          <button 
            className={`skill-filter-btn ${activeFilter === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tools')}
          >Tools & Platforms</button>
          <button 
            className={`skill-filter-btn ${activeFilter === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveFilter('soft')}
          >Soft Skills</button>
        </div>

        <div className="grid grid-4 skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon
            const cardContent = (
              <>
                <div className="skill-icon-wrapper">
                  <IconComponent size={28} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </>
            );

            // Link Google Cloud Platform and certified skills to Licenses & Certificates section
            const hasCert = skill.name === 'Python' || skill.name === 'Google Cloud Platform (GCP)' || skill.name === 'CyberSecurity' || skill.name === 'Impactful Writing Skills';
            const linkHref = hasCert ? '#certificates' : null;

            return linkHref ? (
              <a href={linkHref} key={index} className="card skill-card clickable-card" style={{textDecoration: 'none', color: 'inherit'}}>
                {cardContent}
              </a>
            ) : (
              <div key={index} className="card skill-card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
