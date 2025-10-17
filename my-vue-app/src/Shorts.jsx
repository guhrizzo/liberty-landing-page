import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Shorts.css';

const Shorts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const videoUrls = [
    "https://www.youtube.com/embed/l52Ymt8PiA8",
    "https://www.youtube.com/embed/t8oDojIIO2A",
    "https://www.youtube.com/embed/e1iWuSdreh4",
    "https://www.youtube.com/embed/X94GXeI4euw?si=j-zqKSSZY5qItMo3",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderVideo = (url, index) => {
    const videoId = url.split('/').pop().split('?')[0];

    return (
      <div className="video-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
        {/* Fundo borrado */}
        <div className="video-bg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            title={`Fundo ${index}`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Vídeo principal */}
        <div className="video-front">
          <iframe
            src={url}
            title={`Vídeo ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="shorts-container">
      {isMobile ? (
        // 📱 Carrossel horizontal no mobile
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          className="shorts-swiper"
        >
          {videoUrls.map((url, index) => (
            <SwiperSlide key={index}>{renderVideo(url, index)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // 💻 Layout normal em telas grandes
        <div className="shorts-grid">
          {videoUrls.map((url, index) => renderVideo(url, index))}
        </div>
      )}
    </div>
  );
};

export default Shorts;
