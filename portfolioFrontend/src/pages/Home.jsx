// src/pages/Home.jsx
import homePic from "../assets/home_pic.jpg";
import ujjwalResume from "../assets/Ujjwal_Karki_resume.pdf"

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">

        {/* --- Text Section --- */}
        <div className="hero-text">
          <p className="hero-tagline">Hey, I&apos;m</p>

          <h1 className="hero-title">Ujjwal Karki</h1>

          <p className="hero-role"><b>Data Analyst | Aspiring Data Scientist</b></p>

          <p className="hero-subtitle">
            I’m a final-year IT student dedicated to turning complex data into clear, actionable insights. 
            Currently, I’m focused on mastering the technical foundations of data analysis as a 
            stepping stone toward high-impact Data Science. Feel free to explore my work—and reach 
            out if you want to talk data logic, collaborative projects, or even team up for a gaming session.
          </p>
          <a href={ujjwalResume} download className="download-btn">
            Download Resume
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
