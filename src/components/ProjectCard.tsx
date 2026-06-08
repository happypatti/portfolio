"use client";

import { getCategoryColor, getCategoryLabel } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const sizeClasses = {
  small: "md:col-span-1",
  medium: "md:col-span-1",
  large: "md:col-span-2",
};

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const color = getCategoryColor(project.category);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] ${sizeClasses[project.size]}`}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/40 to-transparent" />

        {project.featured && (
          <div
            className="absolute top-4 left-4 rounded px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase"
            style={{ backgroundColor: `${color}20`, color }}
          >
            Featured
          </div>
        )}

        {project.video && (
          <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm">
            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">
            {getCategoryLabel(project.category)}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-white/40">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/5 px-2 py-0.5 font-mono text-[10px] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: color }}
      />
    </motion.article>
  );
}