import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UrlObject } from 'url';

type Route = string | UrlObject;

interface CTAButtonProps {
  locale: {
    title: string;
    href?: Route;
    variant?: "default" | "outline" | "ghost" | "link";
    className?: string;
    withArrow?: boolean;
  };
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ 
  locale, 
  className = "",
  onClick
}: CTAButtonProps) => {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center"
    >
      <Button
        variant={locale.variant || "default"}
        className={`group relative overflow-hidden px-8 py-6 text-lg font-semibold transition-all duration-300 ${className}`}
        aria-label={locale.title}
        onClick={onClick}
      >
        <span className="relative z-10 flex items-center gap-2">
          {!locale.variant?.includes("outline") && !locale.variant?.includes("ghost") && (
            <Rocket className="w-5 h-5 transition-transform group-hover:rotate-12" />
          )}
          {locale.title}
          {locale.withArrow && (
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          )}
        </span>
        {/* Animated background elements */}
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
        </span>
      </Button>
    </motion.div>
  );

  if (locale.href) {
    return (
      <Link href={locale.href as any} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default CTAButton;
