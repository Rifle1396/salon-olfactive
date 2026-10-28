import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#14110F] text-[#F6F1EA] pt-20 sm:pt-28 pb-28 md:pb-20 border-t border-[#F6F1EA]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F6F1EA]/15">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F6F1EA] mb-4">
                Salon Olfactive
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#F6F1EA]/70 font-light max-w-sm leading-relaxed">
                Бутик за чисти парфюмни екстракти и независими парфюмеристи.
              </p>
            </div>
            <div className="mt-8 text-xs font-mono tracking-widest text-[#B85D19] uppercase">
              София · Бул. „Патриарх Евтимий“ 45
            </div>
          </div>
          <div className="md:col-span-4 space-y-6">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F6F1EA]/50 block mb-2">
                Връзка с бутика
              </span>
              <p className="mb-2">
                <a href="tel:+35929804501" className="font-serif text-2xl text-[#F6F1EA] hover:text-[#B85D19] transition-colors inline-block">
                  +359 2 980 4501
                </a>
              </p>
              <p className="text-xs font-sans text-[#F6F1EA]/60">
                Запитвания за наличност и резервации за тестване
              </p>
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F6F1EA]/50 block mb-2">
                Електронна поща
              </span>
              <a href="mailto:contact@salonolfactive.bg" className="font-sans text-sm text-[#F6F1EA]/90 hover:text-[#B85D19] transition-colors">
                contact@salonolfactive.bg
              </a>
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F6F1EA]/50 block mb-2">
                Визуални хроники
              </span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-2 text-base font-serif text-[#F6F1EA] hover:text-[#B85D19] transition-colors">
                <span>@salon.olfactive</span>
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F6F1EA]/50 block mb-2">
                Режим на работа
              </span>
              <p className="text-xs font-sans text-[#F6F1EA]/75">
                Вт — Пт: 12:00 – 19:30<br />Сб: 11:30 – 18:30
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-sans text-[#F6F1EA]/50 gap-4">
          <p>© 2026 Salon Olfactive. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};
