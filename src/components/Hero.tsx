"use client";

import { portfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { site, display, stats } = portfolio;

  return (
    <section className="relative min-h-screen pt-24 pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-widest text-emerald-400/80 uppercase">
                System Online — {site.location}
              </span>
            </div>

            <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl">
              {site.name.split(" ")[0]}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent">
                {site.name.split(" ").slice(1).join(" ") || "Shalash"}
              </span>
            </h1>

            <p className="mt-4 font-mono text-sm tracking-wide text-cyan-400/70">
              {site.title}
            </p>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="group relative overflow-hidden rounded-lg bg-cyan-500 px-6 py-3 font-mono text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
              </a>
              {site.links.github && (
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  GitHub →
                </a>
              )}
            </div>
          </motion.div>

          {display.showStats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                >
                  <div className="font-mono text-xl font-bold text-cyan-400 md:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-wider text-white/40 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10">
            <Image
              src={display.heroMedia}
              alt="Featured project"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
              <span className="rounded bg-black/60 px-2 py-1 font-mono text-[10px] text-cyan-400 backdrop-blur-sm">
                FEATURED
              </span>
              <span className="font-mono text-[10px] text-white/50">
                TVAC-03 / LIVE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}