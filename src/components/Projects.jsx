import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <SectionLabel number="01" meta={`${projects.length} records found`}>
        SELECTED WORK
      </SectionLabel>
      <div className="section-heading section-heading--wide">
        <h2 id="projects-title">Projects kept close to the data.</h2>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
