"use client";

import React from 'react';
import Image from 'next/image';
import bgPortfolio from '../../../public/images/port.png';
import bgProducts from '../../../public/images/prod.png';
import Contact from '../components/Contact';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow';
import ContactButton from '../components/ContactButton';
import template1 from '../../../public/images/template_01.jpg';
import template2 from '../../../public/images/template_02.jpg';
import template3 from '../../../public/images/template_03.jpg';
import template4 from '../../../public/images/template_04.jpg';
import template5 from '../../../public/images/template_05.jpg';
import template6 from '../../../public/images/template_06.jpg';
import template7 from '../../../public/images/template_07.jpg';
import template8 from '../../../public/images/template_08.jpg';
import template9 from '../../../public/images/template_09.jpg';
import template10 from '../../../public/images/template_10.jpg';

const LandingPage = () => {
  const portfolioImages = [template1, template2, template3, template4, template5];
  const productImages = [template6, template7, template8, template9, template10];

  return (
    <div className='bg-secondary overflow-hidden'> {/* Adiciona overflow-hidden para garantir que o scroll X não ocorra */}
      <Header />

      {/* Seção de Portfólio */}
      <section className={`relative py-32 bg-secondary text-tertiary`}>
        <div className="absolute top-0 left-10 w-full h-full bg-secondary z-0 pt-20"> {/* Centraliza a imagem corretamente */}
          <Image 
            src={bgPortfolio} 
            alt="Background Portfolio" 
            width={600} 
            className="object-contain" /* Ajuste de alinhamento */
          />
        </div>
        <SlideShow images={portfolioImages} />
      </section>

      {/* Seção de Produtos */}
      <section className={`relative py-32 bg-terciary text-tertiary mt-10`}>
        <div className="absolute top-0 left-10 w-full h-full bg-terciary z-0 pt-20"> {/* Centraliza a imagem corretamente */}
          <Image 
            src={bgProducts} 
            alt="Background Products" 
            width={600} 
            className="object-contain" /* Ajuste de alinhamento */
          />
        </div>
        <SlideShow images={productImages} />
      </section>
      <Contact />
      <ContactButton />
    </div>
  );
};

export default LandingPage;
