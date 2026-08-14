import SectionLabel from "./SectionLabel.jsx";
import { skillGroups } from "../data/skills.js";

export default function Toolbox() {
  return (
    <section className="section container" id="toolbox" aria-label="Toolbox">
      <SectionLabel number="02">TOOLBOX</SectionLabel>
      <div className="toolbox-grid">
        {skillGroups.map((group) => (
          <div className="toolbox-group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
