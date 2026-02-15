import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQ.css";

export default function FAQ() {
  const questions = [
    {
      id: "item-1",
      question: "O carro continua no meu nome?",
      answer: "Sim! O veículo permanece no seu nome durante todo o processo. A Liberty Car garante legalmente a posse por meio de contrato e procuração pública, protegendo você de riscos financeiros."
    },
    {
      id: "item-2",
      question: "Quem assume a quitação do meu veículo?",
      answer: "A quitação é realizada por um investidor parceiro criteriosamente selecionado. Isso garante agilidade e segurança, sem que você precise desembolsar valores para o banco."
    },
    {
      id: "item-3",
      question: "Qual é o prazo para quitação?",
      answer: "Todos os veículos são quitados em até 24 meses. O investidor assume a responsabilidade contratual de concluir o processo dentro deste período."
    },
    {
      id: "item-4",
      question: "Como sei que o investidor é confiável?",
      answer: "Todos os investidores parceiros são cuidadosamente selecionados e verificados por nossa equipe. Eles passam por uma análise rigorosa de credibilidade e histórico financeiro antes de serem aceitos como parceiros da Liberty Car."
    },
    {
      id: "item-5",
      question: "Quais são as vantagens de trabalhar com a Liberty Car?",
      answer: "Proteção total do seu veículo\nProcesso 100% legal e transparente\nSem necessidade de pagamento imediato da quitação\nPrazo de quitação garantido\nEvita perda do veículo e estresse com o banco"
    },
    {
      id: "item-6",
      question: "Como funciona o passo a passo para vender meu carro com dívida?",
      answer: " Avaliamos seu veículo e negociamos com você criamos contrato e procuração pública garantindo segurança legal Um investidor parceiro assume a quitação em até 24 meses você mantém o carro no seu nome, protegido e livre de dívidas adicionais"
    },
    {
      id: "item-7",
      question: "Posso acompanhar o processo de quitação?",
      answer: "Sim! A Liberty Car mantém você informado sobre cada etapa do processo, garantindo total transparência e confiança durante toda a operação."
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <HelpCircle size={16} />
            <span>Suporte - FAQ</span>
          </div>
          <h2>Ficou com alguma dúvida?</h2>
          <p className="p">Encontre respostas rápidas para as perguntas mais comuns de nossos clientes.</p>
        </div>

        <Accordion.Root type="single" collapsible className="faq-root">
          {questions.map((item) => (
            <Accordion.Item key={item.id} value={item.id} className="faq-item">
              <Accordion.Header>
                <Accordion.Trigger className="faq-question">
                  <span>{item.question}</span>
                  <ChevronDown className="faq-chevron" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-answer">
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}