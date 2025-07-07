import { LucideIcon } from "lucide-react";

export type UseCase = {
  // Core properties
  id: string;
  label: string; // Required for navigation and display
  icon: string | React.ReactNode;
  
  // Title and description can be at root or in hero/overview
  title?: string;
  description?: string;
  iconColor?: string;
  
  // Hero section (preferred structure)
  hero?: {
    title?: string;
    subtitle?: string;
  };
  
  // Overview section (preferred structure)
  overview?: {
    title?: string;
    description?: string;
  };
  
  // Features section
  features?: Array<{
    icon?: string | React.ReactNode;
    title?: string;
    description?: string;
  }>;
  featuresTitle?: string;
  featuresSubtitle?: string;
  
  // Benefits section
  benefits?: Array<{
    icon?: string | React.ReactNode;
    title?: string;
    description?: string;
  }>;
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  
  // CTA section
  cta?: {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    primaryButton?: string; // Legacy
    secondaryButton?: string; // Legacy
  };
  
  // Testimonial section
  testimonial?: {
    quote?: string;
    author?: string;
    role?: string;
    company?: string;
  };
  
  // Stats section
  stats?: Array<{
    value?: string;
    label?: string;
  }>;
  
  // For navigation
  href?: string;
  
  status?: "available" | "soon" | "beta";
};
