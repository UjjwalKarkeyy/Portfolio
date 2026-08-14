import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";
import ProjectsListPage from "./components/ProjectsListPage.jsx";

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  const projectSlug = projectMatch ? projectMatch[1] : null;
  const isProjectsList = /^\/projects\/?$/.test(window.location.pathname);

  useEffect(() => {
    if (projectSlug || !window.location.hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    });
  }, [projectSlug]);

  if (projectSlug) {
    return (
      <>
        <Navbar />
        <ProjectDetailPage slug={projectSlug} />
        <Footer />
      </>
    );
  }

  if (isProjectsList) {
    return (
      <>
        <Navbar />
        <ProjectsListPage />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Toolbox />
        <About />
      </main>
      <Footer />
    </>
  );
}
