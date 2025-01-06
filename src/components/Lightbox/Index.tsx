import { useState } from 'react';

type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

const Index = ({ images, currentIndex, onClose, onNext, onPrevious }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="relative">
            <button onClick={onClose} className="absolute top-0 right-0 m-4 text-white text-lg font-semibold focus:outline-none">&times;</button>
            <img src={images[currentIndex]} className="mx-auto max-w-full max-h-screen" />
          </div>
        </div>
      </div>
      {/* Adicione os controles de navegação aqui */}
    </div>
  );
};

export default Index;
