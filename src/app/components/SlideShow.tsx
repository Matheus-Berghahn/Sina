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

type ImageType = typeof template1; // Inferindo o tipo da imagem a partir da importação

// Configuração para mudar o tamanho das imagens
const slideStyles = (isActive: boolean) => ({
  transform: isActive ? 'scale(0.8)' : 'scale(0.6)',
  transition: 'transform 0.5s ease',
  opacity: isActive ? 1 : 0.7,
  filter: isActive ? 'none' : 'grayscale(100%)',
});

const SlideShow = ({ images }: { images: ImageType[] }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      slideToClickedSlide={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div className="flex justify-center items-center">
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
