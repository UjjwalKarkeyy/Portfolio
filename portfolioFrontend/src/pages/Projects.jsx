// src/pages/Projects.jsx
// src/pages/Projects.jsx
const projects = [
  {
    title: 'Crop Disease Prediction',
    description:
      'Image-based model to detect crop diseases from leaf photos, built with deep learning and deployed as a web app.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    link: 'https://github.com/UjjwalKarkeyy/Crop_Disease_Prediction_Deploy',
  },
  {
    title: 'BainiAI – Company Policies Q&A Chatbot',
    description:
      'LLM-powered chatbot that answers questions from documents of your company and books appointments using natural language.',
    tech: ['LangChain', 'Gemini', 'ChromaDB', 'React', 'FastAPI'],
    link: 'https://github.com/UjjwalKarkeyy/bainiAI_Chatbot_Full',
  },
  {
    title: 'didiAI – Document Q&A and Interview Booking Chatbot',
    description:
      'LLM-powered chatbot that answers questions based on uploaded documents and books interviews using natural language.',
    tech: ['LangChain', 'Gemini', 'Qdrant', 'Redis', 'SQLite', 'SQLAlchemy ', 'FastAPI'],
    link: 'https://github.com/UjjwalKarkeyy/didiAI',
  },

  {
    title: 'SQL Data Job Market Analysis',
    description:
      'A strategic analysis of the Data Analyst job market using PostgreSQL to identify high-demand skills and salary trends. Focused on leveraging advanced SQL (CTEs and Sub-queries) to map out a data-driven path toward Data Science.',
    tech: ['PostgreSQL', 'SQL', 'Data Analysis', 'Data Strategy'],
    link: 'https://github.com/UjjwalKarkeyy/SQL_DATA_JOB_ANALYSIS',
  },
]

function Projects() {
  return (
    <section className="page projects-page">
      <h2 className="page-title">Projects</h2>
      <p className="page-text">
        A quick snapshot of some projects I&apos;ve worked on recently. Each one focuses on learning
        something new and applying it to a real-world style problem.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">

            {/* Wrap everything inside an anchor tag */}
            <a href={project.link} target="_blank" rel="noreferrer" className="project-card-link">

              {/* Inner wrapper for layout control */}
              <div className="project-card-content">

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <p className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </p>

                {/* Optional text (not required now that full card is clickable) */}
                <span className="project-link">View on GitHub</span>

              </div>

            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
