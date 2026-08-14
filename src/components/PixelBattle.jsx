import { useEffect, useState } from "react";

const frames = [
  "battle-frame--start",
  "battle-frame--monster-one",
  "battle-frame--monster-two",
  "battle-frame--monster-three",
  "battle-frame--victory"
];

export default function PixelBattle() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    function updateFrame() {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setFrameIndex(Math.min(frames.length - 1, Math.floor(progress * frames.length)));
    }

    updateFrame();
    window.addEventListener("scroll", updateFrame, { passive: true });
    window.addEventListener("resize", updateFrame);

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", updateFrame);
    };
  }, []);

  return (
    <aside className="pixel-battle" aria-label="Pixel battle animation">
      <div className={`pixel-battle__stage ${frames[frameIndex]}`}>
        <div className="battle-track" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="battle-hero" aria-hidden="true">
          <span className="battle-hero__head" />
          <span className="battle-hero__body" />
          <span className="battle-hero__gun" />
          <span className="battle-hero__leg battle-hero__leg--one" />
          <span className="battle-hero__leg battle-hero__leg--two" />
        </div>

        <span className="battle-shot battle-shot--one" aria-hidden="true" />
        <span className="battle-shot battle-shot--two" aria-hidden="true" />
        <span className="battle-shot battle-shot--three" aria-hidden="true" />

        <div className="battle-monster battle-monster--one" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="battle-monster battle-monster--two" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="battle-monster battle-monster--three" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="battle-victory">Victory</div>
      </div>
    </aside>
  );
}
