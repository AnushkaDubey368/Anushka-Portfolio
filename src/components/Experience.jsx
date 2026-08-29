import { GraduationCap, Briefcase } from 'lucide-react'
import './Experience.css'

export default function Experience() {
  const education = [
    {
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'Bachelor of Technology in CSE',
      date: "Aug' 26 – Present"
    },
    {
      institution: 'Government Girls PolytechnicMeja',
      location: 'Prayagraj, UP',
      degree: 'Diploma in CSE, Percentage: 82.11%',
      date: 'Aug 23 - July 26'
    },
    {
      institution: 'Delhi Model Public School',
      location: 'Arrah, Bihar',
      degree: 'Higher Secondary Education; Percentage: 75.8%',
      date: 'May 22- April 23'
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Education & <span className="text-gradient">Training</span>
          </h2>
        </div>

        <div className="grid grid-2">
          {/* Education Column */}
          <div>
            <h3 className="column-title"><GraduationCap size={24} className="text-gradient" /> Education</h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item card">
                  <div className="timeline-date">{edu.date}</div>
                  <h4 className="timeline-title">{edu.institution}</h4>
                  <p className="timeline-subtitle text-gradient">{edu.degree}</p>
                  <p className="timeline-location text-muted">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training Column */}
          <div>
            <h3 className="column-title"><Briefcase size={24} className="text-gradient" /> Training</h3>
            <div className="timeline">
              <div className="timeline-item card">
                <div className="timeline-date">Jun' 25 – Jul' 25</div>
                <h4 className="timeline-title">Digicoders</h4>
                <p className="timeline-subtitle text-gradient">FullStack Development using Python</p>
                <ul className="timeline-desc-list text-muted">
                  <li>Mastered Python programming and Django web framework fundamentals during intensive industrial training, accelerating backend development workflows by 20%.</li>
                  <li>Developed and deployed a dynamic fitness tracker website using Python and Django, improving user health data tracking efficiency by 15%.</li>
                  <li>Employed Django's ORM and robust backend routing techniques to enhance overall application performance and page load speeds by 25%.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
