import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title: string;
  // Updated type definition to accept LucideIcon or any component with standard props
  icon?: LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, icon: Icon }) => (
  // Reduced padding from p-4 to p-4 md:p-6 (kept p-4 for mobile as it was already smaller, but ensuring consistency)
  <div className={`p-4 md:p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden relative group transition-all duration-300 hover:shadow-lg dark:hover:shadow-zinc-900/50 flex flex-col ${className}`}>
    <div className="flex items-center gap-2 mb-4 text-zinc-500 dark:text-zinc-400 shrink-0">
      {Icon && <Icon size={18} />}
      <span className="text-xs font-mono uppercase tracking-wider">{title}</span>
    </div>
    <div className="flex-1 min-h-0 relative flex flex-col">
      {children}
    </div>
  </div>
);