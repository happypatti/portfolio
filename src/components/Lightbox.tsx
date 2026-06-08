"use client";

import { getCategoryColor, getCategoryLabel } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  const color = project ? getCategoryColor(project.category) : "#00e5ff";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0e14]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
            >
              ✕
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  muted
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="font-mono text-xs tracking-wider text-white/40 uppercase">
                  {getCategoryLabel(project.category)}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                {project.title}
              </h2>
              <p className="mt-1 font-mono text-sm" style={{ color }}>
                {project.subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-white/60">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 font-mono text-xs"
                    style={{
                      borderColor: `${color}40`,
                      color,
                      backgroundColor: `${color}10`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}