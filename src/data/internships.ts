export type Internship = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  type: string;
  level: string;
  slots: number;
  filled: number;
  stipend: string;
  startDate: string;
  skills: string[];
  desc: string;
  featured?: boolean;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const raw: Omit<Internship, "slug">[] = [
  {
    title: "Frontend Development",
    category: "Development",
    duration: "8 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 120,
    filled: 84,
    stipend: "Unpaid + Certificate",
    startDate: "May 6, 2026",
    skills: ["React", "TypeScript", "Tailwind"],
    desc: "Build modern, responsive web applications using React, TypeScript and Tailwind CSS.",
    featured: true,
  },
  {
    title: "Graphic Design",
    category: "Design",
    duration: "8 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 80,
    filled: 47,
    stipend: "Unpaid + Certificate",
    startDate: "May 6, 2026",
    skills: ["Figma", "Branding", "Illustrator"],
    desc: "Master Figma, branding fundamentals and visual storytelling for digital products.",
  },
  {
    title: "AI Chatbot Development",
    category: "AI/ML",
    duration: "12 Weeks",
    type: "Remote",
    level: "Intermediate",
    slots: 60,
    filled: 52,
    stipend: "Stipend Eligible",
    startDate: "May 13, 2026",
    skills: ["LLMs", "Python", "LangChain"],
    desc: "Design and deploy intelligent conversational agents with LLMs and modern tooling.",
    featured: true,
  },
  {
    title: "Data Science",
    category: "Data",
    duration: "12 Weeks",
    type: "Remote",
    level: "Intermediate",
    slots: 90,
    filled: 61,
    stipend: "Stipend Eligible",
    startDate: "May 13, 2026",
    skills: ["Python", "Pandas", "ML"],
    desc: "Analyze real datasets, build ML models and present actionable insights.",
  },
  {
    title: "Mobile App Development",
    category: "Development",
    duration: "12 Weeks",
    type: "Hybrid",
    level: "Intermediate",
    slots: 70,
    filled: 39,
    stipend: "Unpaid + Certificate",
    startDate: "May 20, 2026",
    skills: ["React Native", "Expo", "APIs"],
    desc: "Ship cross-platform mobile apps using React Native with real production workflows.",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    duration: "8 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 100,
    filled: 73,
    stipend: "Unpaid + Certificate",
    startDate: "May 6, 2026",
    skills: ["SEO", "Meta Ads", "Content"],
    desc: "Run real campaigns covering SEO, paid ads, content and growth strategy.",
  },
  {
    title: "UI/UX Design",
    category: "Design",
    duration: "8 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 75,
    filled: 58,
    stipend: "Unpaid + Certificate",
    startDate: "May 6, 2026",
    skills: ["Figma", "Research", "Prototyping"],
    desc: "Design user-centered interfaces with research, wireframes and prototyping.",
    featured: true,
  },
  {
    title: "Backend Development",
    category: "Development",
    duration: "12 Weeks",
    type: "Remote",
    level: "Intermediate",
    slots: 65,
    filled: 41,
    stipend: "Stipend Eligible",
    startDate: "May 13, 2026",
    skills: ["Node.js", "Postgres", "REST"],
    desc: "Build scalable APIs, databases and authentication with Node.js and Postgres.",
  },
  {
    title: "Business Development",
    category: "Business",
    duration: "4 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 50,
    filled: 22,
    stipend: "Unpaid + Certificate",
    startDate: "April 29, 2026",
    skills: ["Sales", "GTM", "Outreach"],
    desc: "Learn sales, partnerships and go-to-market execution from active operators.",
  },
  {
    title: "Cybersecurity Essentials",
    category: "Development",
    duration: "12 Weeks",
    type: "Remote",
    level: "Advanced",
    slots: 40,
    filled: 28,
    stipend: "Stipend Eligible",
    startDate: "May 20, 2026",
    skills: ["Networks", "OWASP", "Pentesting"],
    desc: "Hands-on labs covering threat modeling, secure coding and ethical hacking.",
  },
  {
    title: "Content Writing",
    category: "Marketing",
    duration: "4 Weeks",
    type: "Remote",
    level: "Beginner",
    slots: 60,
    filled: 31,
    stipend: "Unpaid + Certificate",
    startDate: "April 29, 2026",
    skills: ["SEO Writing", "Editing", "Research"],
    desc: "Craft long-form articles, landing copy and email campaigns that convert.",
  },
  {
    title: "Product Management",
    category: "Business",
    duration: "8 Weeks",
    type: "Hybrid",
    level: "Intermediate",
    slots: 45,
    filled: 36,
    stipend: "Stipend Eligible",
    startDate: "May 6, 2026",
    skills: ["Roadmaps", "User Research", "Analytics"],
    desc: "Lead a real squad through discovery, prioritization and delivery cycles.",
  },
];

export const internships: Internship[] = raw.map((i) => ({ ...i, slug: slugify(i.title) }));

export const getInternshipBySlug = (slug?: string) =>
  internships.find((i) => i.slug === slug);
