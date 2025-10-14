import { Button } from './Button';

export function AppInAction() {
  return (
    <section className="section bg-white bg-vignette" id="demo" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="container">
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
        
        {/* Feature Pills */}
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--spacing-xl)'
        }}>
          {[
            { icon: '💬', label: 'Voz → Tarefa' },
            { icon: '📷', label: 'Foto → Sticker' },
            { icon: '🪴', label: 'Timeline → Insights' }
          ].map((pill, index) => (
            <button
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                padding: '12px 24px',
                background: 'white',
                border: '2px solid var(--color-off-white)',
                borderRadius: 'var(--radius-full)',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-off-white)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '20px' }}>{pill.icon}</span>
              <span>{pill.label}</span>
            </button>
          ))}
        </div>
        
        <Button variant="primary" size="large" href="#beta-signup">
          Quero testar o app
        </Button>
        </div>
      </div>
    </section>
  );
}

