import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";
import ProjectsListPage from "./components/ProjectsListPage.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import PixelBattle from "./components/PixelBattle.jsx";

export default function App() {
  const [location, setLocation] = useState({
    pathname: window.location.pathname,
    hash: window.location.hash
  });
  const projectMatch = location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  const projectSlug = projectMatch ? projectMatch[1] : null;
  const isProjectsList = /^\/projects\/?$/.test(location.pathname);
  const isHome = !projectSlug && !isProjectsList;

  useEffect(() => {
    function syncLocation() {
      setLocation({
        pathname: window.location.pathname,
        hash: window.location.hash
      });
    }

    function handleClick(event) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a");
      if (
        !link ||
        link.target ||
        link.hasAttribute("download") ||
        link.origin !== window.location.origin
      ) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, "", link.pathname + link.search + link.hash);
      syncLocation();
    }

    window.addEventListener("popstate", syncLocation);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!isHome || !location.hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView();
    });
  }, [isHome, location.hash]);

  let content = (
    <main className="home-page">
      <Hero />
      <Projects />
      <Toolbox />
      <About />
    </main>
  );

  if (projectSlug) {
    content = <ProjectDetailPage slug={projectSlug} />;
  } else if (isProjectsList) {
    content = <ProjectsListPage />;
  }

  return (
    <>
      <Navbar />
      <MusicPlayer visible={isHome} />
      {isHome ? <PixelBattle /> : null}
      {content}
      <Footer />
    </>
  );
}
