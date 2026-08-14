import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section container" id="projects" aria-label="Selected work">
      <SectionLabel number="01" meta={`${projects.length} records found`}>
        PROJECTS
      </SectionLabel>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
