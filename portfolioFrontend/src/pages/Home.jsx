// src/pages/Home.jsx
import homePic from "../assets/home_pic.jpg";
import ujjwalCV from "../assets/Ujjwal_Karki_CV.pdf"

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">

        {/* --- Text Section --- */}
        <div className="hero-text">
          <p className="hero-tagline">Hey, I&apos;m</p>

          <h1 className="hero-title">Ujjwal Karki</h1>

          <p className="hero-role"><b>Aspiring AI/ML Engineer</b></p>

          <p className="hero-subtitle">
            I build things that live at the intersection of data, code, and people.
            This portfolio showcases who I am, what I’m learning, and the projects I’ve worked on.
            Feel free to explore - and reach out if you ever want to collaborate, talk tech,
            or even team up for a gaming session.
          </p>
          <a href={ujjwalCV} download className="download-btn">
            Download CV
          </a>
        </div>

        {/* --- Image Section (placeholder for now) --- */}
        <div className="home-pic">
          <img src={homePic} alt="Home Pic" />
        </div>
      </div>
    </section>
  )
}

export default Home;
