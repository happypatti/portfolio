export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

export interface DisplayConfig {
  layout: "bento" | "grid" | "list";
  theme: string;
  heroMedia: string;
  showStats: boolean;
  showVideos: boolean;
  animationIntensity: "low" | "medium" | "high";
}

export interface Category {
  id: string;
  label: string;
  description: string;
  color: string;
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  media: ProjectMedia;
  video?: string;
  tags: string[];
  featured: boolean;
  size: "small" | "medium" | "large";
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  category: string;
  featured: boolean;
}

export interface PortfolioConfig {
  site: SiteConfig;
  display: DisplayConfig;
  stats: { label: string; value: string }[];
  categories: Category[];
  projects: Project[];
  videos: VideoItem[];
  skills: string[];
}