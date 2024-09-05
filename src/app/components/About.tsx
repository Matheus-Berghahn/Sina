import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import "../../app/globals.css";
import Image from 'next/image';
import image_about from '../../../public/images/image_about.png';

interface AboutProps {
  aboutInView: boolean;
}

const About: React.FC<AboutProps> = ({ aboutInView }) => {
  const pRef2 = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const h2Ref2 = useRef<HTMLHeadingElement | null>(null);
  const hrRef2 = useRef<HTMLHRElement | null>(null);
  const flexDivRef2 = useRef<HTMLDivElement | null>(null);
  const h2AlignRef2 = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (aboutInView) {
      gsap.fromTo(
        h2Ref2.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(
        hrRef2.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "power2.out", delay: 1.1 }
      );

      gsap.fromTo(
        flexDivRef2.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 1.2 }
      );

      gsap.fromTo(
        pRef2.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.1 }
      );

      gsap.fromTo(
        imgRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.2 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 1.4 }
      );
    }
  }, [aboutInView]);

  return (
    <div className="w-full h-full pb-32">
      <div className="text-terciary bg-secondary">
        <div className="container mx-auto px-4"> {/* Padding para mobile sem alterar desktop */}
          <div ref={h2AlignRef2} className="text-left mb-8 duration-700 relative">
            <h2 ref={h2Ref2} className="text-4xl font-bold mb-2 opacity-0 tracking-wide">Sobre</h2> {/* Garantindo que "Sobre" apareça */}
            <hr ref={hrRef2} className="border-terciary border-t-2 mx-auto absolute left-0" /> {/* Linha abaixo do título */}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col items-start w-full md:w-3/6 gap-6 md:gap-14 p-4 md:pl-10">
              <p ref={pRef2} className="text-lg text-justify tracking-wide">
                Aqui está um texto descritivo sobre o que você deseja compartilhar. Este parágrafo pode conter informações sobre a empresa, o projeto ou qualquer outro conteúdo relevante que você queira destacar. Aqui está um texto descritivo sobre o que você deseja compartilhar. Este parágrafo pode conter informações sobre a empresa, o projeto ou qualquer outro conteúdo relevante que você queira destacar.
                Aqui está um texto descritivo sobre o que você deseja compartilhar. Este parágrafo pode conter informações sobre a empresa, o projeto ou qualquer outro conteúdo relevante que você queira destacar. Aqui está um texto descritivo sobre o que você deseja compartilhar. Este parágrafo pode conter informações sobre a empresa, o projeto ou qualquer outro conteúdo relevante que você queira destacar.
              </p>
              <div ref={ctaRef} className="flex justify-center md:justify-start">
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 text-terciary bg-secondary border border-terciary shadow-custom transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-terciary"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="flex w-full md:w-3/6 justify-center md:justify-end mt-6 md:mt-0">
              <Image
                ref={imgRef}
                src={image_about} 
                alt="Sina Logo" 
                width={600} 
                height={400} 
                className="object-contain md:w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
