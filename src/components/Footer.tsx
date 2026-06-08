import { portfolio } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-mono text-xs text-white/30">
          © {new Date().getFullYear()} {portfolio.site.name} — Engineered for
          vacuum.
        </span>
        <span className="font-mono text-[10px] text-white/20">
          Edit content/portfolio.json to customize this site
        </span>
      </div>
    </footer>
  );
}