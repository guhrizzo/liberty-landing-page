import './quitacao.css'
import Nav from './Nav'
import { DarkModeProvider } from './DarkModeContext'
import { useState } from 'react'
import FollowCursor from './FollowCursor'
import Footer from './Footer'
import BrokenCar from './BrokenCar'
import Carousel from './Carousel'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Shorts from './Shorts'
import FAQ from './FAQ'
import TestimonialsSection from './testimonials'
import Explication from './Explication'

function Quitacao() {

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);
    return (
        <div className='Quit-container'>
            <a
                href="https://wa.me/+5514998659046?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Falar pelo WhatsApp"
            >
                {/* Badge de notificação */}
                <span className="whatsapp-badge">1</span>

                {/* Ícone */}
                <i className="bi bi-whatsapp"></i>

                {/* Tooltip opcional que aparece no hover */}
                <span className="whatsapp-tooltip">Fale conosco</span>
            </a>
            <FollowCursor className="cursor" />
            <Nav />
            <BrokenCar />
            <Carousel />
            <a
                href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"

            >

            </a>

            {/*
               <div className="quit-cards">
                <div className="up fade-in-up">
                    
                    <div className="quit-card">
                        <i class="bi bi-graph-up-arrow"></i>
                        <span>
                            <h2>1. As parcelas continuam acumulando
                            </h2>
                            <p>Os juros não param. Mesmo que você atrase um mês, no outro já estará devendo mais do que antes. E o valor total da dívida cresce sem parar.
                            </p>
                        </span>
                    </div>
                    <div className="quit-card">
                        <i class="bi bi-bank"></i>
                        <span>
                            <h2>2. O banco pode entrar com busca e apreensão
                            </h2>
                            <p>Se você já recebeu notificações, o processo pode estar em andamento. Isso significa que, a qualquer momento, você pode perder o veículo sem aviso prévio.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="quit-card fade-in-up">
                    <i class="bi bi-piggy-bank"></i>
                    <span>
                        <h2>3. Mesmo sem carro, a dívida continua
                        </h2>
                        <p>Muita gente pensa: “Ah, se o banco levar, tudo bem”. Só que não é assim. Quando o carro vai a leilão, o valor arrecadado costuma ser muito abaixo da dívida — e você continua devendo a diferença.
                        </p>
                    </span>
                </div>
                <div className="down fade-in-up">
                    <div className="quit-card">
                        <i class="bi bi-house-slash"></i>
                        <span>
                            <h2>4. Seu nome vai para os órgãos de proteção ao crédito
                            </h2>
                            <p>Depois da busca e apreensão, vem o nome sujo. Isso fecha portas para financiamentos, cartões de crédito e até aluguéis.
                            </p>
                        </span>
                    </div>
                    <div className="quit-card">
                        <i class="bi bi-exclamation-octagon"></i>
                        <span>
                            <h2>5. E o pior: você perde o bem e ainda fica devendo
                            </h2>
                            <p>No fim das contas, você perde o carro, fica com o nome sujo e continua devendo. Um prejuízo completo.
                            </p>
                        </span>

                    </div>
                </div>

            </div>     
             */}
            <Explication />
            <Shorts />
            <TestimonialsSection />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Quitacao