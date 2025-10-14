import { Section } from './Section';
import { Button } from './Button';

export function B2BPreview() {
  const partners = [
    '🌱', '🔬', '💡', '📊', '🏢', '🌿'
  ];

  return (
    <Section background="off-white">
      <h2 className="text-center mb-md">Marcas e associações crescendo com a gente.</h2>
      <p className="text-center subheading mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
        Transforme dados de cultivo em insights estratégicos para sua marca ou associação.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        {partners.map((emoji, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1',
              fontSize: '48px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Button variant="secondary" href="/b2b">
          Agendar conversa
        </Button>
      </div>
    </Section>
  );
}

