import { CreditCard, Banknote, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Explication.css';
import { BadgeCheck } from 'lucide-react';

export default function Explication() {
  const cards = [
    {
      icon: <CreditCard size={32} />,
      title: "Compramos com atraso",
      text: "Avaliamos a situação real e fazemos uma proposta clara, sem julgamentos."
    },
    {
      icon: <Banknote size={32} />,
      title: "Valor justo e alívio",
      text: "Assumimos a dívida e você recebe o valor da venda sem lidar com leilões."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Investidor Confiável",
      text: "Um parceiro assume a quitação em até 24 meses. Você não desembolsa nada."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Transparência Total",
      text: "Contratos oficiais e registros públicos. Você acompanha cada etapa do processo."
    },
  ];

  return (
    <section className="explication-container">
      <div className="header-content">
        <span className="badge1"> <BadgeCheck size={16} className="badge-icon" />Sua Solução</span>
        <h1>
          Com a Liberty Car, você vira esse jogo
          <CheckCircle2 className="icon-title" />
        </h1>
        <p className="subtitle">
          Nós compramos seu carro com dívida — <strong>do jeito que está.</strong><br />
          Diferente de quem só oferece "conselhos", nós assumimos o problema.
        </p>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card-item" key={index} >
            <div className="icon-wrapper">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/+5514998659046?"
        target="_blank"
        rel="noopener noreferrer"

      ><button className="btn-sell">
          Quero vender meu veiculo agora
        </button>
      </a>

    </section>
  );
}