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
          <div className="project-card__title-row">
            <h3>
              <a href={`/projects/${project.slug}`}>{project.title}</a>
            </h3>
            {project.genres?.length ? (
              <div className="genre-list" aria-label={`${project.title} genres`}>
                {project.genres.map((genre) => (
                  <span className="genre-tag" key={genre}>
                    {genre}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <p>{project.description}</p>
        </div>
        <div className="project-card__side">
          <div className="tag-list" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="project-card__links">
            <a href={`/projects/${project.slug}`}>View Details</a>
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
