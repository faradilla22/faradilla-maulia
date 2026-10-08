export type PortfolioResult = {
  intro: string;
  points: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  tool: "Google Colab" | "Looker Studio" | "Figma" | "MySQL" | "Streamlit" | "Google Drive" | "Canva";
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  accent: "terracotta" | "sage" | "clay" | "ink";
  result: PortfolioResult;
};

// NOTE: Replace `link` values with your real Google Colab / Looker Studio /
// Figma / Drive / Canva URLs. These placeholders point to your portfolio hub.
// `result` is what shows in the RESULT section on the project page:
// `intro` = one lead-in sentence, `points` = the bullet list under it.
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "user-retention-cohort",
    title: "User Retention Cohort Analysis: Online Retail Cohort",
    category: "Data Analysis",
    tool: "Google Colab",
    year: "2026",
    summary:
      "Cohort retention heatmap built with Pandas to reveal how customers stick around over time.",
    description:
      "Case study using a practice online retail dataset (460K+ transactions): cleaned the data and built a monthly cohort analysis in Python to measure how many customers come back after their first purchase.",
    highlights: [
      "Cleaned 460K+ raw transaction records: handled duplicates, missing customer IDs, outliers, and cancelled orders",
      "Built monthly cohort table with Pandas (cohort month, period number, pivot table)",
      "Visualized retention rates in a Seaborn heatmap",
    ],
    stack: ["Python", "Pandas", "Seaborn", "Google Colab"],
    link: "https://colab.research.google.com/drive/1mOzOAeZ2XP4JJ7DyHd-_VITJKCwkjZk_?usp=sharing",
    accent: "terracotta",
    result: {
      intro: "Delivered retention insights from 12 monthly cohorts (Jan–Dec 2010), including:",
      points: [
        "January cohort was the largest (713 customers) with 39% month-2 retention",
        "Retention dropped below 50% after the first month in most cohorts",
        "December showed the lowest retention, despite being a peak shopping season",
      ],
    },
  },
  {
    id: "sql-techcorp",
    title: "SQL Analysis: TechCorp E-Commerce Database ",
    category: "SQL & Databases",
    tool: "MySQL",
    year: "2026",
    summary:
      "6-table relational schema with JOINs, CTEs, and subqueries answering real business questions.",
    description:
      "Case study using a simulated e-commerce dataset: designed a 6-table relational database and wrote SQL queries (JOINs, CTEs, subqueries) to answer business questions on revenue, customer behavior, and product mix.",
    highlights: [
      "Designed 6-table relational database with primary and foreign keys",
      "Wrote 7 queries with JOINs, CTEs, subqueries, and aggregation",
      "Turned query results into 7 business insights",
    ],
    stack: ["SQL", "MySQL Workbench", "ERD"],
    link: "https://canva.link/8anjsopjanqosbd",
    accent: "sage",
    result: {
      intro: "Delivered 7 insights from the simulated dataset, including:",
      points: [
        "op 3 customers by total order value and average order value per customer",
        "Employee with the most resolved support tickets",
        "Product that was never ordered",
        "Price segmentation across categories (Laptop, Smartphone, Accessories)",
      ],
    },
  },
  {
    id: "credit-card-default",
    title: "Credit Card Late Payment Prediction Model",
    category: "Machine Learning",
    tool: "Google Colab",
    year: "2026",
    summary:
      "Compared Logistic Regression, XGBoost & Random Forest with GridSearchCV to pick the best classifier.",
    description:
      "Case study using a practice banking dataset (7.5K customers): built and compared machine learning models to predict customers likely to miss credit card payments, using feature engineering, class-imbalance handling, and hyperparameter tuning.",
    highlights: [
      "Defined the problem and target: predict late payers with accuracy and recall above 60%",
      "Engineered 5 features from quarterly data (mean balance, balance change, active months, product holding change, card tenure)",
      "Built and tuned 3 models (Logistic Regression, XGBoost, Random Forest) with GridSearchCV and recall scoring",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "Google Colab"],
    link: "https://colab.research.google.com/drive/1MXjpRQ3kXYMeGrj_wzeNln3qPmxuM_S7?usp=drive_link",
    accent: "clay",
    result: {
      intro: "Delivered a comparison of 6 models (3 algorithms × 2 review horizons), including:",
      points: [
        "Best model: XGBoost (12-month horizon) with 60.6% recall and 68.6% accuracy on test data, meeting the 60% target",
        "Random Forest had the highest accuracy (about 81%) but only about 34% recall, so it missed many late payers",
        "The 12-month review horizon gave higher recall than the 6-month horizon for all three algorithms",
      ],
    },
  },
  {
    id: "looker-dashboards",
    title: "Retail Transaction Dashboard: Looker Studio",
    category: "BI Dashboards",
    tool: "Looker Studio",
    year: "2026",
    summary:
      "An interactive Google Looker Studio dashboards for retail transactions.",
    description:
      "Case study using a practice retail transaction dataset: built an interactive dashboard in Looker Studio to monitor revenue, profit, discount, and customer performance across payment methods and product categories.",
    highlights: [
      "Built interactive dashboard with 5 KPI scorecards and filters (payment method, category, date range)",
      "Designed 8 visuals: sales trend, donut charts, discount treemap, and product and customer summary tables",
      "Turned dashboard views into insights on payment behavior, category value, and customer concentration",
    ],
    stack: ["Looker Studio", "Data Modeling", "KPI Design"],
    link: "https://datastudio.google.com/reporting/0193955f-159d-4741-a555-2258e7f1f181",
    accent: "terracotta",
    result: {
      intro: "Delivered a one-page dashboard covering 2021–2022, including:",
      points: [
        "Profit margin of about 23% (8.69B revenue, 2.03B profit)",
        "Cash on delivery (COD) made up 67.6% of transactions but only 33.7% of value",
        "Mobiles & Tablets: 20.2% of transactions but 39.8% of value",
        "Two bulk-order customers (about 1,000 units each) contributed about 12% of total revenue",
      ],
    },
  },
  {
    id: "looker-dashboards-2",
    title: "Credit Card Customer Dashboard: Looker Studio",
    category: "BI Dashboards",
    tool: "Looker Studio",
    year: "2026",
    summary:
      "An interactive Google Looker Studio dashboards for credit risk profiles.",
    description:
      "Case study using a practice credit card dataset (10K+ customers): built a 3-section Looker Studio dashboard to analyze customer demographics, revenue contribution, and delinquency risk by occupation, education, and state.",
    highlights: [
      "Built interactive dashboard with 4 KPI scorecards and a state filter",
      "Designed 13 visuals across 3 sections: customer demographic, revenue profile, and risk profile",
      "Turned dashboard views into insights on revenue drivers and delinquency hotspots",
    ],
    stack: ["Looker Studio", "Data Modeling", "Credit Card Risk"],
    link: "https://datastudio.google.com/reporting/34940cb5-9726-4c7a-a2b7-54a4cb289930",
    accent: "terracotta",
    result: {
      intro: "Delivered a one-page dashboard covering 10,108 customers and $44.5M in transaction amount, including:",
      points: [
        "Self-employed: largest customer group and highest annual fee, but lowest transaction volume per customer",
        "Businessman: highest transaction volume and interest earned per customer",
        "Bills: largest expense type, ahead of Entertainment and Fuel",
        "Delinquency hotspots: Pennsylvania (22.22%) by state and Self-employed with Doctorate (11.45%) by segment",
      ],
    },
  },
  {
    id: "swimming-thesis",
    title: "Swimming Talent Scouting Classification System — Hybrid BP + GA",
    category: "Thesis · ANN",
    tool: "Streamlit",
    year: "2025 – 2026",
    summary:
      "Improved swimming talent classification accuracy 82% → 92% using Backpropagation + Genetic Algorithm feature selection.",
    description:
      "Thesis research on classifying swimming talent (long vs short distance) from 100 athlete records of two swimming clubs: built a Hybrid Backpropagation–Genetic Algorithm model that selects optimal features, and implemented it as a Streamlit web app.",
    highlights: [
      "Built Backpropagation neural network from scratch and Genetic Algorithm for feature selection (binary chromosome, roulette wheel selection, elitism)",
      "Tuned 7 parameters with One Factor at a Time (OFAT), averaging the five best runs for stability",
      "Developed Streamlit web app for data upload, preprocessing, training, and evaluation",
    ],
    stack: ["Python", "Backpropagation", "Genetic Algorithms"],
    link: "https://drive.google.com/drive/folders/1OPIuV51-YCYjbqXmOXT4h589hAs7gz6Q?usp=sharing",
    accent: "clay",
    result: {
      intro: "Delivered a hybrid model that outperformed the baseline, including:",
      points: [
        "Accuracy improved from 82% (Backpropagation) to 92% (Hybrid BP-GA)",
        "Hybrid model reached 84% precision, 100% recall, and 91.11% F1-score",
        "Features reduced from 12 to 6 while keeping strong performance",
        "Best configuration: population 40, 10 generations, mutation rate 0.02, crossover rate 0.5",
      ],
    },
  },
  {
    id: "heart-failure",
    title: "Heart Failure Mortality Prediction: Decision Tree",
    category: "Data Mining",
    tool: "Streamlit",
    year: "2025",
    summary:
      "92.42% accuracy heart failure risk predictor deployed to an interactive Streamlit web app.",
    description:
      "Data mining group project using a public heart failure clinical dataset: cleaned the data and built a Decision Tree classifier to predict patient mortality (DEATH_EVENT) from 6 clinical features, with feature importance analysis.",
    highlights: [
      "Cleaned dataset from 5,000 to 1,320 unique records and selected 6 clinical features",
      "Built Decision Tree classifier in scikit-learn with a 90:10 train-test split and visualized the tree",
      "Evaluated with accuracy, precision, recall, F1-score, confusion matrix, and feature importance",
    ],
    stack: ["Python", "scikit-learn", "Streamlit"],
    link: "https://colab.research.google.com/drive/1JHF_MBhRpgzRAxdredVzsJSUDOTQN1d_?usp=sharing",
    accent: "sage",
    result: {
      intro: "Delivered a classification model with strong test performance, including:",
      points: [
        "92.4% accuracy, with 89.4% precision, recall, and F1-score on 132 test records",
        "Only 10 of 132 patients misclassified (5 false positives, 5 false negatives)",
        "Serum creatinine (29.7%) and age (21.9%) were the top predictors, followed by ejection fraction (18.9%)",
        "Prediction function that classifies new patient data",
      ],
    },
  },
  {
    id: "duitzup-uiux",
    title: "DuitZup: Personal Finance App UI/UX Design",
    category: "UI/UX Design",
    tool: "Figma",
    year: "2024",
    summary:
      "End-to-end Figma design (83/100 GDSC assessment) for a personal finance & budgeting app.",
    description:
      "Final project at GDSC Unsri (UI/UX Division, 2023/2024): designed a personal finance app prototype in Figma using the Design Thinking process, from user research and persona to high-fidelity design and usability testing.",
    highlights: [
      "Conducted user research (20-respondent survey) and defined a user persona and problem statement",
      "Mapped user flows in Whimsical and built a design system (typography, color palette, components) in Figma",
      "Designed low- to high-fidelity screens and ran usability testing with 8 users",
    ],
    stack: ["Figma", "Design Thinking", "Prototyping"],
    link: "https://www.figma.com/proto/KKVDFU745OO5eW9rmU816N/Design-Aplikasi?page-id=288%3A772&node-id=288-773&p=f&viewport=282%2C249%2C0.02&t=CfylWLhWaLzKWt3H-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=288%3A773",
    accent: "clay",
    result: {
      intro: "Delivered a complete app prototype, including:",
      points: [
        "Core features: expense and income tracking, savings goals, bill and spending reminders, personalized suggestions, and investment tracking",
        "87.5% of usability ratings were 4 or 5 out of 5 (average about 4.2/5, n = 8)",
        "Highest rated: setting and monitoring savings goals (4.6/5)",
        "Area to improve: expense categories (3.8/5, lowest score)",
        "Scored 83/100 in the official GDSC Unsri final project assessment, with a Certificate of Appreciation as UI/UX Member",
      ],
    },
  },
];

