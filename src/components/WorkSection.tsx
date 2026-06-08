"use client";

import { portfolio } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";
import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FilterBar } from "./FilterBar";
import { Lightbox } from "./Lightbox";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    portfolio.projects.forEach((p) => {
      c[p.category] = (c[p.category] ?? 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? portfolio.projects
        : portfolio.projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs tracking-widest text-cyan-400/60 uppercase">
              Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Selected Work
            </h2>
            <p className="mt-2 max-w-md text-white/50">
              TVAC chambers, embedded hardware, and control software — the full
              stack of aerospace test engineering.
            </p>
          </div>
          <FilterBar
            categories={portfolio.categories}
            active={filter}
            onChange={setFilter}
            counts={counts}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}