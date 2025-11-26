import React from 'react';

interface VentureCardProps {
  title: string;
  desc: string;
  tags: string[];
  color: string;
}

export const VentureCard: React.FC<VentureCardProps> = ({ title, desc, tags, color }) => {
  // Use style for dynamic color to avoid purging issues with template literals if explicit safelisting isn't used
  // Although 'orange' is standard in tailwind, using style ensures it works reliably.
  const accentColor = color === 'orange' ? '#f97316' : color;

  return (
    <div className="h-full flex flex-col justify-between z-10 relative">
      <div>
        <h3 className="text-3xl font-bold mb-2 dark:text-white text-zinc-900">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-lg">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            {tag}
          </span>
        ))}
      </div>
      {/* Decorative Gradient Blob */}
      <div 
        className="absolute -right-10 -bottom-10 w-40 h-40 blur-3xl rounded-full pointer-events-none transition-all opacity-20 group-hover:opacity-30"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
};