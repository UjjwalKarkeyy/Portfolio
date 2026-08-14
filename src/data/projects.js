export const projects = [
  {
    slug: "project-title",
    title: "Project Title",
    description:
      "Short description explaining the data question, analysis approach, and useful outcome. Replace this placeholder with a real project when repository details are ready.",
    github: "https://github.com/UjjwalKarkeyy",
    priority: 1,
    genres: ["data-analysis", "learning"],
    tags: ["Python", "SQL", "Pandas"],
    year: "2026",
    featured: true,
    placeholder: true,
    snapshots: [],
    extras: [
      {
        heading: "Replace with project notes",
        bullets: [
          "Add a short heading and as many supporting bullet points as needed.",
          "Snapshots can be added with image or video paths from the public folder."
        ]
      }
    ]
  },
  {
    slug: "dashboard-study",
    title: "Dashboard Study",
    description:
      "Placeholder for a visualization project, such as a Power BI or Excel dashboard that turns raw records into a clear view for comparison and decision-making.",
    github: "https://github.com/UjjwalKarkeyy",
    priority: 2,
    genres: ["dashboard", "visualisation"],
    tags: ["Power BI", "Excel", "Data Visualization"],
    year: "2026",
    featured: true,
    placeholder: true,
    snapshots: [],
    extras: []
  },
  {
    slug: "machine-learning-notebook",
    title: "Machine Learning Notebook",
    description:
      "Placeholder for a learning project focused on preparing data, training a simple model, and communicating what the model can and cannot explain.",
    github: "https://github.com/UjjwalKarkeyy",
    priority: 3,
    genres: ["machine-learning", "learning"],
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    year: "2026",
    featured: false,
    placeholder: true,
    snapshots: [],
    extras: []
  },
  {
    slug: "sales-trend-analysis",
    title: "Sales Trend Analysis",
    description:
      "Placeholder for a business analysis project focused on identifying revenue patterns, seasonal changes, and product-level performance signals.",
    github: "https://github.com/UjjwalKarkeyy",
    priority: 4,
    genres: ["data-analysis", "business"],
    tags: ["Python", "Pandas", "Excel"],
    year: "2026",
    featured: false,
    placeholder: true,
    snapshots: [],
    extras: []
  },
  {
    slug: "portfolio-data-tracker",
    title: "Portfolio Data Tracker",
    description:
      "Placeholder for a small frontend project that organizes project records, filters portfolio data, and keeps future additions easier to maintain.",
    github: "https://github.com/UjjwalKarkeyy",
    priority: 5,
    genres: ["frontend", "portfolio"],
    tags: ["React", "GitHub", "Data Visualization"],
    year: "2026",
    featured: false,
    placeholder: true,
    snapshots: [],
    extras: []
  }
];

// Snapshot example:
// snapshots: [
//   { type: "image", src: "/projects/churn-dashboard.png", alt: "Dashboard overview" },
//   { type: "video", src: "/projects/model-demo.mp4", title: "Notebook walkthrough" }
// ]
//
// Extras example:
// extras: [
//   {
//     heading: "Key decisions",
//     bullets: ["Cleaned missing values before analysis.", "Compared churn by customer segment."]
//   }
// ]
//
// Genre example:
// genres: ["data-analysis", "dashboard"]
// Keep genre values lowercase so future filtering stays consistent.
//
// Homepage priority example:
// priority: 1
// Lower numbers appear first on the home page. The home page shows the first 4.
