"use client";

import { portfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function ContactSection() {
  const { site } = portfolio;

  return (
    <section id="contact" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 font-mono text-[120px] leading-none font-bold text-white/[0.02] select-none">
            SYS
          </div>

          <span className="font-mono text-xs tracking-widest text-cyan-400/60 uppercase">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Let&apos;s build something
            <br />
            <span className="text-cyan-400">that survives vacuum.</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/50">
            Open to roles in aerospace test engineering, embedded systems, and
            hardware/software integration. Interview-ready and lab-tested.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-mono text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              {site.email}
            </a>
            {site.links.github && (
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                GitHub
              </a>
            )}
            {site.links.linkedin && (
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                LinkedIn
              </a>
            )}
            {site.links.resume && (
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                Resume ↓
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}