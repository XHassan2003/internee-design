import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
  Clock,
  Code2,
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  Target,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const features = [
  {
    icon: Target,
    title: "Career-Focused Curriculum",
    desc: "Programs aligned with current industry demands and hiring requirements.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Learn from professionals working at top tech companies worldwide.",
  },
  {
    icon: Briefcase,
    title: "Job Placement Support",
    desc: "Direct connections with hiring partners and interview prep.",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    desc: "Industry-recognized credentials that boost your resume.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Learn at your own pace with live and recorded sessions.",
  },
  {
    icon: Code2,
    title: "Real Projects",
    desc: "Work on actual client projects and build portfolio pieces.",
  },
];

const outcomes = [
  { value: "500+", label: "Graduates Placed" },
  { value: "95%", label: "Job Rate in 3 Months" },
  { value: "2.5x", label: "Avg Salary Growth" },
  { value: "4.9/5", label: "Student Satisfaction" },
];

const tracks = [
  {
    title: "Health Care",
    tag: "Graduate Track",
    desc: "Step into the world where every second counts. Assist in patient care, support medical research, or explore health tech innovation at the heart of impact.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "Engineering",
    tag: "Graduate Track",
    desc: "Where ideas turn into structures, circuits, and code. From civil to software — design, build, and disrupt the future of innovation.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Information Technology",
    tag: "Graduate Track",
    desc: "Dive into the digital battlefield. Software development, cybersecurity, data analytics, cloud — lead the tech revolution.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Business & Marketing",
    tag: "Graduate Track",
    desc: "Master strategy, branding, and growth. Work alongside marketing leaders on real campaigns that move the needle.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    title: "Design & Creative",
    tag: "Graduate Track",
    desc: "Shape experiences with UI/UX, branding, and motion design. Build a portfolio that turns heads in any creative studio.",
    img: "https://plus.unsplash.com/premium_photo-1661284873147-ed893ed67d03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Finance & Analytics",
    tag: "Graduate Track",
    desc: "Decode markets, build models, and master the language of business. Hands-on training with real financial datasets.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
];

const steps = [
  {
    n: "1",
    title: "Choose Your Track",
    desc: "Select from 20+ specialized programs based on your interests and goals.",
  },
  {
    n: "2",
    title: "Learn & Project",
    desc: "Complete structured lessons and work on real-world projects with mentors.",
  },
  {
    n: "3",
    title: "Build Portfolio",
    desc: "Create a professional portfolio showcasing your verified skills.",
  },
  {
    n: "4",
    title: "Land Your Job",
    desc: "Connect with hiring companies and start your career journey.",
  },
];

const faqs = [
  {
    q: "Who can join the graduate programs?",
    a: "Recent graduates and professionals looking to upskill. No prior experience needed — we provide complete training from basics to advanced.",
  },
  {
    q: "What is the program duration?",
    a: "Most programs run for 12 weeks with flexible scheduling, including live sessions and self-paced modules.",
  },
  {
    q: "Do I get a job after completing the program?",
    a: "We provide direct connections with hiring partners, interview prep, and 95% of our graduates land jobs within 3 months.",
  },
  {
    q: "Is the certificate recognized by employers?",
    a: "Yes, our certificates are industry-recognized and have helped hundreds of graduates secure roles at leading companies.",
  },
  {
    q: "What if I need technical support?",
    a: "Our dedicated support team and mentor community are available throughout the program to help you succeed.",
  },
  {
    q: "Can I switch programs after starting?",
    a: "Yes — within the first two weeks you can switch tracks at no extra cost if your interests evolve.",
  },
];

const Programs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden hero-bg">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <GraduationCap size={14} /> Graduate Programs
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Graduate Programs That{" "}
                <span className="text-gradient">Launch Careers</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Explore structured, career‑focused programs designed to build job‑ready skills through real projects, mentorship, and industry expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-lg">
                  Browse Programs <ArrowRight size={16} />
                </Button>
                <Button size="lg" variant="outline" className="rounded-lg">
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Feature cards grid */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 bg-card border border-border rounded-2xl p-6 card-elevated">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Comprehensive Learning
                </p>
                <p className="mt-2 text-3xl font-bold">12 Weeks</p>
                <p className="text-sm text-muted-foreground mt-1">Structured & flexible</p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 card-elevated">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm opacity-90 mt-1">Tracks</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 card-elevated">
                <p className="text-3xl font-bold">80+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="col-span-2 bg-card border border-border rounded-2xl p-6 card-elevated flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">35+</p>
                  <p className="text-sm text-muted-foreground mt-1">Industry Mentors</p>
                </div>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary">
                  <Users size={26} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcome Snapshot */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Outcome Snapshot
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              A Career‑Ready Portfolio
            </h2>
            <p className="mt-3 text-muted-foreground">
              Build verified projects with feedback and present a portfolio recruiters trust.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Rocket, label: "Real‑World Work" },
              { icon: CheckCircle2, label: "Verified Skills" },
              { icon: Award, label: "Industry Certificate" },
              { icon: TrendingUp, label: "Salary Growth" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-3 card-elevated"
              >
                <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center">
                  <item.icon size={20} />
                </div>
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose Our <span className="text-gradient">Graduate Programs?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Designed by industry experts for modern graduates seeking accelerated career growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card border border-border rounded-2xl p-6 card-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcome stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center bg-linear-to-br from-accent to-secondary rounded-2xl p-6 border border-border"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient">{o.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Explore All Categories
            </h2>
            <p className="mt-3 text-muted-foreground">
              Choose from diverse program tracks tailored to your interests.
            </p>
            <Button variant="link" className="mt-2 text-primary">
              View All Programs <ArrowRight size={16} />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-elevated cursor-pointer"
              >
                <div className="aspect-16/10 overflow-hidden bg-muted">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {t.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How programs work */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How Our Programs Work
            </h2>
            <p className="mt-3 text-muted-foreground">
              Simple steps to launch your career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-card border border-border rounded-2xl p-6 card-elevated"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Find answers to common questions about our graduate programs.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-accent/40 transition-colors"
                >
                  <span className="font-semibold">{faq.q}</span>
                  {openFaq === i ? (
                    <Minus size={18} className="text-primary shrink-0" />
                  ) : (
                    <Plus size={18} className="text-primary shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
              Ready? Start Your Graduate Program Today
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Transform Your Career In 12 Weeks
            </h2>
            <p className="mt-5 max-w-2xl mx-auto opacity-90">
              Join 500+ graduates who've successfully launched careers with our programs. Get job‑ready skills, mentorship, and direct placement support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button size="lg" variant="secondary" className="rounded-lg">
                Browse Programs <ArrowRight size={16} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
