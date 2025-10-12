import React from 'react';
import './Shorts.css';

const Shorts = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/l52Ymt8PiA8",
    "https://www.youtube.com/embed/t8oDojIIO2A",
    "https://www.youtube.com/embed/e1iWuSdreh4",
    "https://www.youtube.com/embed/X94GXeI4euw?si=j-zqKSSZY5qItMo3",
  ];

  return (
    <div className="shorts-container">
      {videoUrls.map((url, index) => {
        // extrair o ID do vídeo para o loop do fundo
        const videoId = url.split('/').pop();

        return (
          <div 
            className="video-card" 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 150}
          >
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
                title={`Vídeo Depoimento ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
           
          </div>
        )
      })}
      
       
    </div>
  );
};

export default Shorts;
