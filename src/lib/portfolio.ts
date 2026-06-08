import portfolioData from "../../content/portfolio.json";
import type { PortfolioConfig } from "@/types/portfolio";

export const portfolio = portfolioData as PortfolioConfig;

export function getCategoryColor(categoryId: string): string {
  return (
    portfolio.categories.find((c) => c.id === categoryId)?.color ?? "#00e5ff"
  );
}

export function getCategoryLabel(categoryId: string): string {
  return (
    portfolio.categories.find((c) => c.id === categoryId)?.label ?? categoryId
  );
}