import { Section } from './Section';
import { Button } from './Button';

export function CTAFinal() {
  return (
    <Section background="gradient-soft">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <h2 className="mb-md">Chega de perder rega, fase e colheita.</h2>
        <p className="subheading mb-xl">
          Seu cultivo mais organizado começa agora.
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="large" href="#founder-kit">
            🌿 Quero meu Founder Kit + Premium
          </Button>
          <Button variant="secondary" size="large" href="#demo">
            ▶ Assistir à demo curta
          </Button>
        </div>
        
        <p className="mt-lg" style={{ fontSize: '13px', opacity: 0.7 }}>
          Cada Founder Kit dá direito a entrada antecipada no My Bud + até 6 meses Premium grátis + itens exclusivos que não serão vendidos depois. Estoque limitado, acabou, acabou.
        </p>
      </div>
    </Section>
  );
}

