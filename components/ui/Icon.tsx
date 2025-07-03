import { LucideIcon, Gift, DollarSign, Smartphone, Clock, BarChart2, Users, Award, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconName } from "@/lib/generate-use-cases";

const iconMap: Record<IconName, LucideIcon> = {
  'gift': Gift,
  'dollar': DollarSign,
  'smartphone': Smartphone,
  'clock': Clock,
  'bar-chart': BarChart2,
  'users': Users,
  'award': Award,
  'ticket': Ticket,
};

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconName;
  className?: string;
}

export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = iconMap[name] || Gift; // Default to Gift if icon not found
  
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <IconComponent className="w-full h-full" />
    </div>
  );
}
