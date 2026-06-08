"use client";

import { portfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#videos", label: "Videos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#030508]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm tracking-widest text-cyan-400 uppercase">
          {portfolio.site.name.split(" ")[0]}
          <span className="text-white/40">.</span>sys
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs text-cyan-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/20"
        >
          HIRE ME
        </a>
      </div>
    </motion.nav>
  );
}