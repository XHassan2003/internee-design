import { motion } from "framer-motion";
import { Rocket, BookOpen, Award, Briefcase } from "lucide-react";

const steps = [
  { icon: BookOpen, title: "Sign Up", desc: "Create your free account and choose your track" },
  { icon: Rocket, title: "Start Learning", desc: "Work on real industry projects with mentorship" },
  { icon: Award, title: "Get Certified", desc: "Earn certificates to showcase your skills" },
  { icon: Briefcase, title: "Land a Job", desc: "Get placed with our partner companies" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">How It Works</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            From Student to <span className="text-gradient">Professional</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A simple four-step journey to launch your tech career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon size={28} className="text-primary" />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 text-[10px] font-bold bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-55 mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
