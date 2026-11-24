import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Aguarde.css';

export default function Aguarde() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="aguarde-page">
            <Nav />
            <main className="aguarde-content">
                <h1>Aguarde</h1>
                <p>Em breve, você poderá acessar a página de quitação por aqui.</p>
                <Link to="/">Voltar para o início</Link>
            </main>
        </div>
    );
}
