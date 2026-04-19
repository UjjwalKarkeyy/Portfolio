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
            I’m a 4th-year BScIT student who enjoys the challenge of finding patterns in
            noisy datasets. My current focus is building a rock-solid career foundation as a
            Data Analyst, where I can apply my love for logic and problem-solving to
            real-world business questions.
          </p>

          <p className="page-text">
            I’m particularly curious about the <b>statistical logic</b> behind the data—moving
            beyond just "running code" to understand the "why" behind the results. I thrive
            on the backend, working with advanced SQL (CTEs and sub-queries) and data pipelines
            rather than pixel-perfect UI. This portfolio is a reflection of that: clean, direct,
            and focused on the data.
          </p>

          <p className="page-text">
            When I’m not querying databases, I’m likely competitive gaming, beatboxing, journaling, video/shorts editing, 
            book reading, exercising, researching random thoughts, or simply thinking about life.
            All keep me creative and energized, helping me maintain a balanced perspective
            while I build and learn.
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
