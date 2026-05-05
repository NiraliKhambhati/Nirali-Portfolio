// ============================================================
//  DATA.JS — Your single config file
//  Edit everything here. No need to touch any other file.
// ============================================================

export const siteConfig = {
  name: "Nirali Khambhati",
  title: "Healthcare Business Analyst",
  tagline: "A healthcare professional who speaks data.",
  email: "drniralikhambhati@gmail.com",
  phone: "+1 (857) 869-8223",
  location: "Boston, MA · Relocating to Canada",
  locationNote: "Open to roles in Canada",
  linkedin: "https://www.linkedin.com/in/niralikhambhati/",
  github: "https://github.com/NiraliKhambhati",
  openToWork: true,
  availableFor: "Open to full-time roles in healthcare analytics & health data strategy in Canada",

  // EmailJS config — fill these after creating free account at emailjs.com
  emailjs: {
    serviceId: "service_4jvkcq9",
    templateId: "template_svblojh",
    publicKey: "N2A7anLdLQ4YvYXce",
  },
};

export const heroData = {
  kicker: "Healthcare Business Analyst · 5+ years · Boston, MA",
  headline1: "A healthcare professional",
  headline2: "who speaks data.",
  lead: `Most analysts understand data. I understand what's behind it — the patients, the clinical decisions, the system pressures. That's what makes the difference. Five years across India, Canada, and the US building a career at the crossroads of healthcare and analytics.`,
  transitionSteps: [
    { icon: "🦷", label: "Dentist",      date: "India · 2011",   phase: "dentist" },
    { icon: "🏥", label: "Health Admin", date: "Canada · 2018",  phase: "healthadmin" },
    { icon: "📊", label: "Data Analyst", date: "USA · Now",      phase: "analyst", active: true },
  ],
  countries: [
    { flag: "🇮🇳", label: "India — Dentistry & Research" },
    { flag: "🇨🇦", label: "Canada — Health Administration" },
    { flag: "🇺🇸", label: "USA — Analytics & MS Informatics", current: true },
  ],
};

export const statsData = [
  { number: "28%", label: "Manual reporting effort reduced" },
  { number: "30%", label: "Faster BigQuery runtime on 10M+ rows" },
  { number: "19%", label: "Performance lift via PDSA cycles" },
  { number: "40→10%", label: "Patient no-show rate reduced" },
];

export const journeyData = [
  {
    phase: "analyst",
    year: "May 2025",
    country: "🇺🇸 Boston",
    role: "Behavioral Health Clinical Quality Audit Analyst",
    org: "Elevance Health",
    desc: "Power BI automation, executive briefings to Massachusetts Dept. of Mental Health, 19% quality improvement through PDSA cycles.",
    active: true,
    badge: "Now",
  },
  {
    phase: "analyst",
    year: "Jun 2024",
    country: "🇺🇸 USA",
    role: "Population Health Analyst Intern",
    org: "Independence Blue Cross",
    desc: "10M+ record BigQuery optimization, HEDIS tracking, health equity analysis, Children's Hospital of Philadelphia partnership.",
    active: false,
  },
  {
    phase: "analyst",
    year: "Sep 2023",
    country: "🇺🇸 USA",
    role: "MS in Health Informatics",
    org: "Northeastern University, Boston",
    desc: "Population health analytics, SQL, advanced data engineering, statistical modeling — the full pivot into data.",
    active: false,
  },
  {
    phase: "healthadmin",
    year: "Jun 2021",
    country: "🇨🇦 Canada",
    role: "Administrative Assistant",
    org: "Leo Giles Dr, Ottawa",
    desc: "Supported clinical procedures, standardized patient intake, managed front-office operations including billing, inventory, scheduling, and insurance claims.",
    active: false,
  },
  {
    phase: "healthadmin",
    year: "Jan 2020",
    country: "🇨🇦 Canada",
    role: "Healthcare Operations",
    org: "Ottawa & Toronto clinics",
    desc: "Cut patient no-show rates from 40% to 10% using EHR data analysis. First real-world impact through data-driven decisions.",
    active: false,
  },
  {
    phase: "healthadmin",
    year: "Sep 2018",
    country: "🇨🇦 Canada",
    role: "PG Diploma, Health Administration",
    org: "St. Lawrence College",
    desc: "Moved to Canada to build operational and administrative expertise — billing, compliance, HIPAA, EHR systems.",
    active: false,
  },
  {
    phase: "analyst",
    year: "Apr 2017",
    country: "🇮🇳 India",
    role: "Research Analyst Intern",
    org: "Dental Clinic, Gujarat",
    desc: "First exposure to patient data analysis and EHR systems — clinic efficiency improved by 10% through statistical analysis.",
    active: false,
  },
  {
    phase: "dentist",
    year: "Aug 2011",
    country: "🇮🇳 India",
    role: "Bachelor of Dental Surgery",
    org: "Gujarat University",
    desc: "Built a clinical foundation understanding patient care, public health, and the human side of healthcare data.",
    active: false,
  },
];

