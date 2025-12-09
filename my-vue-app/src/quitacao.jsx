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

function Quitacao() {

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);
    return (
        <div className='Quit-container'>
            <a
                href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
            <FollowCursor className="cursor" />
            <Nav />
            <BrokenCar />
            <div id="carousel-section" className="carousel">
                <Carousel />
            </div>
            <a
                href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"

            >
                <button className='btn-msg'>
                    <p>Quero mudar Isso</p>

                    <i class="bi bi-arrow-up-right-circle-fill"></i>
                </button>
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

            <div className="explication" data-aos="fade-up">
                <h1>
                    Com a Liberty Car, você vira esse jogo
                    <i className="bi bi-shield-fill-check right"></i>
                </h1>
                <h2 className='h2'>
                    Nós compramos seu carro com dívida — do jeito que está
                    Enquanto outros te oferecem <br /> “ajuda para negociar com o banco”, nós fazemos diferente:
                </h2>
                <div className="cards">
                    {[
                        { icon: "bi-credit-card", text: "✔ Compramos seu carro mesmo com parcelas em atraso <br />Sem julgamentos. Avaliamos a situação real e fazemos uma proposta clara." },
                        { icon: "bi-cash-coin", text: "✔ Você recebe um valor justo e se livra da dívida A Liberty Car assume a dívida, e você recebe o valor da venda — sem precisar lidar com leilão, advogado ou apreensão." },
                        { icon: "bi-person-check", text: "✔ Um investidor confiável entra no processo, assume a quitação desse veiculo em até 24 meses, garantindo que seu carro seja quitado sem que você precise desembolsar nada" },
                        { icon: "bi-patch-check", text: "✔ Tudo feito com segurança e transparência Trabalhamos com contratos oficiais, registros públicos e você acompanha cada etapa." },
                        ,
                    ].map((card, index) => (
                        <div className="card-quit" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                            <i className={`bi ${card.icon}`}></i>
                            <p dangerouslySetInnerHTML={{ __html: card.text }} />
                        </div>
                    ))}

                </div>

                <button className='btn-sell'><a href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo" target='_blank' rel="noopener noreferrer">Quero Vender Meu Veículo</a> </button>
            </div>

            <div className='video-container'>
                <h1>Veja o depoimento dos nossos clientes!</h1>
                <TestimonialsSection />
                <Shorts />
                <div className='button-div'>
                    <button className='btn-lm'><a href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo" target='_blank' rel="noopener noreferrer">Quero conhecer mais!</a> </button>
                </div>
            </div>
            <div
                className='bg-faq'
                data-aos="fade-up"
                data-aos-delay="200" 
            >
    
                <FAQ />
            </div>
            <Footer /> 
        </div>
    )
}

export default Quitacao