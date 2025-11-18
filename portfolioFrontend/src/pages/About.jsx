// src/pages/About.jsx
import aboutPic from "../assets/about_me_pic.jpg";

function About() {
  return (
    <section className="page about-page">
      <h2 className="page-title">About Me</h2>

      <div className="about-content">

        {/* --- Text Section --- */}
        <div className="about-text">
          <p className="page-text">
            I&apos;m a curious BSc IT student who loves working at the intersection of data, code, and real-world
            problems. Most of my time goes into learning Machine Learning, building small projects, and trying to
            understand how AI can be used to solve problems in places like Nepal and beyond.
          </p>

          <p className="page-text">
            I enjoy backend, data pipelines, and experimentation more than pixel-perfect UI, which is why this
            portfolio is clean, simple, and focused on what matters: the work I do and the impact I want to create.
          </p>

          <p className="page-text">
            Outside the tech world, I’m a gamer and a beatboxer - both of which help me stay creative, energized,
            and balanced while I build and learn.
          </p>
        </div>

        {/* --- Image Section --- */}
        <div className="about-image">
          <img src={aboutPic} alt="About Me Pic" />
        </div>

      </div>
    </section>
  );
}

export default About;
