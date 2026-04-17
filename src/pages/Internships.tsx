import React from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  Filter,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  Star,
  TrendingUp,
  GraduationCap,
  Globe2,
  Rocket,
  ShieldCheck,
  ChevronDown,
  Quote,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Data",
  "AI/ML",
  "Business",
];
const durations = ["All", "4 Weeks", "8 Weeks", "12 Weeks"];
const types = ["All", "Remote", "Hybrid", "Onsite"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

type Internship = {
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

const internships: Internship[] = [
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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const perks = [
  {
    icon: Award,
    title: "Verified Certificate",
    desc: "Industry-recognized completion certificate.",
  },
  {
    icon: Users,
    title: "Mentor Support",
    desc: "1:1 guidance from working professionals.",
  },
  {
    icon: CheckCircle2,
    title: "Real Projects",
    desc: "Hands-on work that ships to portfolios.",
  },
  {
    icon: Sparkles,
    title: "Career Boost",
    desc: "LinkedIn rewrites and interview prep.",
  },
];

const stats = [
  { icon: GraduationCap, value: "50,000+", label: "Interns Trained" },
  { icon: Globe2, value: "120+", label: "Countries Reached" },
  { icon: Rocket, value: "1,200+", label: "Hiring Partners" },
  { icon: TrendingUp, value: "92%", label: "Career Outcomes" },
];

const journey = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Pick a track and submit a 2-minute application.",
  },
  {
    step: "02",
    title: "Get Onboarded",
    desc: "Receive your starter kit, mentor match and Slack access.",
  },
  {
    step: "03",
    title: "Build Real Projects",
    desc: "Ship weekly deliverables reviewed by industry mentors.",
  },
  {
    step: "04",
    title: "Earn & Showcase",
    desc: "Get a verified certificate, LinkedIn boost and referrals.",
  },
];

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Frontend Intern → SDE @ Devsinc",
    quote:
      "The mentorship was unreal. I went from tutorials to shipping production React in 8 weeks and landed a full-time offer.",
  },
  {
    name: "Daniel Okafor",
    role: "Data Science Intern → Analyst @ Jumia",
    quote:
      "Real datasets, real reviews, real growth. The capstone project is now the centerpiece of my portfolio.",
  },
  {
    name: "Mei Lin",
    role: "UI/UX Intern → Product Designer @ Grab",
    quote:
      "I joined as a hobbyist and graduated with a case study that recruiters actually wanted to talk about.",
  },
];

const partners = [
  "Devsinc",
  "Systems Ltd",
  "Bazaar",
  "Careem",
  "Foodpanda",
  "10Pearls",
  "Daraz",
  "Jazz",
  "VentureDive",
  "Tintash",
];

const faqs = [
  {
    q: "Are these internships paid?",
    a: "Most tracks are unpaid with a verified certificate. Select advanced tracks include performance-based stipends — look for the 'Stipend Eligible' tag on a listing.",
  },
  {
    q: "Who can apply?",
    a: "Anyone aged 16+ with a laptop and stable internet. We welcome students, recent graduates and career switchers from any country.",
  },
  {
    q: "How much time per week is required?",
    a: "Plan for 10–15 hours per week. Live sessions are recorded so you can learn around your schedule.",
  },
  {
    q: "Will I receive a Letter of Recommendation?",
    a: "Top performers receive an LOR signed by their mentor along with referrals to our hiring partner network.",
  },
  {
    q: "What happens after the internship ends?",
    a: "You keep lifetime access to your dashboard, alumni community, project portfolio and our exclusive job board.",
  },
];

