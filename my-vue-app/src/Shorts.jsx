import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Play } from 'lucide-react'; // Ícone sutil
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Shorts.css';

const Shorts = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/l52Ymt8PiA8",
    "https://www.youtube.com/embed/t8oDojIIO2A",
    "https://www.youtube.com/embed/e1iWuSdreh4",
    "https://www.youtube.com/embed/X94GXeI4euw",
    "https://www.youtube.com/embed/LZ3BiSls_Oo"
  ];

  return (
    <section className="shorts-section-clean">
      <div className="shorts-header">
        <div className="faq-badge">
          <Play size={14} fill="currentColor" />
          <span className=''>Vídeos Rápidos</span>
        </div>
        <h2>Veja o depoimento dos nossos clientes!</h2>
        <p>Confira os bastidores e depoimentos em formato de vídeo.</p>
      </div>

      <div className="shorts-container-slick">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          loopPreventsSliding={true}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1, centeredSlides: false, spaceBetween: 30 },
            1024: { slidesPerView: 3, centeredSlides: false },
            1280: { slidesPerView: 4, centeredSlides: true , loop: false, initialSlide: 2},
          }}
          modules={[Navigation, Pagination]}
          className="shorts-swiper-clean"
        >
          {videoUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="video-card-minimal">
                <iframe
                  src={`${url}?modestbranding=1&rel=0&color=white`}
                  title={`Vídeo ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Shorts;