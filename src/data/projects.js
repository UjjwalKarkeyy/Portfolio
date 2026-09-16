export const projects = [
  {
    slug: "saas-prod-analysis-on-cus-feedback",
    title: "SaaS Product Analysis Based on Customer Feedback",
    description:
      "Built an end-to-end customer review analytics pipeline using API data, NLP, SQL, AWS S3, and Power BI to identify product improvement priorities.",
    github: "https://github.com/UjjwalKarkeyy/SaaS_Product_Analysis_Based_on_Customer_Feedback_and_Competitor_Performance",
    priority: 1,
    genres: ["data-analysis", "cloud", "scrap"],
    tags: ["Python", "SQL", "Excel", "PowerBI", "AWS", "GitHub"],
    year: "2026",
    featured: true,
    placeholder: false,
    snapshots: [
      {type: "image", src: "/projects/saas_prod_analysis_on_cus_feedback/competitive_perfor_next_qr_dashboard.png", title: "Competitive Performance and Next Quarter Dashboard"},
      {type: "image", src: "/projects/saas_prod_analysis_on_cus_feedback/customer_exp_&_prod_health_dashboard.png", title: "Customer Experience and Production Health Dashboard"},
      {type: "image", src: "/projects/saas_prod_analysis_on_cus_feedback/data_quality_dashboard.png", title: "Data Quality Dashboard"},
    ],
    extras: [
      {
        heading: "Project Overview",
        bullets: [
          "Collected ~24,000 app reviews using FetchLayer API",
          "Performed sentiment, topic, complaint, and feature-request analysis",
          "Built an AWS S3 + GitHub Actions data pipeline and SQL metric views",
          "Created Power BI dashboards for competitor and product-priority analysis"
        ]
      }
    ]
  },
  {
    slug: "falcon-stack-saas-growth-retention-analysis",
    title: "FalconStack SaaS Growth & Retention Analysis",
    description:
      "Analyzed SaaS growth, revenue, retention, and churn metrics, and developed an XGBoost churn prediction model with Power BI dashboards.",
    github: "https://github.com/UjjwalKarkeyy/Falconstack_SaaS_Growth_Retention",
    priority: 1,
    genres: ["data-analysis", "machine-learning"],
    tags: ["Python", "SQL", "Excel", "PowerBI", "XGBoost"],
    year: "2026",
    featured: true,
    placeholder: false,
    snapshots: [
      {type: "image", src: "/projects/falcon-stack-saas-growth-retention-analysis/churn_diagnosis.png", title: "Churn Diagnosis Dashboard"},
      {type: "image", src: "/projects/falcon-stack-saas-growth-retention-analysis/growth_sustainability_dashboard.png", title: "Growth Sustainability Dashboard"},
      {type: "image", src: "/projects/falcon-stack-saas-growth-retention-analysis/segment_investment.png", title: "Segment Investment Dashboard"},
      {type: "image", src: "/projects/falcon-stack-saas-growth-retention-analysis/data_cleaning_dashboard.png", title: "Data Cleaning Dashboard"},
    ],
    extras: [
      {
        heading: "Project Overview",
        bullets: [
          "Analyzed customer, subscription, usage, support, and churn data",
          "Built SQL metrics for growth, retention, churn, MRR, NRR, GRR, ARPU, and LTV",
          "Created Excel and Power BI dashboards",
          "Built an XGBoost churn model with 82% F1 and FastAPI scoring app"
        ]
      }
    ]
  },
  {
    slug: "hr-data-analysis",
    title: "HR Data Analysis",
    description:
      "Analyzed employee, leave, training, performance, and resignation data using Python, SQL, Excel, and Power BI to uncover workforce and attrition insights.",
    github: "https://github.com/UjjwalKarkeyy/HR_Data_Analysis",
    priority: 1,
    genres: ["data-analysis"],
    tags: ["Python", "SQL", "Excel", "PowerBI"],
    year: "2026",
    featured: true,
    placeholder: false,
    snapshots: [
      {type: "image", src: "/projects/hr-data-analysis/hr_workforce_analytics_dashboard.png", title: "HR Workforce Analytics Dashboard"},
    ],
    extras: [
      {
        heading: "Project Overview",
        bullets: [
          "Cleaned employee, leave, training, performance, and resignation data",
          "Built SQL analyses for attrition, leave cost, onboarding, training, and resignations",
          "Identified key workforce and training insights",
          "Created a Power BI dashboard for HR KPIs and trends"
        ]
      }
    ]
  },
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
