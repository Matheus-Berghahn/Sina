"use client";
import "./globals.css";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import ContactButton from './components/ContactButton';

const Welcome = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  const handleAnimationAndRedirect = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Navegar para a nova rota após a animação estar completa
        router.push("/home");
      },
    });

    // Animação do shape
    timeline
      .to(overlayRef.current, {
        x: 0,
        width: "100vw",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        arrowRef.current,
        {
          x: "53vw",
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      )
      .to(
        [titleRef.current, subtitleRef.current],
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          x: 350,
          scale:1.4,
          paddingBottom: "40px"
        },
        0
      )
      .to(
        [titleRef.current, subtitleRef.current],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        1 
      )
      .to(
        [textRef1.current, textRef2.current],
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          x: 150,
        },
        0
      )
      .to(
        [textRef1.current, textRef2.current],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        1
      );
  
    timeline.play();
  };

  useEffect(() => {
    // Animação inicial
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -450 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.4 }
    );

    gsap.fromTo(
      [textRef1.current, textRef2.current],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 1 }
    );

    gsap.fromTo(
      arrowRef.current,
      { x: -30 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4 }
    );

    // Timeout para iniciar a animação e redirecionamento após 15 segundos
    const timeoutId = setTimeout(() => {
      handleAnimationAndRedirect();
    }, 15000);

    // Limpar o timeout se o componente desmontar antes de completar
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Lado Esquerdo */}
      <div className="w-1/2 bg-terciary text-secondary flex flex-col justify-between p-10 z-50">
        <div className="z-50">
          <h1 ref={titleRef} className="text-8xl font-bold pt-20">
            BEM-VINDO À SINA.
          </h1>
          <p ref={subtitleRef} className="text-secondary text-3xl mt-4">
            Sua solução para design e desenvolvimento.
          </p>
        </div>
        <div className="flex justify-between h-full items-center pt-32 pr-20 gap-9 z-50">
          <p ref={textRef1} className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing
          </p>
          <p ref={textRef2} className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing
          </p>
        </div>
      </div>

      {/* Lado Direito */}
      <div className="w-1/2 bg-secondary relative z-10 ">
        <img
          src="/images/home.jpg"
          alt="Imagem"
          className="w-full h-full object-cover filter grayscale opacity-50"
        />
      </div>

      {/* Arrow */}
      <div
        ref={arrowRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-50 text-secondary hover:text-primary"
      >
        <div
          onClick={handleAnimationAndRedirect}
          className="bg-terciary py-3 pl-10 pr-5 rounded-r-full hover:translate-x-8 hover:px-8 duration-700 cursor-pointer text-secondary hover:text-primary"
        >
          <ArrowRightIcon className="w-14 h-14" />
        </div>
      </div>

      {/* Overlay de Animação */}
      <div
        ref={overlayRef}
        className="absolute inset-y-0 right-0 bg-terciary z-40"
        style={{ transform: "translateX(-50vw)", width: "50vw" }}
      />
      <ContactButton />
    </div>
  );
};

export default Welcome;
