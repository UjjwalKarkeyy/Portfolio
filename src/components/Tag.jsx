const tagCategories = {
  python: "programming",
  react: "frontend",
  sql: "database",
  pandas: "data",
  numpy: "data",
  excel: "data",
  "power bi": "viz",
  matplotlib: "viz",
  "data visualization": "viz",
  "scikit-learn": "ml",
  "machine learning": "ml"
};

export default function Tag({ children }) {
  const category = tagCategories[String(children).toLowerCase()] || "data";
  return (
    <span className="tag" data-category={category}>
      {children}
    </span>
  );
}
