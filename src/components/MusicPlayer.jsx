import { useEffect, useRef, useState } from "react";

const musicSource = "/media/music/spencer_yk-little-slimex27s-adventure-151007.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.28;
    audio.loop = true;

    if (!muted) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.pause();
    };
  }, [muted]);

  function toggleMuted() {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.pause();
      audio.muted = true;
      setMuted(true);
    }
  }

  return (
    <aside className="music-player" aria-label="Background music">
      <audio ref={audioRef} src={musicSource} preload="auto" autoPlay loop />
      <div className="music-player__label">NOW PLAYING</div>
      <div className="music-player__title">Little Slime's Adventure</div>
      <div className="music-player__credit">
        Music by{" "}
        <a
          href="https://pixabay.com/users/spencer_yk-36670691/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=151007"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spencer Y.K.
        </a>{" "}
        from{" "}
        <a
          href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=151007"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>
      </div>
      <button className="music-player__button" type="button" onClick={toggleMuted}>
        {muted ? "PLAY" : "MUTE"}
      </button>
    </aside>
  );
}
