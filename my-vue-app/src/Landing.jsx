import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import './Landing.css'
import Nav from "./Nav"
import FollowCursor from "./FollowCursor"
import Card from "./Card"
import LimpaNome from "./limpa-nome"
import Quitacao from "./quitacao"
import { link, title } from "motion/react-client"
import { DarkModeProvider, useDark } from "./DarkModeContext"
import Footer from "./Footer"

function Landing() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { isDark } = useDark()

    const cards = [
        {
            title: "Quero limpar meu nome",
            description: "Clique em saiba mais se quiser limpar seu nome!",
            icon: "bi bi-person-fill-check", // 👈 só classe
            link: "/limpa-nome"
        },
        {
            title: "Quero vender meu carro com dívida",
            description: "Clique em saiba mais se quiser quitar seu carro com dívida!",
            icon: "bi bi-cash-coin",
            link: "/quitacao-fatura"
        }
    ];

    {/**{ title: "1° Responda o questionário", description: "Responda o questionário para podermos avaliar as condições que se encontra o veículo, e formularmos uma proposta", icon: <i className="bi bi-journal-text"></i> },
        { title: "2° Receba a oferta", description: "Em menos de 24 horas, oferecemos uma oferta justa pelo seu veículo", icon: <i class="bi bi-cash-coin"></i> },
        { title: "3° Négocio fechado", description: "Após toda negóciacao, se tiver bom pra ambas as partes, iremos até sua cidade, fazer a procuração e o contrato", icon: <i class="bi bi-file-check"></i> },
        { title: "4° Tudo resolvido", description: "Após o tempo combinado, faremos a quitação do veículo e pronto… nenhuma dívida no seu nome !!!", icon: <i class="bi bi-patch-check"></i> }
         */}

    return (
        <div className="landing-container">
            <a
                href="https://wa.me/5514998420710?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20vender%20meu%20ve%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
            <FollowCursor className="cursor" />
            <div className="blur-glow fade-in-up"></div>
            <Nav />
            <div className="apresentacao">
                <h1 className="fade-in-up" style={{ animationDelay: "0s" }}>
                    Está com o <span>nome sujo</span> ou seu carro está em <span>risco de apreensão?</span>
                </h1>

                <h2 className="fade-in-up" style={{ animationDelay: "0.3s" }}>
                    A <span>Liberty Car</span> resolve com soluções jurídicas confiáveis<span className="dot">, </span>
                    <span>sem enrolações</span> e <span>com clareza total</span>.
                </h2>

                {mounted && (
                    <div className="card-container">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                                link={card.link}
                                delay={`${index * 0.4}s`}
                                isDark={isDark}
                                highlight={index === 0}
                            />
                        ))}
                    </div>
                )}
            </div>


            {/*
                <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>

             */}
            <Footer />
        </div>
    )
}

export default Landing