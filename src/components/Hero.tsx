import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface HeroProps {
  onVisitClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onVisitClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 70]);
  const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicEase } },
  };
  const handleScrollToVisit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onVisitClick) onVisitClick();
    else document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header ref={heroRef} className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#14110F] text-[#F6F1EA]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div style={{ y: imageY }} className="relative w-full h-[115%] -top-[7%]">
          <img src="https://images.unsplash.com/photo-1595425970375-c3146150c2e2?auto=format&fit=crop&w=1800&q=80" alt="Salon Olfactive atelier" className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-[#14110F]/45 to-[#14110F]/70" />
      </div>
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 flex items-center justify-between text-xs sm:text-sm tracking-[0.16em] uppercase">
        <div className="flex items-center space-x-3 text-[#F6F1EA]/80 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
          <span>Sofia</span>
        </div>
        <div className="hidden sm:flex items-center space-x-8 text-[#F6F1EA]/70">
          <a href="#selection" className="hover:text-[#F6F1EA] transition-colors">Selection</a>
          <a href="#families" className="hover:text-[#F6F1EA] transition-colors">Families</a>
          <a href="#visit" className="hover:text-[#F6F1EA] transition-colors">Boutique</a>
        </div>
      </nav>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-auto py-16 sm:py-24">
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-sans tracking-[0.24em] uppercase text-[#B85D19]">Boutique for niche perfume</p>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.02em] leading-[0.92] text-[#F6F1EA]">Salon Olfactive</h1>
        </motion.div>
        <motion.div variants={itemVariants} className="max-w-2xl mb-10 sm:mb-14">
          <p className="font-sans text-base sm:text-xl lg:text-2xl font-light text-[#F6F1EA]/85 leading-relaxed">Rare extracts, independent noses, and slow perfume.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="pt-2 sm:pt-4 border-t border-[#F6F1EA]/20 max-w-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 text-sm sm:text-base text-[#F6F1EA]/80 font-sans tracking-wide">
            <span className="text-[#B85D19] font-serif italic text-lg mr-1">No</span>
            <span>Patriarch Evtimiy Blvd 45, Sofia</span>
          </div>
          <a href="#visit" onClick={handleScrollToVisit} className="group inline-flex items-center justify-between sm:justify-start space-x-4 bg-[#F6F1EA] text-[#14110F] px-6 py-3.5 text-xs sm:text-sm font-sans uppercase tracking-[0.16em] hover:bg-[#B85D19] hover:text-[#F6F1EA] transition-colors duration-300">
            <span>Visit us</span>
          </a>
        </motion.div>
      </motion.div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 flex items-center justify-between text-[11px] font-sans tracking-[0.18em] uppercase text-[#F6F1EA]/50">
        <span>Limited editions</span>
        <span className="hidden sm:inline">12:00 – 19:30</span>
      </div>
    </header>
  );
};
