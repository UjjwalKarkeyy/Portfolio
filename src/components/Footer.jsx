import { useState } from "react";

const email = "ujjwalkarki.official@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  function showCopied() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function copyWithFallback() {
    const input = document.createElement("textarea");
    input.value = email;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  async function copyEmail() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        copyWithFallback();
      }
      showCopied();
    } catch {
      try {
        copyWithFallback();
        showCopied();
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <footer className="footer container">
      <div className="footer__contact">
        <span>contact me:</span>
        <button className="footer__email" type="button" onClick={copyEmail}>
          ujjwalkarki [dot] official [at] gmail [dot] com
        </button>
      </div>
      <p className="footer__end">&lt; END OF FILE /&gt;</p>
      <div className="footer__links">
        <span>UJJWAL KARKI · 2026 ·</span>
        <a
          href="https://github.com/UjjwalKarkeyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-karki-871b592a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      {copied ? (
        <div className="copy-toast" role="status">
          Copied to clipboard!
        </div>
      ) : null}
    </footer>
  );
}
