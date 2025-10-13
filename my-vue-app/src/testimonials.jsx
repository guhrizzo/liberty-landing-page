import React, { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

const testimonials = [
  {
    name: "João Martins",
    text: "Tive meu carro levado e já não acreditava mais em recuperá-lo. A Liberty Car foi extremamente rápida e eficiente: em menos de 48 horas o veículo estava de volta comigo.",
    rating: 5,
  },
  {
    name: "Ana Paula Ferreira",
    text: "Fiquei impressionada com a agilidade e atenção de toda a equipe. Fui informada de cada passo, sempre com clareza e profissionalismo.",
    rating: 5,
  },
  {
    name: "Carlos Henrique",
    text: "A Liberty Car foi a solução no momento mais difícil. Profissionais qualificados, atendimento humano e ágil. Recuperaram meu veículo e me deram tranquilidade.",
    rating: 5,
  },
  {
    name: "Mariana Souza",
    text: "Além de recuperarem meu carro com eficiência, a equipe demonstrou empatia e transparência em todo o processo. Me senti segura e bem acolhida.",
    rating: 5,
  },
  {
    name: "Ricardo Almeida",
    text: "Excelente serviço! A equipe foi rápida, objetiva e muito competente. Meu carro foi devolvido em perfeitas condições e sem burocracias.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    text: "A Liberty Car transformou uma situação de desespero em alívio. O atendimento foi ágil e extremamente profissional. Experiência excelente!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      once: true, // anima apenas uma vez
    });
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            className="testimonial-card"
            data-aos="fade-up"
            data-aos-delay={i * 100} // efeito em cascata
          >
            <div className="testimonial-top">
              <div className="avatar">
                {t.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div className="testimonial-info">
                <div className="testimonial-name-row">
                  <h3 className="testimonial-name">{t.name}</h3>
                  <div className="stars">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={14} />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">“{t.text}”</p>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
