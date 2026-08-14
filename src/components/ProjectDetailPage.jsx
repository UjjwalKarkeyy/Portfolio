import { useState } from "react";
import Tag from "./Tag.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { projects } from "../data/projects.js";

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

export default function ProjectDetailPage({ slug }) {
  const [activeSnapshot, setActiveSnapshot] = useState(null);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main>
        <section className="section container project-page" aria-label="Project not found">
          <SectionLabel number="404">PROJECT</SectionLabel>
          <h1>Project not found.</h1>
          <a className="button" href="/#projects">
            Back to Projects
          </a>
        </section>
      </main>
    );
  }

  const snapshots = project.snapshots || [];
  const extras = project.extras || [];

  return (
    <main>
      <section className="section container project-page" aria-labelledby="project-title">
        <a className="text-link project-page__back" href="/#projects">
          Back to Projects
        </a>
        <SectionLabel number="PROJECT">DETAILS</SectionLabel>
        <div className="project-page__header">
          <div>
            <h1 id="project-title">{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="project-page__links">
            <a
              className="button button--primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            {project.liveDemo ? (
              <a
                className="button"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            ) : null}
          </div>
        </div>

        <div className="tag-list project-page__tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <section className="project-detail-section" aria-label={`${project.title} snapshots`}>
          <h2>SNAPSHOTS</h2>
          {snapshots.length > 0 ? (
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
          ) : (
            <div className="snapshot-grid snapshot-grid--empty">
              <div className="snapshot-empty">
                Add image or video snapshots in the project data file.
              </div>
            </div>
          )}
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

        {extras.length > 0 ? (
          <section className="project-detail-section extras" aria-label={`${project.title} extras`}>
            <h2>EXTRAS</h2>
            {extras.map((group) => (
              <div className="extras__group" key={group.heading}>
                <h3>{group.heading}</h3>
                <ul>
                  {(group.bullets || []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : null}
      </section>
    </main>
  );
}
