import SectionLabel from "./SectionLabel.jsx";

export default function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <SectionLabel number="03">ABOUT</SectionLabel>
      <div className="section-grid">
        <h2 id="about-title">Clear thinking for useful analysis.</h2>
        <div className="copy-stack">
          <p>
            I'm a BScIT student interested in finding patterns, asking the right
            questions, and turning data into useful insights.
          </p>
          <p>
            I'm currently building practical experience in Data Analytics, with
            the long-term goal of moving deeper into Data Science. I care about
            logical reasoning, clear communication, and problem solving that
            starts with good questions.
          </p>
          <p>
            Outside data, I'm a beatboxer, gamer, and content creator. My
            current favorite games are Valorant and Mafia, I like making gaming
            and comedy content, and I keep a daily journal that is now past 700
            days.
          </p>
        </div>
      </div>
    </section>
  );
}
