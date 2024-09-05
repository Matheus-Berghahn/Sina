"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import landingPageImg from '../../../public/images/landing-pages.jpg';
import bannersImg from '../../../public/images/banners.jpg';

interface TemplatesProps {
  templatesInView: boolean;
}

const Templates: React.FC<TemplatesProps> = ({ templatesInView }) => {
  const bgRef = useRef<HTMLHeadingElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const hrRef = useRef<HTMLHRElement | null>(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (templatesInView) {
      gsap.fromTo(bgRef.current, { y: 500 }, { y: 0, duration: 1, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(h2Ref.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 });
      gsap.fromTo(hrRef.current, { width: "0%" }, { width: "100%", duration: 1, ease: "power2.out", delay: 1.2 });
      gsap.fromTo(leftSideRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out", delay: 1.2 });
      gsap.fromTo(rightSideRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out", delay: 1.2 });
    }
  }, [templatesInView]);

  const handleRedirect = () => {
    router.push('/landing');  // Redireciona para a rota /landing
  };

  return (
    <div className="w-full h-full bg-terciary py-16 md:py-32">
      <div ref={bgRef} className="container mx-auto px-4">
        <div className="text-left mb-8 relative">
          <h2 ref={h2Ref} className="text-2xl md:text-4xl font-bold mb-2 tracking-wide">Templates Prontos</h2>
          <hr ref={hrRef} className="border-secondary border-t-2 w-full mx-auto absolute" />
        </div>

        <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
          <div ref={leftSideRef} className="w-full md:w-1/2 text-left mb-8 md:mb-0 flex flex-col gap-5">
            <h2 className="text-4xl md:text-7xl font-semibold mb-4 tracking-wide">O que são Templates</h2>
            <p className="mb-6 text-justify tracking-wide text-sm md:text-base">
              Templates são modelos pré-projetados que permitem a criação rápida e fácil de páginas e banners profissionais, 
              oferecendo uma solução eficiente para empresas e indivíduos que buscam acelerar o processo de design. 
              Esses templates são criados por especialistas em design, garantindo que cada elemento visual esteja 
              cuidadosamente equilibrado, proporcionando uma estética moderna e funcional.
              <br/><br/>
              Com o uso de templates, você pode evitar o trabalho tedioso de começar do zero, permitindo que você se 
              concentre no conteúdo e na personalização, ao mesmo tempo em que mantém um padrão de qualidade elevado. 
              Eles são altamente customizáveis, permitindo ajustes em cores, fontes, imagens e layouts para se adequarem 
              perfeitamente às necessidades do seu projeto.
              <br/><br/>
              Explore nossos templates disponíveis para Landing Pages e Banners, cada um projetado para atrair e engajar 
              o seu público-alvo de maneira eficaz.
            </p>
            <div className="flex justify-start gap-4">
              <button 
                onClick={handleRedirect} 
                className="inline-block px-6 py-3 text-secondary bg-terciary border border-secondary shadow-custom-2 transition-colors duration-300 ease-in-out hover:bg-terciary hover:text-secondary">
                VER MAIS
              </button>
            </div>
          </div>

          <div ref={rightSideRef} className="w-full md:w-1/2 flex flex-col gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center bg-secondary hover:bg-primary duration-300">
              <img src={landingPageImg.src} alt="Landing Pages" className="w-full md:w-1/2 h-40 md:h-56 object-cover" />
              <div className="w-full md:w-1/2 text-terciary text-4xl md:text-7xl text-center py-4 px-6 rounded">Landing Pages</div>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full justify-center bg-secondary text-terciary hover:bg-primary duration-300">
              <div className="text-4xl md:text-7xl text-center py-4 px-6 rounded w-full md:w-1/2">Banners</div>
              <img src={bannersImg.src} alt="Banners" className="w-full md:w-1/2 h-40 md:h-56 object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Templates;
