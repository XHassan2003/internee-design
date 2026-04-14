import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Building2, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "200,000+", label: "Active Students" },
  { icon: Award, value: "12,000+", label: "Courses Completed" },
  { icon: Building2, value: "500+", label: "Partner Companies" },
  { icon: TrendingUp, value: "92.6%", label: "Placement Rate" },
];

const Stats = () => {
  return (
    <section className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={28} className="mx-auto mb-3 text-primary" />
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
