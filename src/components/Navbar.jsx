import PixelAvatar from "./PixelAvatar.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESUME", href: "/resume.pdf", download: true },
  {
    label: "GITHUB ↗",
    href: "https://github.com/UjjwalKarkeyy",
    external: true
  },
  {
    label: "LINKEDIN ↗",
    href: "https://www.linkedin.com/in/ujjwal-karki-871b592a9/",
    external: true
  }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="nav__brand" href="#home" aria-label="Ujjwal Karki home">
          <PixelAvatar />
          <span>UJJWAL KARKI</span>
        </a>
        <div className="nav__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download || undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