const Internships = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [type, setType] = useState("All");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    return internships.filter((i) => {
      const q = query.toLowerCase();
      const matchesQuery =
        i.title.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.skills.some((s) => s.toLowerCase().includes(q));
      const matchesCat = category === "All" || i.category === category;
      const matchesDur = duration === "All" || i.duration === duration;
      const matchesType = type === "All" || i.type === type;
      const matchesLevel = level === "All" || i.level === level;
      return (
        matchesQuery && matchesCat && matchesDur && matchesType && matchesLevel
      );
    });
  }, [query, category, duration, type, level]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28 text-center relative">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-accent px-3 py-1.5 rounded-full"
          >
            <BadgeCheck size={14} /> 2026 · Applications Open
          </motion.span>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
          >
            Find the Internship that{" "}
            <span className="text-gradient">Launches Your Career</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore curated, mentor-led internship tracks across tech, design
            and business. Apply in minutes, learn by doing, earn a verified
            certificate trusted by 1,200+ hiring partners.
          </motion.p>

          {/* Search bar */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 bg-card border border-border rounded-2xl p-2 card-elevated">
              <Search className="ml-3 text-muted-foreground" size={20} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by role, skill or keyword (e.g. React, Figma, SEO)"
                className="border-0 focus-visible:ring-0 shadow-none text-base"
              />
              <Button size="lg" className="rounded-xl">
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              <span className="text-muted-foreground">Trending:</span>
              {["React", "AI/ML", "Figma", "Data Science", "SEO"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="px-2.5 py-1 rounded-full bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-card/40">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="text-center"
            >
              <div className="w-11 h-11 mx-auto rounded-xl bg-accent text-primary flex items-center justify-center mb-3">
                <s.icon size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar filters */}
            <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Filter size={16} /> Filters
              </div>

              <FilterGroup
                label="Category"
                options={categories}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup
                label="Duration"
                options={durations}
                value={duration}
                onChange={setDuration}
              />
              <FilterGroup
                label="Work Type"
                options={types}
                value={type}
                onChange={setType}
              />
              <FilterGroup
                label="Level"
                options={levels}
                value={level}
                onChange={setLevel}
              />

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setCategory("All");
                  setDuration("All");
                  setType("All");
                  setLevel("All");
                  setQuery("");
                }}
              >
                Reset Filters
              </Button>

              <div className="bg-accent/60 border border-border rounded-2xl p-5">
                <ShieldCheck className="text-primary" size={22} />
                <h4 className="mt-3 font-semibold text-sm">
                  Verified by Industry
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Every certificate is signed and verifiable on our public
                  registry — recruiters can confirm in one click.
                </p>
              </div>
            </aside>

            {/* Listings */}
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-2xl font-bold tracking-tight">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "Internship" : "Internships"}{" "}
                  Available
                </h2>
                <span className="text-sm text-muted-foreground">
                  Updated weekly · New cohort starts every Monday
                </span>
              </div>

              {filtered.length === 0 ? (
                <div className="bg-card border border-border rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground">
                    No internships match your filters. Try resetting them.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  {filtered.map((i, idx) => {
                    const fillPct = Math.min(
                      100,
                      Math.round((i.filled / i.slots) * 100),
                    );
                    const seatsLeft = i.slots - i.filled;
                    return (
                      <motion.div
                        key={i.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                        className="group relative bg-card border border-border rounded-2xl p-6 card-elevated flex flex-col hover:-translate-y-0.5 transition-transform"
                      >
                        {i.featured && (
                          <span className="absolute -top-2 right-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded-full">
                            <Star size={10} /> Featured
                          </span>
                        )}

                        <div className="flex items-start justify-between gap-3">
                          <div className="w-11 h-11 rounded-xl bg-accent text-primary flex items-center justify-center">
                            <Briefcase size={20} />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {i.level}
                          </Badge>
                        </div>

                        <h3 className="mt-4 font-semibold text-lg leading-snug">
                          {i.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                          {i.desc}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {i.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Clock size={13} /> {i.duration}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={13} /> {i.type}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={13} /> {i.startDate}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <BadgeCheck size={13} /> {i.stipend}
                          </span>
                        </div>

                        {/* Seats progress */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                            <span>Seats filling fast</span>
                            <span className="font-medium text-foreground">
                              {seatsLeft} of {i.slots} left
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${fillPct}%` }}
                            />
                          </div>
                        </div>

                        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                          <span className="text-xs font-medium text-primary">
                            {i.category}
                          </span>
                          <Button size="sm" className="rounded-lg">
                            Apply Now
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey / How it works */}
      <section className="py-20 border-t border-border bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              {...fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-card px-3 py-1.5 rounded-full"
            >
              How It Works
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
            >
              From Application to Achievement in 4 Steps
            </motion.h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((j, idx) => (
              <motion.div
                key={j.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 card-elevated relative"
              >
                <span className="text-4xl font-bold text-primary">
                  {j.step}
                </span>
                <h3 className="mt-2 font-semibold text-lg">{j.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{j.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              {...fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-accent px-3 py-1.5 rounded-full"
            >
              Success Stories
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
            >
              Hear From Our Alumni
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-muted-foreground"
            >
              Real interns, real outcomes — straight out of our last 6 cohorts.
            </motion.p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 card-elevated flex flex-col"
              >
                <Quote className="text-primary/40" size={28} />
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring partners */}
      <section className="py-16 border-y border-border bg-card/40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h3
              {...fadeUp}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Trusted by hiring teams at
            </motion.h3>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground/80"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <motion.span
              {...fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-accent px-3 py-1.5 rounded-full"
            >
              FAQ
            </motion.span>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-muted-foreground"
            >
              Everything you need to know before you apply.
            </motion.p>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                value={`item-${idx}`}
                className="bg-card border border-border rounded-2xl px-5 card-elevated"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      <Footer />
    </div>
  );
};

const FilterGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
      {label}
    </h4>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            value === opt
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:border-primary hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default Internships;
