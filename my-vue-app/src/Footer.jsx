import './Footer.css'
import Logo from './assets/LOGO-VETORIZADA.png'
import { Instagram, MessageCircle, Code2, Copyright, MapPin, FileText } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className='foot-container'>
                
                {/* Coluna 1: Logo e Social */}
                <div className='foot-column brand'>
                    <img src={Logo} alt="Logo LibertyCar" className="foot-logo" />
                    <p className='brand-description'>
                        Soluções seguras para venda de veículos com dívida. 
                        Transparência e agilidade em cada processo.
                    </p>
                    <div className='social-links'>
                        <a href="https://www.instagram.com/liberty_car7/" target='_blank' rel='noreferrer' aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/5514998420710" target='_blank' rel='noreferrer' aria-label="WhatsApp">
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>

                {/* Coluna 2: Informações Legais */}
                <div className='foot-column'>
                    <h4 className='foot-title'>Institucional</h4>
                    <div className='foot-info-item'>
                        <FileText size={16} className="foot-icon" />
                        <span>CNPJ: 55.116.497/0001-08</span>
                    </div>
                    <div className='foot-info-item'>
                        <MapPin size={16} className="foot-icon" />
                        <span>Av. Dr Quinzinho, 995, Sala 4<br/>Jaú - SP</span>
                    </div>
                </div>

                {/* Coluna 3: Desenvolvedor */}
                <div className='foot-column'>
                    <h4 className='foot-title'>Tecnologia</h4>
                    <a href="https://www.instagram.com/gfrizzo_/" target='_blank' rel='noopener noreferrer' className='dev-link'>
                        <div className='dev-content'>
                            <Code2 size={18} />
                            <span>Desenvolvido por Gustavo Rizzo</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className='foot-bottom'>
                <p>
                    <Copyright size={14} /> {currentYear} Liberty Car - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer;