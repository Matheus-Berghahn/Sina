"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import template1 from '../../../public/images/template_01.jpg';
import template2 from '../../../public/images/template_02.jpg';
import template3 from '../../../public/images/template_03.jpg';
import template4 from '../../../public/images/template_04.jpg';
import template5 from '../../../public/images/template_05.jpg';
import template6 from '../../../public/images/template_06.jpg';

type ImageType = typeof template1;

// Configuração para mudar o tamanho das imagens e estilo de slide
const slideStyles = (isActive: boolean) => ({
  transform: isActive ? 'scale(0.9)' : 'scale(0.7)',
  transition: 'transform 0.5s ease',
  opacity: isActive ? 1 : 0.7,
  filter: isActive ? 'none' : 'grayscale(100%)',
});

const SlideShow = ({ images }: { images: ImageType[] }) => {
  return (
    <Swiper
      spaceBetween={-30} // Ajuste do espaçamento negativo para mostrar as bordas das imagens
      centeredSlides={true}
      loop={true}
      slideToClickedSlide={true}
      breakpoints={{
        320: {
          slidesPerView: 1.5, // No mobile pequeno, mostra 1.5 slides para indicar mais conteúdo
          spaceBetween: -20, // Ajuste para melhor visualização no mobile
        },
        640: {
          slidesPerView: 2.5, // Em telas maiores que 640px, mostra 2.5 slides
          spaceBetween: -30, // Margem ajustada para mostrar pedaços das imagens
        },
        1024: {
          slidesPerView: 3, // No desktop, 3 slides
          spaceBetween: -40,
        },
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div className="flex justify-center items-center w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded object-cover"
                style={slideStyles(isActive)}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
