import { Section } from './Section';
import { Button } from './Button';

export function BetaSignup() {
  return (
    <Section background="gradient-soft" id="beta-signup">
      <h2 className="text-center mb-md">Quer ter acesso gratuito ao beta fechado?</h2>
      
      <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', marginTop: 'var(--spacing-xl)' }}>
        {/* What we expect */}
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h4 className="mb-md">O que esperamos de você:</h4>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)',
            paddingLeft: 0
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>Usar o app alguns minutos por dia</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>Responder 1 formulário semanal (2 min)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>✓</span>
              <span>Topar 1 call de 15 min com o fundador</span>
            </li>
          </ul>
        </div>
        
        {/* What you receive */}
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h4 className="mb-md">O que você recebe:</h4>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)',
            paddingLeft: 0
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>🎁</span>
              <span>Acesso antecipado</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>⭐</span>
              <span>2 meses de Premium no lançamento</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              <span>Suporte direto e prioridade nas melhorias</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Form */}
      <div style={{
        maxWidth: '600px',
        margin: 'var(--spacing-2xl) auto 0',
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: '600' }}>
              Seu melhor e-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--color-off-white)',
                fontSize: '16px',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', fontWeight: '600' }}>
              @seu_instagram <span style={{ opacity: 0.6, fontWeight: '400' }}>(opcional, VIP)</span>
            </label>
            <input
              type="text"
              placeholder="@seu_instagram"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--color-off-white)',
                fontSize: '16px',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>
          
          <Button variant="primary" size="large" type="submit" style={{ width: '100%' }}>
            Quero testar o app
          </Button>
          
          <p style={{ fontSize: '13px', opacity: 0.6, textAlign: 'center', marginTop: 'var(--spacing-sm)' }}>
            Nada de spam. Só dicas boas. Privacidade garantida.
          </p>
        </form>
      </div>
    </Section>
  );
}

