import { useState } from "react";
import Tag from "./Tag.jsx";

function SnapshotMedia({ snapshot, isPreview = false }) {
  const isVideo =
    snapshot.type === "video" || /\.(mp4|webm|ogg)$/i.test(snapshot.src || "");

  if (isVideo) {
    return (
      <video
        src={snapshot.src}
        title={snapshot.title || snapshot.alt || "Project video snapshot"}
        controls={isPreview}
        muted={!isPreview}
        playsInline
      />
    );
  }

  return (
    <img
      src={snapshot.src}
      alt={snapshot.alt || snapshot.title || "Project snapshot"}
      loading="lazy"
    />
  );
}

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [activeSnapshot, setActiveSnapshot] = useState(null);
  const projectId = `project-${index}`;
  const snapshots = project.snapshots || [];
  const extras = project.extras || [];

  function toggleProject() {
    setExpanded((current) => !current);
    setActiveSnapshot(null);
  }

  return (
    <article className={`project-card ${expanded ? "project-card--open" : ""}`}>
      <div className="project-card__meta">
        <span>{String(index + 1).padStart(2, "0")} / PROJECT</span>
        {project.year ? <span>{project.year}</span> : null}
        {project.placeholder ? <span>PLACEHOLDER</span> : null}
      </div>
      <h3 className="project-card__title">
        <button
          className="project-card__toggle"
          type="button"
          onClick={toggleProject}
          aria-expanded={expanded}
          aria-controls={projectId}
        >
          <span className="project-card__title-text">{project.title}</span>
          <small>{expanded ? "Hide details" : "View details"}</small>
          <span className="project-card__toggle-icon" aria-hidden="true">
            {expanded ? "-" : "+"}
          </span>
        </button>
      </h3>

      {expanded ? (
        <div className="project-card__details" id={projectId}>
          <p>{project.description}</p>

          <div className="tag-list" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {snapshots.length > 0 ? (
            <section className="project-detail-section" aria-label={`${project.title} snapshots`}>
              <h4>SNAPSHOTS</h4>
              <div className="snapshot-grid">
                {snapshots.map((snapshot, snapshotIndex) => (
                  <button
                    className="snapshot-tile"
                    type="button"
                    key={`${snapshot.src}-${snapshotIndex}`}
                    onClick={() => setActiveSnapshot(snapshotIndex)}
                  >
                    <SnapshotMedia snapshot={snapshot} />
                  </button>
                ))}
              </div>
              {activeSnapshot !== null ? (
                <div className="snapshot-preview">
                  <button
                    className="snapshot-preview__close"
                    type="button"
                    onClick={() => setActiveSnapshot(null)}
                    aria-label="Close snapshot preview"
                  >
                    Close
                  </button>
                  <SnapshotMedia snapshot={snapshots[activeSnapshot]} isPreview />
                </div>
              ) : null}
            </section>
          ) : null}

          {extras.length > 0 ? (
            <section className="project-detail-section extras" aria-label={`${project.title} extras`}>
              <h4>EXTRAS</h4>
              {extras.map((group) => (
                <div className="extras__group" key={group.heading}>
                  <h5>{group.heading}</h5>
                  <ul>
                    {(group.bullets || []).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ) : null}

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
      ) : null}
    </article>
  );
}
