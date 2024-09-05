import React from "react";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import logo from '../../../public/images/logo.png'; // Importando o logo

const Header = () => {
  const { ref: sinaRef, inView: sinaVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const { ref: subSinaRef, inView: subSinaVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <div className="relative bg-secondary text-terciary flex flex-col items-center py-24 md:py-24">
      <div ref={sinaRef} className={`duration-1000 ${sinaVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src={logo} 
          alt="Sina Logo" 
          width={700} // Mantém o tamanho original para desktop
          className="object-contain w-[300px] md:w-[700px]" // Reduzido apenas em telas menores
        />
      </div>
      <p ref={subSinaRef} className={`text-sm md:text-lg mt-4 max-w-xs md:max-w-lg text-center tracking-wide delay-300 duration-500 z-50 ${sinaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Transformamos suas ideias em realidade com design inovador e soluções criativas. 
      </p>
    </div>
  );
};

export default Header;
