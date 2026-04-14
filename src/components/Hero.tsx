import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero-bg overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Pakistan's #1 Virtual Internship Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
              Build Skills.{" "}
              <br className="hidden sm:block" />
              Get Experience.{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Land Your Job.</span>
            </h1>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
              Stop waiting for opportunities. Start building real skills with industry-ready projects. Your dream tech career begins here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Browse Internships <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border bg-background font-semibold px-6 py-3.5 rounded-xl hover:bg-secondary transition-colors text-sm"
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" /> No Experience Required
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" /> Industry-Ready Projects
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional starting their career journey"
                className="rounded-2xl w-full max-w-lg mx-auto"
                width={800}
                height={800}
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-card rounded-xl p-4 card-elevated border border-border"
              >
                <p className="text-2xl font-bold text-foreground">200K+</p>
                <p className="text-xs text-muted-foreground">Students joined</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -top-4 -right-4 lg:-right-8 bg-card rounded-xl p-4 card-elevated border border-border"
              >
                <p className="text-2xl font-bold text-primary">92.6%</p>
                <p className="text-xs text-muted-foreground">Placement rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
