import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";
import { UserRoundCheck } from "lucide-react";

const testimonials = [
  { name: "Rafael Nogueira", text: "Precisava vender meu carro financiado e não sabia por onde começar. A Liberty Car cuidou de tudo com rapidez e transparência: em poucos dias fechei negócio sem dor de cabeça.", rating: 5 },
  { name: "Ana Paula Ferreira", text: "Fiquei impressionada com a agilidade e atenção de toda a equipe. Fui informada de cada passo, sempre com clareza e profissionalismo.", rating: 5 },
  { name: "Carlos Henrique", text: "Eu estava atrasado nas parcelas e sem saber o que fazer. A Liberty Car resolveu tudo e consegui sair da dívida. Atendimento humano e sem enrolação.", rating: 5 },
  { name: "Mariana Souza", text: "Fiquei com receio no começo, mas a equipe foi transparente do início ao fim. Eles quitaram meu carro antes do prazo e resolveram toda a burocracia por mim. Me senti segura em todo o processo.", rating: 5 },
  { name: "Ricardo Almeida", text: "Excelente serviço! Pagaram um valor justo pelo meu carro, foi tudo rápido e sem burocracia. Consegui sair da dívida e respirar aliviado.", rating: 5 },
  { name: "Fernanda Lima", text: "A Liberty Car transformou uma situação de desespero em alívio. O atendimento foi ágil e extremamente profissional. Experiência excelente!", rating: 5 },
];

export default function TestimonialsSection() {


  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="faq-badge"><UserRoundCheck size={16}/> Depoimentos</span>
        <h2>O que nossos clientes dizem</h2>
        <p>A confiança de quem já saiu da dívida com a Liberty Car.</p>
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
          href={`https://wa.me/+5514998659046?text=${encodeURIComponent("Vim pelo site, gostaria de vender meu veículo financiado, pode me orientar ?")}`}
          target='_blank'
          rel="noopener noreferrer"
          className='btn-lm btn-whatsapp'
        >
          Quero conhecer mais!
        </a>
      </div>
    </section>
  );
}