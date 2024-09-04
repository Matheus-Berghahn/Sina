"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactButton = () => {
  const contactButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Função de animação de escala
    const scaleAnimation = () => {
      if (contactButtonRef.current) {
        gsap.fromTo(contactButtonRef.current,
          { scale: 1 },
          { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.out" }
        );
      }
    };

    // Configura o intervalo para chamar a animação a cada 10 segundos
    const interval = setInterval(scaleAnimation, 10000);

    return () => {
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  return (
    <a
      ref={contactButtonRef} // Adiciona a referência aqui
      href="/"
      className="fixed top-4 right-4 px-6 py-3 text-terciary bg-secondary border border-terciary shadow-custom transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-terciary z-50"
      rel="noopener noreferrer"
    >
      ENTRAR EM CONTATO
    </a>
  );
};

export default ContactButton;
