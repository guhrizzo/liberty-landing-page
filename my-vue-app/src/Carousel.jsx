import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const slides = [
    {
      icon: "bi-graph-up-arrow",
      title: "1. As parcelas continuam acumulando",
      text: "Os juros não param. Mesmo que você atrase um mês, no outro já estará devendo mais do que antes. E o valor total da dívida cresce sem parar."
    },
    {
      icon: "bi-bank",
      title: "2. O banco pode entrar com busca e apreensão",
      text: "Se você já recebeu notificações, o processo pode estar em andamento. Isso significa que, a qualquer momento, você pode perder o veículo sem aviso prévio."
    },
    {
      icon: "bi-piggy-bank",
      title: "3. Mesmo sem carro, a dívida continua",
      text: "Quando o carro vai a leilão, o valor arrecadado costuma ser muito abaixo da dívida — e você continua devendo a diferença."
    },
    {
      icon: "bi-house-slash",
      title: "4. Seu nome vai para os órgãos de proteção ao crédito",
      text: "Depois da busca e apreensão, vem o nome sujo. Isso fecha portas para financiamentos, cartões de crédito e até aluguéis."
    },
    {
      icon: "bi-exclamation-octagon",
      title: "5. E o pior: você perde o bem e ainda fica devendo",
      text: "No fim das contas, você perde o carro, fica com o nome sujo e continua devendo. Um prejuízo completo."
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Swiper
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}

        slidesPerView={1.4}
        spaceBetween={40}
        breakpoints={{
          768: { slidesPerView: 2.5, spaceBetween: 80 },
          1024: { slidesPerView: 3, spaceBetween: 100 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <i className={`bi ${slide.icon}`}></i>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
