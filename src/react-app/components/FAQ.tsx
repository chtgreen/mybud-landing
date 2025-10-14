import { Section } from './Section';

export function FAQ() {
  const faqs = [
    {
      question: 'O app já está nas lojas?',
      answer: 'Ainda não. Estamos em beta fechado. Quem entra agora garante até 6 meses Premium.'
    },
    {
      question: 'Preciso mostrar meu grow?',
      answer: 'Não. Você controla tudo. Os dados são anônimos.'
    },
    {
      question: 'Quanto vai custar depois?',
      answer: 'Premium = R$30/mês. Quem entra no beta ganha meses grátis.'
    }
  ];

  return (
    <Section background="white">
      <h2 className="text-center mb-xl">Perguntas Frequentes</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: 'var(--color-off-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            <h4 className="mb-sm">{faq.question}</h4>
            <p style={{ opacity: 0.7 }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

