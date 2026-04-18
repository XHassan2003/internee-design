import React from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Users,
  TrendingUp,
  Building2,
  Filter,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/jobs";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const categories = ["All", ...Array.from(new Set(jobs.map((j) => j.category)))];
const types = ["All", "Full-time", "Part-time", "Contract", "Internship"];
const workModes = ["All", "Remote", "Onsite", "Hybrid"];
const experienceLevels = ["All", "Entry", "Mid", "Senior"];

const trendingChips = ["React", "Figma", "Python", "Remote", "Internship", "AI/ML"];

const stats = [
  { label: "Active Jobs", value: "1,200+", icon: Briefcase },
  { label: "Hiring Companies", value: "350+", icon: Building2 },
  { label: "Hires Made", value: "8,400+", icon: BadgeCheck },
  { label: "Avg. Response", value: "48 hrs", icon: Clock },
];

const Jobs = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [experience, setExperience] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const q = query.toLowerCase();
      const loc = location.toLowerCase();
      const matchesQ =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.skills.some((s) => s.toLowerCase().includes(q));
      const matchesLoc = !loc || j.location.toLowerCase().includes(loc);
      const matchesCat = category === "All" || j.category === category;
      const matchesType = type === "All" || j.type === type;
      const matchesMode = workMode === "All" || j.workMode === workMode;
      const matchesExp = experience === "All" || j.experience === experience;
      return matchesQ && matchesLoc && matchesCat && matchesType && matchesMode && matchesExp;
    });
  }, [query, location, category, type, workMode, experience]);

  const featured = jobs.filter((j) => j.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
              Find your next role on the{" "}
              <span className="text-gradient">Internee Job Portal</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Curated full-time, contract and internship opportunities from Pakistan&apos;s most ambitious teams.
            </p>

            {/* Search bar */}
            <div className="bg-card border border-border rounded-2xl p-2 shadow-lg flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 flex-1 px-3">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Job title, skill or company"
                  className="border-0 focus-visible:ring-0 shadow-none px-0"
                />
              </div>
              <div className="hidden md:block w-px bg-border" />
              <div className="flex items-center gap-2 flex-1 px-3">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="border-0 focus-visible:ring-0 shadow-none px-0"
                />
              </div>
              <Button size="lg" className="shrink-0 cursor-pointer">
                Search Jobs
              </Button>
            </div>

            {/* Trending chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> Trending:
              </span>
              {trendingChips.map((c) => (
                <button
                  key={c}
                  onClick={() => setQuery(c)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-heading text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="container mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Featured opportunities</h2>
            <p className="text-muted-foreground mt-1">Hand-picked by our hiring team this week.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((j, i) => (
            <motion.div
              key={j.slug}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="w-3 h-3" /> Featured
                </Badge>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                  {j.logo}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{j.company}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {j.location}
                  </div>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {j.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {j.skills.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-md bg-muted">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{j.salary}</span>
                <Link
                  to={`/apply/${j.slug}`}
                  className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Listings with filter sidebar */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="lg:hidden mb-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full gap-2">
                <Filter className="w-4 h-4" /> {showFilters ? "Hide" : "Show"} filters
              </Button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} lg:block space-y-6 rounded-2xl border border-border bg-card p-5`}>
              <FilterGroup
                label="Category"
                options={categories}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup label="Job Type" options={types} value={type} onChange={setType} />
              <FilterGroup label="Work Mode" options={workModes} value={workMode} onChange={setWorkMode} />
              <FilterGroup
                label="Experience"
                options={experienceLevels}
                value={experience}
                onChange={setExperience}
              />
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setCategory("All");
                  setType("All");
                  setWorkMode("All");
                  setExperience("All");
                  setQuery("");
                  setLocation("");
                }}
              >
                Reset filters
              </Button>
            </div>
          </aside>

          {/* Job list */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold">
                {filtered.length} {filtered.length === 1 ? "role" : "roles"} found
              </h2>
              <span className="text-sm text-muted-foreground">Sorted by newest</span>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="text-muted-foreground">No jobs match your filters. Try resetting.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((j, i) => (
                  <motion.div
                    key={j.slug}
                    {...fadeUp}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                    className="group rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold shrink-0">
                        {j.logo}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                            {j.title}
                          </h3>
                          {j.featured && (
                            <Badge variant="secondary" className="gap-1">
                              <Sparkles className="w-3 h-3" /> Featured
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {j.company} · {j.category}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {j.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" /> {j.type}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {j.postedDays}d ago
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" /> {j.applicants} applicants
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {j.workMode}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {j.experience}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {j.skills.map((s) => (
                            <span key={s} className="text-xs px-2 py-1 rounded-md bg-muted">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 md:min-w-140px">
                        <div className="text-sm font-semibold text-right">{j.salary}</div>
                        <Button asChild size="sm">
                          <Link to={`/apply/${j.slug}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/15 via-background to-background p-10 md:p-16">
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">For Employers</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Hire vetted talent from Pakistan&apos;s largest internship community
              </h2>
              <p className="text-muted-foreground">
                Post a role in minutes and reach 50,000+ trained interns and junior professionals across engineering, design, marketing and more.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "Free to post entry-level roles",
                  "Pre-screened candidate pool",
                  "Dedicated hiring success manager",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg">Post a Job</Button>
                <Button size="lg" variant="outline">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
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
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            value === o
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  </div>
);

export default Jobs;
