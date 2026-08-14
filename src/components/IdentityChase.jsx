import { useEffect, useState } from "react";

const frames = [
  {
    className: "scene-frame--intro",
    normalLine: "Who are you?",
    hiddenLine: ""
  },
  {
    className: "scene-frame--answer",
    normalLine: "",
    hiddenLine: "The only one who can help you!"
  },
  {
    className: "scene-frame--run-one",
    normalLine: "Tell me who you are?!",
    hiddenLine: ""
  },
  {
    className: "scene-frame--run-two",
    normalLine: "Pls, i need someone to help me!",
    hiddenLine: ""
  },
  {
    className: "scene-frame--catch",
    normalLine: "*shocked*",
    hiddenLine: "I am YOU!"
  }
];

export default function IdentityChase() {
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
      const nextFrame = Math.min(
        frames.length - 1,
        Math.floor(progress * frames.length)
      );

      setFrameIndex(nextFrame);
    }

    updateFrame();
    window.addEventListener("scroll", updateFrame, { passive: true });
    window.addEventListener("resize", updateFrame);

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", updateFrame);
    };
  }, []);

  const frame = frames[frameIndex];

  return (
    <aside className="identity-chase" aria-label="Identity chase animation">
      <div className={`identity-chase__stage ${frame.className}`}>
        <div className="identity-chase__track" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="scene-character scene-character--normal">
          {frame.normalLine ? (
            <div className="scene-bubble scene-bubble--normal">{frame.normalLine}</div>
          ) : null}
          <div className="pixel-person pixel-person--normal">
            <span className="pixel-person__head" />
            <span className="pixel-person__body" />
            <span className="pixel-person__leg pixel-person__leg--one" />
            <span className="pixel-person__leg pixel-person__leg--two" />
          </div>
        </div>

        <div className="scene-character scene-character--hidden">
          {frame.hiddenLine ? (
            <div className="scene-bubble scene-bubble--hidden">{frame.hiddenLine}</div>
          ) : null}
          <div className="pixel-person pixel-person--hidden">
            <span className="pixel-person__head" />
            <span className="pixel-person__body" />
            <span className="pixel-person__mask" />
            <span className="pixel-person__leg pixel-person__leg--one" />
            <span className="pixel-person__leg pixel-person__leg--two" />
          </div>
        </div>
      </div>
    </aside>
  );
}
