import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react'; // Ícones modernos
import Logo from './assets/LOGO-VETORIZADA.png';
import './Nav.css';

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [menuAtivo, setMenuAtivo] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efeito para mudar o fundo da nav ao rolar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const section = document.querySelector(id);
                if (section) {
                    const yOffset = -90;
                    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 150);
        }
    }, [location]);

    const scrollToSection = (id) => {
        setMenuAtivo(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }
        const section = document.querySelector(id);
        if (section) {
            const yOffset = -90;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo-link">
                <img src={Logo} alt="Logo LibertyCar" className="logo" />
            </Link>
            {/* Menu Desktop e Mobile */}
            <div className={`navbar ${menuAtivo ? "ativo" : ""}`}>
                <ul>
                    <li>
                        <Link to="/" className={currentPath === "/" ? "active" : ""} onClick={() => { setMenuAtivo(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <a href="https://libertycred.net.br" target="_blank" rel="noopener noreferrer">
                            Limpa Nome
                        </a>
                    </li>
                    <li className={currentPath === "/depoimentos" ? "active" : ""} onClick={() => scrollToSection(".testimonials-section")}>
                        Depoimentos
                    </li>
                    <li className="nav-cta-mobile">
                        <a href="https://wa.me/5514998659046" target='_blank' rel='noopener noreferrer' className="btn-contact">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
            {/* Menu Hambúrguer com Lucide */}
            <button
                className={`menu-toggle ${menuAtivo ? "active" : ""}`}
                onClick={() => setMenuAtivo(!menuAtivo)}
            >
                {menuAtivo ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Botão de Contato Desktop */}
            <div className="nav-actions">
                <a href="https://wa.me/5514998659046" target='_blank' rel='noopener noreferrer' className="btn-contact-desktop">
                    Falar com Especialista
                </a>
            </div>
        </nav>
    );
}
export default Nav;