import React from 'react';

export const SelectionStatement: React.FC = () => {
  return (
    <section
      id="selection"
      className="relative w-full bg-[#F6F1EA] text-[#14110F] py-24 sm:py-32 lg:py-40 border-b border-[#14110F]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-3 text-xs font-sans tracking-[0.2em] uppercase text-[#B85D19] mb-8 sm:mb-12">
          <span className="font-mono text-[11px]">01</span>
          <span className="w-8 h-[1px] bg-[#B85D19]" />
          <span>Селекцията</span>
        </div>
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-[1.12] text-[#14110F] tracking-tight">
            Работим единствено с независими парфюмни къщи, за които формулата стои над обема.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-[#14110F]/10">
          <div className="lg:col-span-7">
            <p className="font-sans text-lg sm:text-xl text-[#14110F]/90 leading-relaxed font-light mb-6">
              Подбираме флакони от автори с радикален почерк от Париж, Киото, Градо и Берлин. Всички композиции в салона са чисти парфюмни екстракти с концентрация на маслата между 24% и 35%.
            </p>
            <p className="font-sans text-base sm:text-lg text-[#14110F]/75 leading-relaxed font-light">
              Без маркетингови панели. Без изкуствен баласт. Авторите разполагат с пълна свобода при избора на суровини — от див лаоски бензое до редки реколти от тоскански ирис и брезов катран.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2 lg:pt-0">
            <div className="space-y-4">
              <div className="py-3 border-b border-[#14110F]/10 flex items-baseline justify-between text-sm">
                <span className="text-[#14110F]/60 uppercase tracking-widest text-xs font-sans">Концентрация</span>
                <span className="font-serif text-base text-[#14110F]">Extrait de Parfum (24–35%)</span>
              </div>
              <div className="py-3 border-b border-[#14110F]/10 flex items-baseline justify-between text-sm">
                <span className="text-[#14110F]/60 uppercase tracking-widest text-xs font-sans">Тиражи</span>
                <span className="font-serif text-base text-[#14110F]">Лимитирани партиди от 300 до 1200 бр.</span>
              </div>
              <div className="py-3 border-b border-[#14110F]/10 flex items-baseline justify-between text-sm">
                <span className="text-[#14110F]/60 uppercase tracking-widest text-xs font-sans">Носове</span>
                <span className="font-serif text-base text-[#14110F]">Независими парфюмеристи</span>
              </div>
              <div className="py-3 border-b border-[#14110F]/10 flex items-baseline justify-between text-sm">
                <span className="text-[#14110F]/60 uppercase tracking-widest text-xs font-sans">Тестване</span>
                <span className="font-serif text-base text-[#14110F]">Директно върху кожа в салона</span>
              </div>
            </div>
            <div className="text-xs tracking-wider uppercase text-[#B85D19] pt-2">
              45 Patriarch Evtimiy Blvd · Селекция 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
