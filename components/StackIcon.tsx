import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StackIconProps {
  icon: LucideIcon;
  name: string;
}

export const StackIcon: React.FC<StackIconProps> = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
      <Icon size={24} />
    </div>
    <span className="text-xs font-mono">{name}</span>
  </div>
);