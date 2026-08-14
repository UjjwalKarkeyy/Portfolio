import Tag from "./Tag.jsx";

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{String(index + 1).padStart(2, "0")} / PROJECT</span>
        {project.year ? <span>{project.year}</span> : null}
        {project.placeholder ? <span>PLACEHOLDER</span> : null}
      </div>
      <div className="project-card__content">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-card__side">
          <div className="tag-list" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="project-card__links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
