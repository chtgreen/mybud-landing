import { Section } from './Section';
import { Button } from './Button';

export function FounderKit() {
  return (
    <Section background="lavender" id="founder-kit">
      <h2 className="text-center mb-md">Founder Kits: faça parte desde o começo.</h2>
      <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
        Apoie o projeto, garanta acesso antecipado e receba itens colecionáveis feitos pra quem ama a cultura canábica.
      </p>
      
      <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
        {/* Product Image */}
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-2xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '80px', marginBottom: 'var(--spacing-md)' }}>📦</div>
            <div style={{ fontSize: '14px', opacity: 0.6 }}>
              Founder Kit
              <br />
              Product Image
            </div>
          </div>
        </div>
        
        {/* Kit Details */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-xl)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--spacing-md)'
            }}>
              <h3>Kit BUD</h3>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-primary)' }}>
                R$299
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-xl)',
              paddingBottom: 'var(--spacing-xl)',
              borderBottom: '1px solid var(--color-off-white)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <span style={{ fontSize: '24px' }}>✅</span>
                <span>6 meses Premium</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <span style={{ fontSize: '24px' }}>👕</span>
                <span>Camisa exclusiva My Bud</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <span style={{ fontSize: '24px' }}>🚬</span>
                <span>Piteira premium</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <span style={{ fontSize: '24px' }}>🖼️</span>
                <span>Cartaz arte canábica</span>
              </div>
            </div>
            
            <Button variant="primary" size="large" style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}>
              🌿 Quero meu Kit BUD + acesso Premium
            </Button>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              background: 'var(--color-pink)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
              width: '100%',
              justifyContent: 'center'
            }}>
              ⚡ Lote atual: só 72 disponíveis
            </div>
            
            <p style={{ fontSize: '13px', opacity: 0.7, textAlign: 'center' }}>
              Cada Founder Kit dá direito a entrada antecipada no My Bud + até 6 meses Premium grátis + itens exclusivos que não serão vendidos depois. Estoque limitado, acabou, acabou.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

