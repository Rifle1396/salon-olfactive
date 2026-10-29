import React from 'react';

interface InStoreSectionProps {
  onOpenConsultation: () => void;
}

export const InStoreSection: React.FC<InStoreSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="visit" className="relative w-full bg-[#F6F1EA] text-[#14110F] py-24 sm:py-32 border-t border-[#14110F]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-3 text-xs font-sans tracking-[0.2em] uppercase text-[#B85D19] mb-8 sm:mb-12">
          <span className="font-mono text-[11px]">03</span>
          <span className="w-8 h-[1px] bg-[#B85D19]" />
          <span>Boutique</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.12] tracking-tight mb-6">
              Visit the salon on Patriarch Evtimiy Blvd
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#14110F]/80 font-light leading-relaxed mb-8">
              Skin testing only. No samples leave the room without a conversation about concentration, notes, and wear.
            </p>
            <dl className="space-y-4 text-sm font-sans">
              <div className="flex justify-between border-b border-[#14110F]/10 py-3">
                <dt className="text-[#14110F]/55 uppercase tracking-widest text-xs">Address</dt>
                <dd>Patriarch Evtimiy Blvd 45, Sofia</dd>
              </div>
              <div className="flex justify-between border-b border-[#14110F]/10 py-3">
                <dt className="text-[#14110F]/55 uppercase tracking-widest text-xs">Hours</dt>
                <dd>Tue–Fri 12:00–19:30 · Sat 11:30–18:30</dd>
              </div>
              <div className="flex justify-between border-b border-[#14110F]/10 py-3">
                <dt className="text-[#14110F]/55 uppercase tracking-widest text-xs">Phone</dt>
                <dd><a href="tel:+35929804501" className="hover:text-[#B85D19]">+359 2 980 4501</a></dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <button type="button" onClick={onOpenConsultation} className="bg-[#14110F] text-[#F6F1EA] px-6 py-3.5 text-xs uppercase tracking-[0.16em] hover:bg-[#B85D19] transition-colors">
                Private consultation
              </button>
              <a href="https://maps.google.com/?q=Patriarch+Evtimiy+45+Sofia" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] border border-[#14110F]/20 hover:border-[#B85D19] hover:text-[#B85D19] transition-colors">
                Open map
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#1B1715]">
              <img src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=1400&q=80" alt="Salon Olfactive interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
