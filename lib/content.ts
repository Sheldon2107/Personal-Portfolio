// ─────────────────────────────────────────────────────────────
// All site copy lives here. Edit freely — the layout doesn't change.
// Anything marked TODO is a placeholder — swap in your real details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sheldon Stephen",
  alias: "Don",
  fileId: "DON-2027-IT",
  role: "Business Analyst Intern",
  org: "Sarawak Information Systems (SAINS)",
  location: "Miri, Sarawak, Malaysia",
  status: "Active — SIIP Internship, May–Dec 2026",
  summary:
    "Final-year Bachelor of IT student at Universiti Teknologi PETRONAS, currently interning as a Business Analyst at SAINS under the Sarawak state government's SIIP programme. I work at the intersection of business analysis and systems prototyping — turning stakeholder requirements into working Next.js prototypes and formal documentation for government digital systems.",
  email: "sheldon_22008944@utp.edu.my",
  phone: "+60 11-2998 0759",
  github: "https://github.com/Sheldon2107", // TODO: confirm/update
  linkedin: "https://linkedin.com/in/sheldon-stephen-525080262", // TODO: confirm/update
  site: "https://donden.my",
  resumeUrl: "/resume.pdf",
  targets: ["Shell", "PETROS", "Petronas"],
};

export const education = {
  institution: "Universiti Teknologi PETRONAS (UTP)",
  degree: "Bachelor of Information Technology",
  period: "2024 — Present",
  graduation: "Expected August 2027",
  location: "Seri Iskandar, Perak, Malaysia",
  cgpa: "3.30",
  deansList: "Dean's List — May 2025 (Year 2, Semester 1)",
  foundation: "Foundation in Information Technology, UTP (2023 — 2024)",
  coursework: [
    "Software Engineering",
    "Web Application Development",
    "Database Systems",
    "Data Science",
    "Statistics and Empirical Method",
    "Internet of Things",
    "Data Communication and Network",
    "Information Assurance and Security",
    "Computer Forensics",
    "Introduction to Oil & Gas Industry",
    "Health, Safety and Environment (HSE)",
  ],
};

export const experience = [
  {
    id: "REC.01",
    role: "Business Analyst Intern",
    org: "Sarawak Information Systems (SAINS)",
    location: "Kuching, Sarawak",
    period: "May 2026 — Dec 2026",
    status: "Active",
    supervisor: "Mr. Lau Sia Beng, Section Head of Business Analysis",
    points: [
      "Built role-based Next.js prototypes for the Electronic Fleet Management System (eFMS), covering five personas — Fleet Officer, HOD, UP Checker, UP Approver/Director, and State Secretary — for Jabatan Premier Sarawak.",
      "Led prototyping and user story documentation for the Secretary and Chairman roles on the eJ3K/eCOMS project, an Electronic JKKK Management System for community-level governance.",
      "Conducted an R&D track on Retrieval-Augmented Generation (RAG), building a local pipeline with ChromaDB and validating retrieval behaviour in AnythingLLM against internal SAINS documents.",
      "Produced access-control documentation, UI critique decks, and presenter scripts sourced from AWS, IBM, Google Cloud, and Databricks reference material.",
    ],
  },
];

// Simple list for now — full case-study write-ups can come later.
// href fields are placeholders until you send the real links.
export const projects = [
  {
    id: "PRJ.00",
    name: "eFMS & eJ3K/eCOMS — Government Digital Systems",
    tag: "Current · Internship",
    description:
      "Ongoing at SAINS: a multi-role Fleet Management System and a JKKK community-governance system for Jabatan Premier Sarawak, prototyped in Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "",
  },
  {
    id: "PRJ.01",
    name: "IoT-Based ISS Monitoring Dashboard",
    tag: "Personal Project",
    description:
      "Real-time space telemetry dashboard processing 1,000+ data points daily from ISS orbital systems, with historical trend visualization over 30+ days of tracking.",
    stack: ["Python", "Flask", "REST APIs", "Leaflet.js", "Chart.js"],
    href: "", // TODO: paste your live project link
  },
  {
    id: "PRJ.02",
    name: "Energy & Carbon Dashboard",
    tag: "Personal Project",
    description:
      "Real-time monitoring dashboard tracking energy consumption, carbon emissions, and operational costs across simulated oil & gas equipment, with minute-level time-series charts.",
    stack: ["Python", "Flask", "Pandas", "Chart.js"],
    href: "", // TODO: paste your GitHub link
  },
  {
    id: "PRJ.03",
    name: "Project Management System",
    tag: "Personal Project",
    description:
      "Web-based application to manage tasks and workflows with database integration and an interactive UI for usability and project visibility.",
    stack: ["C#", "Blazor", "Firebase"],
    href: "", // TODO: paste your GitHub link
  },
  {
    id: "PRJ.04",
    name: "Healthcare Mobile App Prototype",
    tag: "Personal Project",
    description:
      "Healthcare app prototype supporting medication reminders, appointment scheduling, and multi-user access, designed with UI/UX best practices.",
    stack: ["Figma"],
    href: "", // TODO: paste your prototype link
  },
];

export const certifications = [
  {
    id: "CRT.01",
    name: "Responsible AI, Generative AI, Microsoft Copilot",
    issuer: "Microsoft & Pepper Labs",
    date: "2025",
  },
  {
    id: "CRT.02",
    name: "Mastering Data Skills — Power BI Certificate",
    issuer: "Microsoft Skills for Jobs",
    date: "Jan 2026",
  },
  {
    id: "CRT.03",
    name: "Mastering Career Growth with AI",
    issuer: "ChatGPT Certificate",
    date: "Jan 2025",
  },
  {
    id: "CRT.04",
    name: "Oxford Online Placement Test (OOPT) — C2 Proficient",
    issuer: "Oxford",
    date: "",
  },
];

export const skills = {
  "Product & Analysis": [
    "Business analysis",
    "User story writing",
    "Access-control design",
    "Stakeholder documentation",
  ],
  "Engineering": [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  "Applied AI": [
    "RAG pipelines",
    "ChromaDB",
    "AnythingLLM",
    "Prompt engineering (Google AI Studio)",
  ],
};

export const contact = {
  intro:
    "Open to graduate opportunities in Sarawak and Borneo, particularly in business analysis, digital systems, and applied AI. Reach out directly, or send a message below.",
  toEmail: "sheldon_22008944@utp.edu.my",
};
