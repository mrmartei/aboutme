import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Mail, 
  ArrowUpRight, 
  Camera, 
  Video, 
  Moon, 
  Sun,
  MapPin,
  ShoppingBag,
  Zap,
  Clapperboard,
  MonitorPlay,
  Instagram,
  Scissors,
  Sparkles,
  Palette,
  Megaphone,
  Code
} from 'lucide-react';

import { TikTokIcon } from './components/TikTokIcon';
import { SocialLink } from './components/SocialLink';
import { BentoCard } from './components/BentoCard';
import { VentureCard } from './components/VentureCard';
import { StackIcon } from './components/StackIcon';

export default function App() {
  // Changed default state to false for Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch and set initial mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-zinc-950 text-zinc-50' : 'bg-gray-50 text-zinc-900'}`}>
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter dark:text-white text-zinc-900">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
              <Video size={20} />
            </div>
            <span>MrMartei<span className="text-orange-500">.</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://linktr.ee/mr.martei"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Mobile Hero Image (Full Screen Background Style) */}
        {/* We use negative margins to pull it to the top edges of the screen behind the navbar logic */}
        <div className="md:hidden absolute top-0 left-0 w-full h-[85vh] z-0">
           <img 
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KakmdLrVd2NVKkg50S_r-w.png" 
              alt="Mr Martei" 
              className="w-full h-full object-cover object-center"
           />
           {/* Gradient Overlay for Text Readability - Transitions to page background */}
           <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% ${isDarkMode ? 'to-zinc-950' : 'to-gray-50'} to-95%`}></div>
        </div>

        {/* Hero Content */}
        <header className="mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          
          {/* Spacer for mobile to push content down below the face in the image */}
          <div className="md:hidden h-[55vh] w-full"></div>

          {/* Text Content */}
          <div className="flex-1 mt-0 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold mb-6 border border-orange-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              FOUNDER @ LUMEN STUDIOS
            </div>
            
            <p className="text-xl md:text-xl text-zinc-900 dark:text-zinc-100 md:text-zinc-600 md:dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed font-semibold md:font-normal shadow-black/5 md:shadow-none drop-shadow-sm md:drop-shadow-none">
              Hi, I'm Mr Martei. I'm a Tech Content Creator, Graphic Designer, and AI Enthusiast. 
              I help brands with AI advertisements and high-impact storytelling.
            </p>
            
            <div className="flex gap-4">
              <SocialLink href="https://www.youtube.com/@mr.martei" icon={<Youtube size={20} />} label="YouTube" />
              <SocialLink href="https://www.instagram.com/mr.martei/" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://www.tiktok.com/@mr.martei" icon={<TikTokIcon size={20} />} label="TikTok" />
              <SocialLink href="mailto:mrjusticemamah@gmail.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          {/* Desktop Profile Picture (Hidden on Mobile) */}
          <div className="shrink-0 relative w-full md:w-auto hidden md:flex justify-center md:justify-end">
             <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-20 animate-pulse hidden md:block"></div>
             {/* Radial gradient mask for full soft-edge blending */}
             <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full md:rounded-none">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KakmdLrVd2NVKkg50S_r-w.png" 
                  alt="Mr Martei" 
                  className="w-full h-full object-cover [mask-image:radial-gradient(circle_at_center,black_40%,transparent_70%)]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/400/400?grayscale";
                  }}
                />
             </div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 auto-rows-auto md:auto-rows-[180px]">
          
          {/* 1. Featured Venture (Large) */}
          <BentoCard className="md:col-span-2 md:row-span-2 relative group min-h-[280px] md:min-h-0" title="Featured Venture" icon={Clapperboard}>
            <VentureCard 
              title="Lumen Studios"
              desc="A next-gen tech startup focused on Web Dev, Photography, Generative AI, and Graphic Design. We build digital experiences for modern brands."
              tags={['Web Development', 'Generative AI', 'Photography', 'Graphic Design']}
              color="orange"
            />
            <div className="absolute top-6 right-6 hidden md:block">
              <div className="p-2 bg-zinc-900 dark:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <ArrowUpRight size={20} className="text-white dark:text-black" />
              </div>
            </div>
          </BentoCard>

          {/* 2. Latest Content (Video) */}
          <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col" title="Latest Upload" icon={TikTokIcon}>
            <a href="https://www.tiktok.com/@mr.martei/video/7573600817958243597?is_from_webapp=1&sender_device=pc&web_id=7542341471157863942" target="_blank" rel="noopener noreferrer" className="flex-1 min-h-[200px] md:min-h-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative group cursor-pointer block">
              {/* Mock Thumbnail overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end p-4">
                <div className="w-10 h-10 bg-black border border-zinc-800 rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                  <TikTokIcon size={20} className="text-white ml-0.5" />
                </div>
                <span className="text-white font-bold text-lg leading-tight group-hover:underline decoration-pink-500 underline-offset-4">
                  Watch my latest viral video
                </span>
                <span className="text-zinc-300 text-xs mt-2">Check it out on TikTok</span>
              </div>
              {/* Placeholder background representing video thumbnail */}
              <div className="w-full h-full bg-zinc-800 animate-pulse flex items-center justify-center">
                 <TikTokIcon size={48} className="text-zinc-700" />
              </div>
            </a>
          </BentoCard>

          {/* 3. Creator Stack */}
          <BentoCard className="md:col-span-1 md:row-span-2" title="Creator Tools" icon={Zap}>
             <div className="flex flex-col gap-3 md:gap-4 h-full justify-between py-1">
                {/* Photoshop */}
                <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-default">
                   <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-lg bg-[#31A8FF]/20 flex items-center justify-center text-[#31A8FF] font-bold text-sm md:text-base">Ps</div>
                   <div className="min-w-0">
                     <span className="block font-medium text-zinc-900 dark:text-zinc-200 leading-none truncate text-sm md:text-base mb-0.5">Photoshop</span>
                     <span className="text-xs text-zinc-500">Design</span>
                   </div>
                </div>
                {/* CapCut */}
                <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-default">
                   <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white font-bold text-sm md:text-base">Cc</div>
                   <div className="min-w-0">
                     <span className="block font-medium text-zinc-900 dark:text-zinc-200 leading-none truncate text-sm md:text-base mb-0.5">CapCut</span>
                     <span className="text-xs text-zinc-500">Video Editing</span>
                   </div>
                </div>
                {/* AI */}
                <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-default">
                   <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                     <Sparkles size={18} className="md:w-5 md:h-5" />
                   </div>
                   <div className="min-w-0">
                     <span className="block font-medium text-zinc-900 dark:text-zinc-200 leading-none truncate text-sm md:text-base mb-0.5">AI Tools</span>
                     <span className="text-xs text-zinc-500">Generation</span>
                   </div>
                </div>
                {/* Canon */}
                <div className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-default">
                   <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                     <Camera size={18} className="md:w-5 md:h-5" />
                   </div>
                   <div className="min-w-0">
                     <span className="block font-medium text-zinc-900 dark:text-zinc-200 leading-none truncate text-sm md:text-base mb-0.5">Canon 6D</span>
                     <span className="text-xs text-zinc-500">Photography</span>
                   </div>
                </div>
             </div>
          </BentoCard>

          {/* 4. Services */}
          <BentoCard className="md:col-span-1 md:row-span-1 group cursor-pointer min-h-[160px]" title="Services" icon={ShoppingBag}>
             <div className="grid grid-cols-2 gap-2 h-full">
                <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/30">
                  <Palette size={20} className="text-orange-500" />
                  <span className="text-[10px] md:text-xs font-medium text-zinc-700 dark:text-zinc-200 text-center leading-tight">Graphic Design</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/30">
                  <Code size={20} className="text-blue-500" />
                  <span className="text-[10px] md:text-xs font-medium text-zinc-700 dark:text-zinc-200 text-center leading-tight">Web Dev</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/30">
                  <Megaphone size={20} className="text-green-500" />
                  <span className="text-[10px] md:text-xs font-medium text-zinc-700 dark:text-zinc-200 text-center leading-tight">Brand Promo</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/30">
                  <Camera size={20} className="text-purple-500" />
                  <span className="text-[10px] md:text-xs font-medium text-zinc-700 dark:text-zinc-200 text-center leading-tight">Photo</span>
                </div>
             </div>
          </BentoCard>

           {/* 5. Map / Location */}
           <BentoCard className="md:col-span-1 md:row-span-1 min-h-[160px]" title="HQ Location" icon={MapPin}>
             <div className="h-full flex items-center justify-center relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {/* Fallback pattern for map background */}
                <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale"></div>
                <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">Accra, Ghana</span>
                </div>
             </div>
          </BentoCard>

           {/* 6. Quick Contact */}
           <BentoCard className="md:col-span-2 md:row-span-1 group cursor-pointer" title="Get in Touch" icon={Mail}>
              <a href="https://linktr.ee/mr.martei" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 h-full px-2 md:px-4 py-3 md:py-0">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                 </div>
                 <div>
                    <p className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">Let's Create Together</p>
                    <p className="text-sm text-zinc-500">Start a Project with Mr Martei</p>
                 </div>
              </a>
           </BentoCard>

        </div>

        {/* Studio Gear / Tools Section */}
        <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold dark:text-white mb-4">Studio Gear & Tools</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                The hardware and software ecosystem powering my content creation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StackIcon icon={Camera} name="Canon 6D" />
            <StackIcon icon={Palette} name="Photoshop" />
            <StackIcon icon={Sparkles} name="Gemini" />
            <StackIcon icon={Scissors} name="CapCut" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © 2025 Mr Martei. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="https://www.youtube.com/@mr.martei" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">YouTube</a>
            <a href="https://www.instagram.com/mr.martei/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@mr.martei" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">TikTok</a>
            <a href="mailto:mrjusticemamah@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}