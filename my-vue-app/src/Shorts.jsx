import React from 'react';
import './Shorts.css';

const Shorts = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/l52Ymt8PiA8",
    "https://www.youtube.com/embed/t8oDojIIO2A",
    "https://www.youtube.com/embed/e1iWuSdreh4",
  ];

  return (
    <div className="shorts-container">
      {videoUrls.map((url, index) => (
        <div 
          className="short-video" 
          key={index} 
          data-aos="fade-up" 
          data-aos-delay={index * 150} // atraso progressivo
        >
          <iframe
            src={url}
            title={`YouTube Short ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Card animado sobre o vídeo */}
          <div className="short-card" data-aos="fade-up" data-aos-delay={index * 200}>
            <p>Vídeo Depoimento {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
