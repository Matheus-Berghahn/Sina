// src/app/components/Services.tsx
import React, { useEffect, useState } from "react";
import { FaRegNewspaper, FaRegFileAlt, FaRegCalendar } from "react-icons/fa";
import { gsap } from 'gsap';
import Image from 'next/image';
import serv from '../../../public/images/serv.png';

interface ServicesProps {
  servicesVisible: boolean;
}

const Services: React.FC<ServicesProps> = ({ servicesVisible }) => {
  const [cardElements, setCardElements] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    if (servicesVisible) {
      cardElements.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: 0.2 + index * 0.2, 
            ease: "power1.out"
          }
        );
      });
    }
  }, [servicesVisible, cardElements]);

  const addCardRef = (element: HTMLDivElement | null) => {
    if (element && !cardElements.includes(element)) {
      setCardElements((prevRefs) => [...prevRefs, element]);
    }
  };

  return (
    <div className="w-full mx-auto py-32 bg-secondary text-secondary relative">
      <div className="absolute top-0 left-0 w-full h-full bg-secondary z-0">
        <Image 
          src={serv} 
          alt="Servicos" 
          width={800} // Ajuste o tamanho conforme necessário
          className="object-contain opacity-10"
        />
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-full h-full gap-20 px-8 md:px-52">
        <div
          ref={addCardRef}
          className="text-secondary bg-terciary px-5 py-10 opacity-0 drop-shadow-xl shadow-almost-black flex flex-col items-center w-full md:w-1/3"
        >
          <FaRegCalendar className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2 tracking-wide">Landing Pages</h3>
          <p className="tracking-wide text-center">Criação de páginas de destino personalizadas para capturar leads e converter visitantes.</p>
        </div>
        <div
          ref={addCardRef}
          className="text-secondary bg-terciary px-5 py-10 opacity-0 drop-shadow-xl shadow-almost-black flex flex-col items-center w-full md:w-1/3"
        >
          <FaRegFileAlt className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2 tracking-wide">Posts</h3>
          <p className="tracking-wide text-center">Desenvolvimento de posts atraentes para redes sociais e campanhas de marketing.</p>
        </div>
        <div
          ref={addCardRef}
          className="text-secondary bg-terciary px-5 py-10 opacity-0 drop-shadow-xl shadow-almost-black flex flex-col items-center w-full md:w-1/3"
        >
          <FaRegNewspaper className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2 tracking-wide">Banners</h3>
          <p className="tracking-wide text-center">Design de banners criativos para promover produtos e serviços com impacto.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
