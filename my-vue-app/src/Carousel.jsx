import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { TriangleAlert } from "lucide-react";
import AOS from "aos";
import { MessageCircle } from "lucide-react";
import "aos/dist/aos.css";

export default function Carousel() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = [
    { icon: "bi-graph-up-arrow", title: "As parcelas continuam acumulando", text: "Os juros não param. Mesmo que você atrase um mês, no outro já estará devendo mais do que antes." },
    { icon: "bi-bank", title: "Busca e apreensão iminente", text: "Se recebeu notificações, o processo pode estar em andamento. Você pode perder o veículo sem aviso prévio." },
    { icon: "bi-piggy-bank", title: "A dívida segue viva", text: "Mesmo em leilão, o valor arrecadado costuma ser baixo — e você continua devendo a diferença ao banco." },
    { icon: "bi-house-slash", title: "Restrições no seu CPF", text: "Nome sujo fecha portas para tudo: novos financiamentos, cartões de crédito e até contratos de aluguel." },
    { icon: "bi-exclamation-octagon", title: "O pior dos mundos", text: "No fim, você fica sem o carro, com o nome sujo e com uma dívida residual. Um prejuízo completo." },
  ];

  return (
    <div className="carousel-section-container">
      <div className="carousel-header" >
        <span className="badge"><TriangleAlert size={14} />Atenção</span>
        <h2>Entenda os riscos de não agir agora</h2>
      </div>

      <div className="carousel-wrapper">
        <Swiper
          loop={true}
          centeredSlides={true}
          mousewheel={{ forceToAxis: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination, Autoplay, Mousewheel]}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2.2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card-slide">
                <div className="icon-box">
                  <i className={`bi ${slide.icon}`}></i>
                </div>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <div className="card-footer">
                  <span className="step-number">0{index + 1}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <button className="btn-msg">
          Falar com especialista
          <MessageCircle size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}