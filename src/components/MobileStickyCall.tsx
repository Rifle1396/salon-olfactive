import React from 'react';

export const MobileStickyCall: React.FC = () => {
  return (
    <aside
      aria-label="Бърза връзка със салона"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14110F]/95 backdrop-blur-md border-t border-[#F6F1EA]/15 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#B85D19]">
            Salon Olfactive
          </span>
          <span className="text-xs font-sans text-[#F6F1EA]/80 truncate max-w-[170px]">
            бул. „Патриарх Евтимий“ 45
          </span>
        </div>
        <a
          href="tel:+35929804501"
          className="flex items-center space-x-2 bg-[#F6F1EA] text-[#14110F] px-4 py-2.5 text-xs font-sans uppercase tracking-[0.12em] font-medium active:bg-[#B85D19] active:text-[#F6F1EA] transition-colors shadow-sm"
        >
          <svg
            className="w-3.5 h-3.5 text-[#B85D19]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Обаждане</span>
        </a>
      </div>
    </aside>
  );
};
