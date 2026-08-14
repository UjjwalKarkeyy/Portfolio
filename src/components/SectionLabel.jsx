export default function SectionLabel({ number, children, meta }) {
  return (
    <div className="section-label">
      <span>
        {number} / {children}
      </span>
      {meta ? <small>{meta}</small> : null}
    </div>
  );
}
