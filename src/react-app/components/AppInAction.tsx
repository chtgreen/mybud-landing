import { Section } from './Section';
import { Button } from './Button';

export function AppInAction() {
  return (
    <Section background="white" id="demo">
      <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="mb-md">Como o My Bud simplifica seu grow.</h2>
        <p className="subheading mb-xl">
          Clique nas funcionalidades e veja o que muda no seu grow.
        </p>
        
        {/* Example Timeline */}
        <div className="grid grid-2" style={{ marginBottom: 'var(--spacing-2xl)', gap: 'var(--spacing-3xl)' }}>
          <div style={{
            background: 'var(--color-off-white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-xl)',
            textAlign: 'left'
          }}>
            <h4 className="mb-md">Exemplo real:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: 'white',
                borderRadius: 'var(--radius-md)'
              }}>
                <span style={{ fontSize: '24px' }}>🌱</span>
                <div>
                  <div style={{ fontWeight: '600' }}>Planta A</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>45 dias de vida</div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: 'white',
                borderRadius: 'var(--radius-md)'
              }}>
                <span style={{ fontSize: '24px' }}>🌿</span>
                <div>
                  <div style={{ fontWeight: '600' }}>Planta B</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>12 dias de floração</div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: 'white',
                borderRadius: 'var(--radius-md)'
              }}>
                <span style={{ fontSize: '24px' }}>💧</span>
                <div>
                  <div style={{ fontWeight: '600' }}>Próxima rega</div>
                  <div style={{ fontSize: '14px', opacity: 0.7 }}>em 2 dias</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--spacing-lg)' }}>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>1. Registre do seu jeito</h4>
              <p style={{ opacity: 0.7 }}>Fale, fotografe ou filme.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>2. Organiza tudo sozinho</h4>
              <p style={{ opacity: 0.7 }}>Timeline clara por planta.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>3. Avisa no momento certo</h4>
              <p style={{ opacity: 0.7 }}>Rega, poda, nutrição.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>4. Compartilhe com estilo</h4>
              <p style={{ opacity: 0.7 }}>Stickers automáticos para Insta.</p>
            </div>
          </div>
        </div>
        
        <Button variant="primary" size="large" href="#beta-signup">
          Quero testar o app
        </Button>
      </div>
    </Section>
  );
}

