import { useEffect, useState } from "react";

const checkpoints = [
  "valorant-rail--spawn",
  "valorant-rail--ability",
  "valorant-rail--shooting",
  "valorant-rail--spike",
  "valorant-rail--complete"
];

export default function ValorantRail() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    function updateProgress() {
      if (mediaQuery.matches) {
        setProgress(0);
        return;
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    mediaQuery.addEventListener("change", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      mediaQuery.removeEventListener("change", updateProgress);
    };
  }, []);

  const checkpointIndex = reducedMotion
    ? 0
    : Math.min(checkpoints.length - 1, Math.floor(progress * checkpoints.length));
  const plantProgress = Math.min(1, Math.max(0, (progress - 0.6) / 0.2));

  return (
    <aside
      className={`valorant-rail ${checkpoints[checkpointIndex]}`}
      style={{
        "--rail-progress": reducedMotion ? 0 : progress,
        "--plant-progress": plantProgress
      }}
      aria-label="Valorant-inspired scroll animation"
    >
      <div className="valorant-rail__line" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="valorant-player" aria-hidden="true">
        <span className="valorant-player__crosshair" />
        <span className="valorant-player__particle valorant-player__particle--one" />
        <span className="valorant-player__particle valorant-player__particle--two" />
        <span className="valorant-player__particle valorant-player__particle--three" />
        <span className="valorant-player__head" />
        <span className="valorant-player__body" />
        <span className="valorant-player__visor" />
        <span className="valorant-player__arm" />
        <span className="valorant-player__leg valorant-player__leg--one" />
        <span className="valorant-player__leg valorant-player__leg--two" />
      </div>

      <span className="valorant-tracer" aria-hidden="true" />

      <div className="valorant-spike" aria-hidden="true">
        <span className="valorant-spike__core" />
        <span className="valorant-spike__bar" />
      </div>

      <div className="valorant-callout valorant-callout--planted">SPIKE PLANTED</div>
      <div className="valorant-callout valorant-callout--complete">ROUND WON</div>
    </aside>
  );
}
