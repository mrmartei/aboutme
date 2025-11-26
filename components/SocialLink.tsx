import React, { ReactNode } from 'react';

interface SocialLinkProps {
  icon: ReactNode;
  href: string;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white"
    aria-label={label}
  >
    {icon}
  </a>
);