export const skillsData = [
  {
    icon: "📊",
    category: "data",
    title: "Data & Analytics",
    tags: ["SQL", "Python", "R", "SAS", "Advanced Excel", "BigQuery", "ETL Pipelines", "Regression Analysis", "Predictive Modeling", "Hypothesis Testing"],
  },
  {
    icon: "🏥",
    category: "health",
    title: "Healthcare Domain",
    tags: ["HEDIS", "HIPAA", "HL7 / FHIR", "EHR Systems", "ICD-10/CPT", "Medicare/Medicaid", "CMS Rating", "Clinical Quality", "Utilization Management"],
  },
  {
    icon: "📈",
    category: "bi",
    title: "BI & Platforms",
    tags: ["Power BI", "Tableau", "AWS QuickSight", "Oracle", "REDCap", "GitHub", "Lean Six Sigma", "PDSA Cycles", "Agile / JIRA"],
  },
];

export const experienceData = [
  {
    role: "Behavioral Health Clinical Quality Audit Analyst",
    company: "Elevance Health",
    period: "May 2025 – Present",
    location: "Boston, USA",
    current: true,
    bullets: [
      "Validated data integrity in Power BI & QuickSight through a major system transformation, protecting KPI accuracy for state government clients.",
      "Automated reporting workflows, <strong>reducing manual effort by 28%</strong> across weekly–annual cycles.",
      "Delivered executive briefings to the <strong>Massachusetts Department of Mental Health</strong>.",
      "Led PDSA quality cycles resulting in a <strong>19% lift in performance metrics</strong>.",
      "Partnered with data warehouse teams to define business requirements and preserve longitudinal datasets.",
    ],
  },
  {
    role: "Population Health Analyst Intern",
    company: "Independence Blue Cross",
    period: "Jun – Aug 2024",
    location: "Philadelphia, USA",
    current: false,
    bullets: [
      "Optimized BigQuery SQL on <strong>10M+ records</strong>, cutting query time by 30% for real-time HEDIS tracking.",
      "Built population health reports in R & Tableau with health equity and ICD-10/CPT focus.",
      "Partnered with <strong>Children's Hospital of Philadelphia</strong> on blood lead level analysis for children under 3.",
      "Streamlined data pipelines using CTEs, stored procedures, and indexing across 5+ claims sources.",
    ],
  },
  {
    role: "Business Operations Assistant",
    company: "Krest Dental Lab Corp.",
    period: "Mar 2022 – Mar 2023",
    location: "Toronto, Canada",
    current: false,
    bullets: [
      "Managed billing cycles, financial close, and HIPAA-compliant EHR administration.",
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Pro Physio Medicine Center",
    period: "Jan 2020 – May 2021",
    location: "Ottawa, Canada",
    current: false,
    bullets: [
      "Cut patient no-show rate from <strong>40% to 10%</strong> through EHR-driven analysis and targeted reminder strategies.",
    ],
  },
  {
    role: "Research Analyst Intern",
    company: "Dental Clinic",
    period: "Apr 2017 – Aug 2018",
    location: "Gujarat, India",
    current: false,
    bullets: [
      "Conducted statistical analysis of patient EHR data, identifying improvements that enhanced clinic efficiency by <strong>10%</strong>.",
    ],
  },
];

export const projectsData = [
  {
    impact: "100K pts",
    type: "AI Agent · RAG Pipeline",
    title: "Healthcare AI Agent — HEDIS Quality Analytics",
    desc: "AI-powered HEDIS quality analytics system with RAG pipeline and multi-agent orchestration, enabling natural language querying of clinical measure specifications and automated executive report generation across 100,000 patient records.",
    tags: ["Python", "Claude AI", "RAG", "ChromaDB", "Streamlit", "2026"],
    link: "https://nirali-healthcare-ai.streamlit.app",
  },
  {
    impact: "↑ Safety",
    type: "Dashboard · Capstone",
    title: "Hospital Safety Analytics — The Leapfrog Group",
    desc: "Interactive QuickSight dashboards for a real external client, analyzing hospital survey data, patient safety metrics, and staffing patterns. Weekly leadership presentations throughout the engagement.",
    tags: ["QuickSight", "Data Viz", "Client Delivery", "2025"],
    link: null,
  },
  {
    impact: "r = 0.947",
    type: "Statistical Analysis",
    title: "Cognitive Development: IQ & Age Correlation Study",
    desc: "Regression analysis in R establishing a near-perfect correlation between age and IQ — contributing to understanding of cognitive development patterns across age groups.",
    tags: ["R", "Regression", "Statistics", "2024"],
    link: null,
  },
  {
    impact: "20K+ pts",
    type: "Database Design",
    title: "SQL Clinical Trials Database",
    desc: "Full ER model for a clinical trials database using 20,000+ patient records — defined keys, implemented relationships, and generated business insights through custom query design.",
    tags: ["SQL", "ER Modeling", "Database", "2023"],
    link: null,
  },
];

export const volunteerData = [
  { org: "Share Food Program", role: "Community Volunteer", date: "Jun 2024", desc: "Coordinated food distribution to help underserved families access nutritious meals." },
  { org: "Cradles to Crayons", role: "Community Volunteer", date: "Jun 2024", desc: "Sorted and distributed clothing and essentials for children and local families." },
];
