import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe, TrendingUp, Building2, CheckCircle2, Rocket, Heart, Lightbulb } from "lucide-react";

const stats = [
  { value: "20K+", label: "Students Transformed", sub: "Real careers launched", icon: Users, color: "from-emerald-500 to-green-600" },
  { value: "200+", label: "Industry Partners", sub: "Leading companies", icon: Building2, color: "from-blue-500 to-indigo-600" },
  { value: "98%", label: "Success Rate", sub: "Jobs or internships", icon: TrendingUp, color: "from-purple-500 to-violet-600" },
  { value: "4+", label: "Major Awards", sub: "National Recognition", icon: Award, color: "from-orange-500 to-red-500" },
];

const values = [
  { icon: CheckCircle2, title: "Quality First", description: "We maintain the highest standards in every program and resource we offer to students." },
  { icon: Heart, title: "Student-Centric", description: "Every decision we make puts students' growth and career success at the center." },
  { icon: Lightbulb, title: "Innovation", description: "We continuously evolve our platform to match the latest industry demands and trends." },
  { icon: TrendingUp, title: "Growth Mindset", description: "We foster continuous learning and development, both for our team and our community." },
  { icon: Globe, title: "Global Vision", description: "Connecting Pakistan's talent with worldwide opportunities and industry standards." },
  { icon: Rocket, title: "Impact Driven", description: "Measuring success by the real-world impact we create in students' careers." },
];

const milestones = [
  { year: "2023", title: "Platform Launch", description: "Started with a vision to transform Pakistan's internship landscape with virtual opportunities." },
  { year: "2023", title: "5,000 Students", description: "Reached our first major milestone, proving the demand for quality virtual internships." },
  { year: "2024", title: "Google Cloud Recognition", description: "Recognized for innovative use of technology in education and entrepreneurship." },
  { year: "2025", title: "20,000+ Students", description: "Became South Asia's leading virtual internship platform with 200+ company partners." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero + Stats */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div {...fadeUp}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-foreground leading-tight">
                Our Journey to<br />Impact & <span className="text-gradient">Excellence</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
                From launch in 2023 to South Asia's leading virtual internship platform. We've transformed 20,000+ careers and partnered with 200+ companies in just 2 years.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/#internships" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                  Explore Programs <Rocket className="w-4 h-4" />
                </a>
                <a href="/resources" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-accent transition">
                  Learn More
                </a>
              </div>
              {/* Small badges */}
              <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 20,000+ Students</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 4 Major Awards</span>
              </div>
            </motion.div>

            {/* Right - Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-linear-to-br ${stat.color} rounded-2xl p-6 text-white`}
                >
                  <stat.icon className="w-8 h-8 mb-3 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="font-semibold mt-1">{stat.label}</div>
                  <div className="text-sm opacity-75 mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom stats row */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              🚀 Our Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              The Journey So Far
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Key moments that defined our path to becoming Pakistan's leading internship platform
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 ring-4 ring-background z-10" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{m.year}</span>
                  <h3 className="mt-2 font-heading font-bold text-foreground text-lg">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              💡 What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mt-3 text-muted-foreground">
              Principles that guide every decision and action we take
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}


      <Footer />
    </div>
  );
};

export default About;
