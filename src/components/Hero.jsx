import PixelAvatar from "./PixelAvatar.jsx";

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-label="Home">
      <div className="hero__meta">
        <PixelAvatar size="large" />
        <span>CURRENTLY → learning / analysing / building</span>
      </div>
      <p className="eyebrow">00 / HOME</p>
      <p className="hero__role">Data Analyst · BScIT Student</p>
      <p className="hero__statement">I like finding the story hidden inside data.</p>
      <p className="hero__copy">
        I'm a BScIT student interested in finding patterns, asking the right
        questions, and turning data into useful insights. I'm currently building
        my foundation in Data Analytics, with the long-term goal of moving deeper
        into Data Science.
      </p>
      <div className="hero__actions" aria-label="Primary actions">
        <a className="button button--primary" href="#projects">
          View Projects
        </a>
        <a className="button" href="/resume.pdf" download>
          Download Resume ↓
        </a>
        <a
          className="text-link"
          href="https://github.com/UjjwalKarkeyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/ujjwal-karki-871b592a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
