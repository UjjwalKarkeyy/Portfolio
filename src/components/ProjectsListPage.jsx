import { useMemo, useState } from "react";
import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

function normalize(value) {
  return value.toLowerCase().trim();
}

export default function ProjectsListPage() {
  const [query, setQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  const genres = useMemo(
    () => [...new Set(projects.flatMap((project) => project.genres || []))].sort(),
    []
  );

  const skills = useMemo(
    () => [...new Set(projects.flatMap((project) => project.tags || []))].sort(),
    []
  );

  const filteredProjects = projects.filter((project) => {
    const searchableText = normalize(
      [
        project.title,
        project.description,
        ...(project.tags || []),
        ...(project.genres || [])
      ].join(" ")
    );
    const matchesSearch = !query || searchableText.includes(normalize(query));
    const matchesGenre = genreFilter && project.genres?.includes(genreFilter);
    const matchesSkill = skillFilter && project.tags?.includes(skillFilter);
    const hasFilter = Boolean(genreFilter || skillFilter);
    const matchesFilters = !hasFilter || matchesGenre || matchesSkill;

    return matchesSearch && matchesFilters;
  });

  return (
    <main>
      <section className="section container projects-page" aria-label="Projects">
        <a className="text-link project-page__back" href="/#projects">
          Back to Home
        </a>
        <SectionLabel number="ALL" meta={`${projects.length} records found`}>
          PROJECTS
        </SectionLabel>

        <div className="project-controls" aria-label="Project search and filters">
          <label>
            <span>SEARCH</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects"
            />
          </label>
          <label>
            <span>GENRE</span>
            <select
              value={genreFilter}
              onChange={(event) => setGenreFilter(event.target.value)}
            >
              <option value="">All genres</option>
              {genres.map((genre) => (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>SKILL</span>
            <select
              value={skillFilter}
              onChange={(event) => setSkillFilter(event.target.value)}
            >
              <option value="">All skills</option>
              {skills.map((skill) => (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="project-list">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="project-empty">
            I haven't done this project 🧐, but maybe something similar or
            interesting is still here for you 🫣
          </p>
        )}
      </section>
    </main>
  );
}
