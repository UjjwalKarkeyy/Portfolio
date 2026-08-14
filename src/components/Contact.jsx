import SectionLabel from "./SectionLabel.jsx";

export default function Contact() {
  return (
    <section className="section container contact" id="contact" aria-labelledby="contact-title">
      <SectionLabel number="04">CONTACT</SectionLabel>
      <div className="section-grid">
        <h2 id="contact-title">Open to data-focused learning and early career opportunities.</h2>
        <div className="contact__links">
          <a
            className="button button--primary"
            href="https://github.com/UjjwalKarkeyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/ujjwal-karki-871b592a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a className="button" href="/resume.pdf" download>
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}
