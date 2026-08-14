import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const visibleProjects = [...projects]
    .sort((first, second) => (first.priority ?? 999) - (second.priority ?? 999))
    .slice(0, 4);

  return (
    <section className="section container" id="projects" aria-label="Selected work">
      <SectionLabel number="01" meta={`${projects.length} records found`}>
        PROJECTS
      </SectionLabel>
      <div className="project-list">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      {projects.length > 4 ? (
        <div className="project-list__more">
          <a className="button" href="/projects">
            View more
          </a>
        </div>
      ) : null}
    </section>
  );
}
