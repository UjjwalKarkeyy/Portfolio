export default function PixelAvatar({ size = "small" }) {
  return (
    <div className={`pixel-avatar pixel-avatar--${size}`} aria-hidden="true">
      <span className="pixel-avatar__cell pixel-avatar__cell--one" />
      <span className="pixel-avatar__cell pixel-avatar__cell--two" />
      <span className="pixel-avatar__cell pixel-avatar__cell--three" />
      <span className="pixel-avatar__cell pixel-avatar__cell--four" />
    </div>
  );
}
