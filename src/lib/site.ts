// Single source of truth for everything the page renders: identity, links and
// the three content collections (work, skills, timeline). Components stay
// presentational so copy changes never mean touching JSX.

export const site = {
  name: "Abbas Qadir",
  url: "https://abbasq.com",
  email: "contact.abbasq@gmail.com",
  location: "Birmingham, UK",

  role: "Software Developer",
  tagline:
    "BSc Computer Science graduate who ships production software — client sites that run real businesses, and applied machine learning end to end.",

  cv: "/AbbasQ_cv.pdf",

  social: {
    github: "https://github.com/AbbasQadir",
    linkedin: "https://www.linkedin.com/in/abbas-qadir-b37676212/",
  },
} as const;

/* ------------------------------------------------------------------ work -- */

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  /** One line under the heading — the problem, not the feature list. */
  summary: string;
  /** Two or three sentences of substance. */
  body: string;
  /** The single most persuasive fact. Rendered as the card's stat block. */
  outcome: { label: string; value: string };
  stack: string[];
  image?: { src: string; alt: string };
  /** Shown instead of a screenshot for work with no UI to photograph. */
  results?: {
    dataset: string;
    caption: string;
    rows: { name: string; score: number }[];
  };
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "aq-sites",
    title: "AQ Sites",
    kind: "Web studio · founder",
    year: "2024 — present",
    summary:
      "A web design and development studio I run, building and shipping sites for small UK businesses.",
    body:
      "I handle the whole pipeline myself: scoping the job with the client, writing the copy, designing the pages, building them, and setting up domain, hosting and business email. Sites are hand-built rather than assembled in a page builder, so they load fast and cost the client nothing to keep running. Fixed price quoted up front, typically live inside a week.",
    outcome: { label: "Delivery", value: "Live in 7 days, fixed price" },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    image: {
      src: "/work-aqsites.jpg",
      alt: "The AQ Sites homepage, headlined “A website your business can justify, launched in days — not months.”",
    },
    links: [{ label: "aqsites.co.uk", href: "https://aqsites.co.uk", primary: true }],
  },
  {
    slug: "modren-builders",
    title: "Modren Builders",
    kind: "Client project · end to end",
    year: "2025",
    summary:
      "A domestic building contractor in Birmingham with no website and nothing showing up when people searched for them.",
    body:
      "Designed, built and deployed end to end. They had the work and the photography but nowhere to send anyone, so the brief was to make the business look established and make contact effortless. I set the brand direction, built the site by hand, put quote and WhatsApp actions within reach on every screen, and set up their Google Business Profile so they surface in local search and on Maps.",
    outcome: {
      label: "Result",
      value: "One TikTok video drove 3 enquiries in a day",
    },
    stack: ["HTML", "CSS", "JavaScript", "Vercel", "Google Business Profile"],
    image: {
      src: "/work-modren.jpg",
      alt: "The Modren Builders homepage, headlined “Built properly start to finish” beside a photo of a completed extension",
    },
    links: [{ label: "modren.co.uk", href: "https://modren.co.uk", primary: true }],
  },
  {
    slug: "churn-prediction",
    title: "Predicting Customer Churn with Neural Networks",
    kind: "Final year project · applied ML",
    year: "2026",
    summary:
      "Does a neural network actually beat gradient boosting at telecom churn prediction? I tested it properly rather than assuming.",
    body:
      "Benchmarked a Multi-Layer Perceptron against six traditional and advanced models on the Cell2Cell dataset — 51,047 customers, 58 features, 29% churn. Built the full pipeline: imputation, encoding, SelectKBest feature selection, then a controlled comparison of SMOTE, random under-sampling and class weighting for the imbalance. Under-sampling was applied inside an imblearn pipeline at each CV fold to stop leakage inflating the scores. SHAP analysis identified which customer features actually drive the predictions.",
    outcome: {
      label: "Finding",
      value: "Tuned XGBoost beat the MLP — F1 0.489 vs 0.457",
    },
    stack: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    results: {
      dataset: "Cell2Cell · 51,047 customers · 58 features · 29% churn",
      caption: "F1-score on the held-out test set, best of seven models",
      rows: [
        { name: "XGBoost (tuned)", score: 0.4893 },
        { name: "Random Forest (tuned)", score: 0.4874 },
        { name: "MLP (tuned)", score: 0.4571 },
        { name: "Decision Tree (tuned)", score: 0.4437 },
        { name: "Logistic Regression", score: 0.4425 },
      ],
    },
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/AbbasQadir/Individual-Project",
        primary: true,
      },
    ],
  },
];

/* ---------------------------------------------------------------- skills -- */

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Web & frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Spring Boot", "REST APIs"],
  },
  {
    title: "Data & machine learning",
    items: ["Pandas", "NumPy", "scikit-learn", "XGBoost", "SHAP", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tooling & workflow",
    items: [
      "Git & GitHub",
      "Command line",
      "Claude Code",
      "Codex",
      "Vercel",
      "Jupyter",
      "Technical SEO",
    ],
  },
] as const;

/* -------------------------------------------------------------- timeline -- */

export const education = [
  {
    period: "2023 — 2026",
    title: "BSc (Hons) Computer Science",
    org: "Aston University",
    note: "Final year project in applied machine learning. Coursework across algorithms, databases, programming languages and software engineering.",
  },
  {
    period: "2020 — 2022",
    title: "Level 3 Business and Finance",
    org: "Dudley College of Technology",
  },
] as const;

export const experience = [
  {
    period: "2024 — present",
    title: "Founder & Developer",
    org: "AQ Sites",
    note: "Designing, building and deploying websites for small UK businesses. Client-facing from first call through to launch and handover.",
  },
  {
    period: "2023",
    title: "Virtual Developer Programme",
    org: "Bentley Systems × Enactus — iTwin4Good",
    note: "Contributed to ideation, design and implementation of a virtual development project on the iTwin platform.",
  },
] as const;
