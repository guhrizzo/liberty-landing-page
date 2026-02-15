import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Play } from 'lucide-react';
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

  // Estado para controlar quais vídeos já foram "desbloqueados" pelo clique
  const [activeVideos, setActiveVideos] = useState({});

  const handleVideoClick = (index) => {
    setActiveVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="shorts-section-clean">
      <div className="shorts-header">
        <div className="faq-badge">
          <Play size={14} fill="currentColor" />
          <span>Vídeos Rápidos</span>
        </div>
        <h2>Veja o depoimento dos nossos clientes!</h2>
        <p>Confira os bastidores e depoimentos em formato de vídeo.</p>
      </div>

      <div className="shorts-container-slick">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={15}
          slidesPerView={1.2} // Mostra um pedaço do próximo para induzir o swipe
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          threshold={10} // Sensibilidade do toque
          touchStartPreventDefault={false} // Importante para não travar o scroll vertical
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4, centeredSlides: true, loop: false }
          }}
          className="shorts-swiper-clean"
        >
          {videoUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="video-card-minimal">
                {/* CAMADA DE TOQUE: Ela fica por cima do iframe */}
                {!activeVideos[index] && (
                  <div 
                    className="video-touch-overlay" 
                    onClick={() => handleVideoClick(index)}
                  >
                    
                  </div>
                )}
                
                <iframe
                  src={`${url}?modestbranding=1&rel=0&color=white${activeVideos[index] ? '&autoplay=1' : ''}`}
                  title={`Vídeo ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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