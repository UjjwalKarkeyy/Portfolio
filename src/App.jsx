import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);

  if (projectMatch) {
    return (
      <>
        <Navbar />
        <ProjectDetailPage slug={projectMatch[1]} />
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