export const CERTIFICATES_LINK = "https://bit.ly/Sertifikat_Faradilla-Maulia";
export const PORTFOLIO_HUB = "https://bit.ly/Portofolio_Faradilla-Maulia";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  tags: string[];
};

// NOTE: Replace `link` values with the real URLs to each certificate.
// `id` is the slug; `tags` is only used as labels on the card.
export const CERTIFICATES: Certificate[] = [
  {
    id: "microsoft-elevate",
    title: "Applying Data Science with Microsoft Fabric and Building a Generative AI Application with Microsoft Azure",
    issuer: "Dicoding Indonesia × Microsoft Elevate",
    date: "July 2026 - Oct 2026",
    link: "https://www.dicoding.com/elevate/certificates/PREU4Q44M4",
    tags: ["Microsoft Fabric", "Microsoft Azure", "Generative AI"],
  },
  {
    id: "microsoft-azure",
    title: "Building a Generative AI Application with Microsoft Azure",
    issuer: "Dicoding Indonesia × Microsoft Elevate",
    date: "July 2026 - Oct 2026",
    link: "https://www.dicoding.com/certificates/JMZVOY9WRXN9",
    tags: ["Azure AI Foundry", "Generative AI", "Large Language Model (LLM)"],
  },
  {
    id: "microsoft-fabric",
    title: "Learn How to Apply Data Science with Microsoft Fabric",
    issuer: "Dicoding Indonesia × Microsoft Elevate",
    date: "July 2026 - Oct 2026",
    link: "https://www.dicoding.com/certificates/ERZRLR8GMZYV",
    tags: ["Microsoft Fabric", "Data Science", "Machine Learning"],
  },
  {
    id: "linkedin-generative-ai",
    title: "What is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "July 2026",
    link: "https://www.linkedin.com/learning/certificates/939d575dedce1bb9a29d0e7f64d79c035fb81994e2ebc480927a7e22e12bf2cf?trk=share_certificate",
    tags: ["Generative AI Tools", "Artificial Intelligence (AI)", "Generative AI"],
  },
  {
    id: "ai-learning-path",
    title: "Artificial Intelligence Laerning Path Course",
    issuer: "MySkill",
    date: "July 2026",
    link: "https://drive.google.com/file/d/1nDqbN4wIhcVjZGHRMNIAewY2qo6Oaugv/view?usp=sharing",
    tags: ["AI", "AI Agents", "Vibe Coding"],
  },
  {
    id: "excel-intermediate",
    title: "Microsoft Excel Intermediate E-Learning Course",
    issuer: "MySkill",
    date: " July 2026",
    link: "https://drive.google.com/file/d/1NiBesF3KGUJ3nYHx-sTVQhSEV4OBaJaT/view?usp=sharing",
    tags: ["Microsoft Excel", "Data Analysis", "Data Visualization"],
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis E-Learning Course",
    issuer: "MySkill",
    date: "July 2026",
    link: "https://drive.google.com/file/d/1vRTWIik1X4j2CY4BQwrAJvl0lycD6nDJ/view?usp=sharing",
    tags: ["Python", "Statistics", "Market Basket Analysis"],
  },
  {
    id: "sql-data-analysis",
    title: "SQL for Data Analysis E-Learning Course",
    issuer: "MySkill",
    date: "July 2026",
    link: "https://drive.google.com/file/d/1B4pqejvvfbyh9xj6-uUVSqwVo-X6DJoY/view?usp=sharing",
    tags: ["SQL", "MySQL", "Workbench"],
  },
  {
    id: "power-bi",
    title: "Microsoft Power BI E-Learning Course",
    issuer: "MySkill",
    date: "June 2026",
    link: "https://drive.google.com/file/d/1LRthThmMnQEYdldaKxwWDVjzWypiN-cg/view?usp=sharing",
    tags: ["Power BI", "Business Intelligence (BI)"],
  },
  {
    id: "google-data-studio",
    title: "Google Looker Studio E-Learning Course",
    issuer: "MySkill",
    date: "June 2026",
    link: "https://drive.google.com/file/d/1klMUSkvogzVxHYUjaoLKpuRmNt0Xh808/view?usp=sharing",
    tags: ["Google Data Studio", "Data Visualization", "Data Analysis"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis E-Learning Course",
    issuer: "MySkill",
    date: "June 2026",
    link: "https://drive.google.com/file/d/1q7Ea4a97A-3GS7Aixc58NiOxAL6IX43H/view?usp=sharing",
    tags: ["Python", "Prediction", "Clustering"],
  },
  {
    id: "basic-data",
    title: "Basic Data E-Learning Course",
    issuer: "MySkill",
    date: " June 2026",
    link: "https://drive.google.com/file/d/1OVX31XDOy9Jx5XuSU8ZnAJpNxRLuiebv/view?usp=sharing",
    tags: ["Data Analysis"],
  },
];
