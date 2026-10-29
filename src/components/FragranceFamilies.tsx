import React from 'react';

const families = [
  {
    id: 'woody',
    title: 'Woody',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80',
    copy: 'Cedar, vetiver, and dry resins. Structured bases that stay close to skin.',
  },
  {
    id: 'amber',
    title: 'Amber',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80',
    copy: 'Labdanum, benzoin, and warm balsams. Slow openings, long dry-downs.',
  },
  {
    id: 'leather',
    title: 'Leather',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=80',
    copy: 'Birch tar, suede accords, and smoky facets. Quiet intensity.',
  },
];

export const FragranceFamilies: React.FC = () => {
  return (
    <section id="families" className="relative w-full bg-[#1B1715] text-[#F6F1EA] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-3 text-xs font-sans tracking-[0.2em] uppercase text-[#B85D19] mb-8 sm:mb-12">
          <span className="font-mono text-[11px]">02</span>
          <span className="w-8 h-[1px] bg-[#B85D19]" />
          <span>Families</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.12] tracking-tight mb-12 sm:mb-16 max-w-3xl">
          Three families we return to every season
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {families.map((f) => (
            <article key={f.id} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#14110F] mb-5">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <h3 className="font-serif text-2xl font-light mb-2">{f.title}</h3>
              <p className="font-sans text-sm text-[#F6F1EA]/70 leading-relaxed font-light">{f.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
