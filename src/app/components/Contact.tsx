// src/app/components/Contact.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import Image from 'next/image';
import contato from '../../../public/images/contato.png'; // Importando o logo

interface ContactProps {
  contactInView?: boolean;
}

const Contact: React.FC<ContactProps> = ({ contactInView }) => {
  const h2Ref3 = useRef<HTMLHeadingElement | null>(null);
  const hrRef3 = useRef<HTMLHRElement | null>(null);
  const btnRef = useRef<HTMLHRElement | null>(null);
  const flexDivRef3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contactInView) {
      gsap.fromTo(
        h2Ref3.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        hrRef3.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "power2.out", delay: 0.4 }
      );

      gsap.fromTo(
        flexDivRef3.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(
        btnRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );
    }
  }, [contactInView]);

  return (
    <div className="w-full h-full py-32">
      <div className="text-terciary bg-secondary">
        <div className="container mx-auto">
          <div ref={flexDivRef3} className="flex">
            <div className="w-full flex justify-start items-end">
                  <Image 
                src={contato} 
                alt="contato" 
                width={700} // Ajuste o tamanho conforme necessário
                className="object-contain"
              />
              <p className="text-2xl tracking-wide leading-relaxed max-w-2xl pl-10">
                Entre em contato conosco para discutir suas necessidades de design e desenvolvimento.
                Estamos aqui para ajudar você a transformar suas ideias em realidade.
              </p>
            </div>
          </div>
          <div ref={btnRef} className="flex justify-end pt-16 gap-10 ">
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 text-terciary bg-secondary border border-terciary shadow-custom  transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-terciary "
                >
                  WhatsApp
                </a>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 text-terciary bg-secondary border border-terciary shadow-custom  transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-terciary "
                >
                  Instagram
                </a>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 text-terciary bg-secondary border border-terciary shadow-custom  transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-terciary "
                >
                  E-mail
                </a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
