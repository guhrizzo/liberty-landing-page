import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";
import { UserRoundCheck } from "lucide-react";

const testimonials = [
  { name: "João Martins", text: "Tive meu carro levado e já não acreditava mais em recuperá-lo. A Liberty Car foi extremamente rápida e eficiente: em menos de 48 horas o veículo estava de volta comigo.", rating: 5 },
  { name: "Ana Paula Ferreira", text: "Fiquei impressionada com a agilidade e atenção de toda a equipe. Fui informada de cada passo, sempre com clareza e profissionalismo.", rating: 5 },
  { name: "Carlos Henrique", text: "A Liberty Car foi a solução no momento mais difícil. Profissionais qualificados, atendimento humano e ágil. Recuperaram meu veículo e me deram tranquilidade.", rating: 5 },
  { name: "Mariana Souza", text: "Além de recuperarem meu carro com eficiência, a equipe demonstrou empatia e transparência em todo o processo. Me senti segura e bem acolhida.", rating: 5 },
  { name: "Ricardo Almeida", text: "Excelente serviço! A equipe foi rápida, objetiva e muito competente. Meu carro foi devolvido em perfeitas condições e sem burocracias.", rating: 5 },
  { name: "Fernanda Lima", text: "A Liberty Car transformou uma situação de desespero em alívio. O atendimento foi ágil e extremamente profissional. Experiência excelente!", rating: 5 },
];

export default function TestimonialsSection() {


  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="faq-badge"><UserRoundCheck size={16}/> Depoimentos</span>
        <h2>O que nossos clientes dizem</h2>
        <p>A confiança de quem já recuperou sua tranquilidade com a Liberty Car.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="testimonial-card"

          >
            <Quote className="quote-icon" size={40} />

            <div className="stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={14}
                  fill={idx < t.rating ? "#ffae00" : "none"}
                  color="#ffae00"
                />
              ))}
            </div>

            <p className="testimonial-text">"{t.text}"</p>

            <div className="testimonial-footer">
              <div className="avatar">
                {t.name.split(" ").map(n => n[0]).join("").toUpperCase()}
              </div>
              <h3 className="testimonial-name">{t.name}</h3>
            </div>
          </blockquote>
        ))}
      </div>
      <div className='button-div'>
        <a
          href="https://wa.me/5514998420710?text=Olá..."
          target='_blank'
          rel="noopener noreferrer"
          className='btn-lm'
        >
          Quero conhecer mais!
        </a>
      </div>
    </section>
  );
}