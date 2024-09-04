// src/app/page.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from '../components/Header';
import Services from '../components/Services';
import Templates from '../components/Templates';
import About from '../components/About';
import Contact from '../components/Contact';
import ContactButton from '../components/ContactButton';
import { useInView } from "react-intersection-observer";
import "../globals.css";
import "./styles.css";

export default function Home() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLAnchorElement>(null); // Referência ao botão

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (shapeRef.current) {
      gsap.to(shapeRef.current, {
        y: -window.innerWidth, 
        duration: 1,
        ease: "power2.inOut", 
        onComplete: () => {
          if (shapeRef.current) {
            shapeRef.current.style.display = 'none';
          }
        
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
        }
      });
    }

    // Função de animação de escala
    const scaleAnimation = () => {
      if (contactButtonRef.current) {
        gsap.fromTo(contactButtonRef.current,
          { scale: 1 },
          { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.out" }
        );
      }
    };

    // Configura o intervalo para chamar a animação a cada 20 segundos
    const interval = setInterval(scaleAnimation, 10000);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  const { ref: servicesRef, inView: servicesVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const { ref: templatesRef, inView: templatesInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <>
      <div ref={shapeRef} className='w-full h-full bg-terciary absolute left-0 top-0 z-50'></div>
      <Header />
      <div ref={aboutRef} >
        <About aboutInView={aboutInView} />
      </div>
      <div ref={servicesRef} >
        <Services servicesVisible={servicesVisible} />
      </div>
      <div ref={templatesRef} >
        <Templates templatesInView={templatesInView} />
      </div>
      <div ref={contactRef} >
        <Contact contactInView={contactInView}  />
      </div>

      <ContactButton />
    </>
  );
}
