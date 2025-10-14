import { Section } from './Section';

export function Budzinho() {
  return (
    <Section background="gradient-soft">
      <h2 className="text-center mb-md">Feito de grower, para grower.</h2>
      <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
        O My Bud nasceu da frustração de quem já esqueceu uma rega, perdeu o dia da flora ou confundiu genéticas. É um diário esperto, um assistente que entende sua rotina com leveza, privacidade e respeito à sua liberdade de cultivar.
      </p>
      
      <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/images/budzinho/MyBud - Budzinho Colorido 1.svg" 
            alt="Budzinho"
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-md)' }}>🔌</div>
            <h4 className="mb-sm">Integração inteligente</h4>
            <p style={{ opacity: 0.7 }}>Pronto para conectar sensores e IoT.</p>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-md)' }}>👥</div>
            <h4 className="mb-sm">Feito em comunidade</h4>
            <p style={{ opacity: 0.7 }}>Construído com feedback real de cultivadores.</p>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '32px', marginBottom: 'var(--spacing-md)' }}>✅</div>
            <h4 className="mb-sm">Testado no mundo real</h4>
            <p style={{ opacity: 0.7 }}>Rodando em cultivos reais durante o beta.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

