"use client";

import { portfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-xs tracking-widest text-orange-400/60 uppercase">
          Capabilities
        </span>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Technical Stack
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {portfolio.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2 font-mono text-sm text-white/70 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {portfolio.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-white/5 p-6"
              style={{ borderColor: `${cat.color}20` }}
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}