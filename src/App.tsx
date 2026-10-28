import { useState } from 'react';
import { Hero } from './components/Hero';
import { SelectionStatement } from './components/SelectionStatement';
import { FragranceFamilies } from './components/FragranceFamilies';
import { InStoreSection } from './components/InStoreSection';
import { Footer } from './components/Footer';
import { MobileStickyCall } from './components/MobileStickyCall';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#14110F] flex flex-col selection:bg-[#B85D19] selection:text-[#F6F1EA]">
      <Hero />
      <SelectionStatement />
      <FragranceFamilies />
      <InStoreSection onOpenConsultation={handleOpenConsultation} />
      <Footer />
      <MobileStickyCall />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
