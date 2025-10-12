import * as Accordion from "@radix-ui/react-accordion";
import "./FAQ.css";

export default function FAQ() {
  return (
    <div className="faq-container">
      <h2>Perguntas Frequentes - (FAQ)</h2>
      <Accordion.Root type="multiple" collapsible>
        <Accordion.Item value="item-1" className="faq-item">
          <Accordion.Trigger className="faq-question">
            O carro continua no meu nome?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            Sim! O veículo permanece no seu nome durante todo o processo, mas a Liberty Car <em>garante legalmente a posse do carro</em> por meio de contrato e procuração pública. Dessa forma, você não corre riscos e mantém seu veículo protegido.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Quem assume a quitação do meu veículo?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            A quitação do seu veículo é realizada por um <em>investidor parceiro confiável</em>. Isso permite que o processo seja rápido e seguro, sem que você precise desembolsar grandes valores ou se preocupar com o pagamento do banco.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Qual é o prazo para quitação?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            Todos os veículos são quitados <em>em até 24 meses</em>. O investidor parceiro assume a responsabilidade e garante que o processo seja concluído dentro desse período.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Como sei que o investidor é confiável?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            Todos os investidores parceiros da Liberty Car passam por <em>uma análise criteriosa</em> antes de participar do processo. Além disso, o contrato e a procuração pública garantem que seus direitos e seu veículo estão protegidos.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-5" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Quais são as vantagens de trabalhar com a Liberty Car?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            <ul>
              <li>Proteção total do seu veículo</li>
              <li>Processo 100% legal e transparente</li>
              <li>Sem necessidade de pagamento imediato da quitação</li>
              <li>Prazo de quitação garantido</li>
              <li>Evita perda do veículo e estresse com o banco</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-6" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Como funciona o processo passo a passo?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            <ol>
              <li>Avaliamos seu veículo e negociamos com você</li>
              <li>Criamos contrato e procuração pública garantindo segurança legal</li>
              <li>Um investidor parceiro assume a quitação em até 24 meses</li>
              <li>Você mantém o carro no seu nome, protegido e livre de dívidas adicionais</li>
            </ol>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-7" className="faq-item">
          <Accordion.Trigger className="faq-question">
            Posso acompanhar o processo de quitação?
          </Accordion.Trigger>
          <Accordion.Content className="faq-answer">
            Sim! A Liberty Car mantém você informado sobre cada etapa do processo, garantindo <em>total transparência e confiança</em> durante toda a operação.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
