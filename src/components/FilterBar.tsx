"use client";

import type { Category } from "@/types/portfolio";
import { motion } from "framer-motion";

interface FilterBarProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}

export function FilterBar({
  categories,
  active,
  onChange,
  counts,
}: FilterBarProps) {
  const allCount = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-wrap gap-2">
      <FilterButton
        label="All"
        count={allCount}
        color="#ffffff"
        active={active === "all"}
        onClick={() => onChange("all")}
      />
      {categories.map((cat) => (
        <FilterButton
          key={cat.id}
          label={cat.label}
          count={counts[cat.id] ?? 0}
          color={cat.color}
          active={active === cat.id}
          onClick={() => onChange(cat.id)}
        />
      ))}
    </div>
  );
}

function FilterButton({
  label,
  count,
  color,
  active,
  onClick,
}: {
  label: string;
  count: number;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-all ${
        active
          ? "text-black"
          : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
      }`}
      style={
        active
          ? { backgroundColor: color, borderColor: color }
          : undefined
      }
    >
      {label}
      <span
        className={`ml-2 ${active ? "text-black/60" : "text-white/30"}`}
      >
        {count}
      </span>
    </button>
  );
}