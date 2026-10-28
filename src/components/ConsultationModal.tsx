import React, { useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 bg-[#14110F]/70 backdrop-blur-sm" aria-label="Close" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-md mx-auto bg-[#F6F1EA] text-[#14110F] p-6 sm:p-8 shadow-2xl">
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-sm uppercase tracking-widest text-[#14110F]/50 hover:text-[#14110F]">Close</button>
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#B85D19] mb-3">Private consultation</p>
        <h3 className="font-serif text-2xl sm:text-3xl font-light mb-4">Book a testing session</h3>
        <p className="font-sans text-sm text-[#14110F]/75 leading-relaxed mb-6">
          Call the boutique or write to us to reserve a private skin test of the extracts in stock.
        </p>
        <a href="tel:+35929804501" className="block w-full text-center bg-[#14110F] text-[#F6F1EA] py-3.5 text-xs uppercase tracking-[0.16em] hover:bg-[#B85D19] transition-colors">
          +359 2 980 4501
        </a>
        <a href="mailto:contact@salonolfactive.bg" className="block w-full text-center mt-3 py-3 text-xs uppercase tracking-[0.16em] text-[#14110F]/70 hover:text-[#B85D19]">
          contact@salonolfactive.bg
        </a>
      </div>
    </div>
  );
};
