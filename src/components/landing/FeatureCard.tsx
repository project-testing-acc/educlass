import { motion } from "framer-motion";
import { LucideIcon, Layout, Tool, LineChart } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Tool,
  LineChart,
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;