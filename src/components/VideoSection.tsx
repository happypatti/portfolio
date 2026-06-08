"use client";

import { getCategoryColor, getCategoryLabel, portfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function VideoSection() {
  if (!portfolio.display.showVideos) return null;

  const videos = portfolio.videos;

  return (
    <section id="videos" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-xs tracking-widest text-violet-400/60 uppercase">
          Footage
        </span>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          In Action
        </h2>
        <p className="mt-2 max-w-md text-white/50">
          Raw footage from chamber operations, software demos, and hardware
          testing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => {
            const color = getCategoryColor(video.category);
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="relative aspect-video bg-black">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                  {video.featured && (
                    <div
                      className="absolute top-3 left-3 rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                      style={{ backgroundColor: `${color}30`, color }}
                    >
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-[10px] text-white/40 uppercase">
                      {getCategoryLabel(video.category)}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-white">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}