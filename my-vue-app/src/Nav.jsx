import Logo from './assets/LOGO-VETORIZADA.png'
import Switch from "./Switch"
import './Nav.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Landing from './Landing'


function Nav() {

    const location = useLocation();
    const currentPath = location.pathname;

    const [menuAtivo, setmenuAtivo] = useState(false)

    const alternarMenu = () => {
        setmenuAtivo(!menuAtivo)
    }

    return (
        <div>
            <nav>
                <a href="/" rel="noopener noreferrer">
                    <img src={Logo} alt="Logo LibertyCar" className="logo" />
                </a>

                <div className={menuAtivo ? "navbar ativo" : "navbar"}>
                    <ul>
                        
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <li className={currentPath === "/" ? "active" : ""}>Home</li>
                        </a>
                        <a href="/limpa-nome" target="_blank" rel="noopener noreferrer">
                            <li className={currentPath === "/limpa-nome" ? "active" : ""}>Limpa Nome</li>
                        </a>
                        <a href="/quitacao-fatura" target="_blank" rel="noopener noreferrer">
                            <li className={currentPath === "/quitacao-fatura" ? "active" : ""}>Quitação Fatura</li>
                        </a>

                        <li className={currentPath === "/depoimentos" ? "active" : ""}>Depoimentos</li>
                        <li className={currentPath === "/contato" ? "active" : ""}>Contato</li>
                    </ul>
                </div>
                <div className="switch">
                    
                </div>
                <div className={menuAtivo ? "lines ativo" : "lines"} onClick={alternarMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav