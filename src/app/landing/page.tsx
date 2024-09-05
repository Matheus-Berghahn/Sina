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
    <div className='bg-secondary overflow-hidden'>
      <Header />

      {/* Seção de Portfólio */}
      <section className={`relative py-20 md:py-32 bg-secondary text-tertiary`}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-full bg-secondary z-0 pt-12 md:pt-20">
          <Image 
            src={bgPortfolio} 
            alt="Background Portfolio" 
            width={700} 
            className="object-contain" 
          />
        </div>
        <div className="relative z-10 px-4 sm:px-8 pt-10 md:pt-20">
          <SlideShow images={portfolioImages} />
        </div>
      </section>

      {/* Seção de Produtos */}
      <section className={`relative py-20 md:py-32 bg-terciary text-tertiary mt-12`}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-full bg-terciary z-0 pt-12 md:pt-20">
          <Image 
            src={bgProducts} 
            alt="Background Products" 
            width={700} 
            className="object-contain" 
          />
        </div>
        <div className="relative z-10 px-4 sm:px-8 pt-10 md:pt-20">
          <SlideShow images={productImages} />
        </div>
      </section>
      
      <Contact />
      <ContactButton />
    </div>
  );
};

export default LandingPage;
