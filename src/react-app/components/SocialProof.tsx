import { Section } from './Section';

export function SocialProof() {
  const testimonials = [
    {
      name: '@Hugo, BA',
      text: '"Falei \'regar planta 2 com FPJ\' e virou tarefa. Brabo."',
      avatar: '🌱'
    },
    {
      name: 'Manu, SP',
      text: '"Agora eu sei exatamente quantos dias de flora tem cada planta."',
      avatar: '🌿'
    },
    {
      name: 'Vinícius, PR',
      text: '"Com o sticker eu não confundo mais as plantas. E fica massa no Insta."',
      avatar: '🪴'
    }
  ];

  return (
    <Section background="white">
      <h2 className="text-center mb-md">"Quem já testou, recomenda."</h2>
      <p className="text-center subheading mb-xl">
        Antes mesmo do lançamento, o My Bud já organiza cultivos reais.
      </p>
      
      <div style={{
        textAlign: 'center',
        marginBottom: 'var(--spacing-2xl)',
        fontSize: '18px',
        fontWeight: '600',
        color: 'var(--color-primary)'
      }}>
        +150 growers já estão usando o My Bud em beta fechado.
      </div>
      
      <div className="grid grid-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              background: 'var(--color-off-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: 'var(--spacing-sm)'
            }}>
              {testimonial.avatar}
            </div>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: 'var(--spacing-sm)'
            }}>
              {testimonial.text}
            </p>
            
            <div style={{ fontWeight: '600', fontSize: '14px', opacity: 0.7 }}>
              {testimonial.name}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

