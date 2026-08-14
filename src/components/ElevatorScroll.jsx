import { useEffect, useState } from "react";

export default function ElevatorScroll() {
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

  return (
    <aside
      className={`elevator-scroll ${
        progress < 0.12
          ? "elevator-scroll--entering"
          : progress > 0.88
            ? "elevator-scroll--exiting"
            : "elevator-scroll--riding"
      }`}
      style={{ "--elevator-progress": reducedMotion ? 0 : progress }}
      aria-label="Scroll elevator animation"
    >
      <div className="elevator-scroll__shaft" aria-hidden="true">
        <span className="elevator-scroll__floor elevator-scroll__floor--top" />
        <span className="elevator-scroll__floor elevator-scroll__floor--mid" />
        <span className="elevator-scroll__floor elevator-scroll__floor--bottom" />

        <div className="elevator-car">
          <span className="elevator-car__door elevator-car__door--left" />
          <span className="elevator-car__door elevator-car__door--right" />
        </div>

        <div className="elevator-person">
          <span className="elevator-person__head" />
          <span className="elevator-person__body" />
          <span className="elevator-person__leg elevator-person__leg--one" />
          <span className="elevator-person__leg elevator-person__leg--two" />
        </div>
      </div>
    </aside>
  );
}
