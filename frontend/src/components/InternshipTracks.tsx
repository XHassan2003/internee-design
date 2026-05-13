import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Palette, Bot, BarChart3, Smartphone } from "lucide-react";

const tracks = [
  { icon: Code, title: "Frontend Development", desc: "Build modern web apps with React & more" },
  { icon: Palette, title: "Graphic Design", desc: "Master UI/UX, branding & visual design" },
  { icon: Bot, title: "AI & Chatbots", desc: "Build AI-powered conversational tools" },
  { icon: BarChart3, title: "Data Science", desc: "Analyze data & build ML models" },
  { icon: Smartphone, title: "App Development", desc: "Create mobile apps with React Native" },
  { icon: Briefcase, title: "Digital Marketing", desc: "Learn SEO, ads & growth strategies" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const InternshipTracks = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Explore Opportunities</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Your Dream Internship is{" "}
            <span className="text-gradient">One Click Away</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose from 10+ in-demand tech tracks and start building real-world skills today.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {tracks.map((track) => (
            <motion.div
              key={track.title}
              variants={item}
              className="group bg-card border border-border rounded-2xl p-6 card-elevated cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <track.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg">{track.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{track.desc}</p>
              <span className="inline-block mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Apply Now →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipTracks;
