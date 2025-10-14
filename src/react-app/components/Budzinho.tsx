export function Budzinho() {
  const personas = [
    {
      icon: '🔌',
      title: 'Integração inteligente',
      text: 'Pronto para conectar sensores e IoT.',
      color: '#AAD268',
      emoji: '🌱'
    },
    {
      icon: '👥',
      title: 'Feito em comunidade',
      text: 'Construído com feedback real de cultivadores.',
      color: '#EB4C80',
      emoji: '🚨'
    },
    {
      icon: '✅',
      title: 'Testado no mundo real',
      text: 'Rodando em cultivos reais durante o beta.',
      color: '#D5C0FD',
      emoji: '😊'
    }
  ];

  return (
    <section className="section bg-gradient-soft">
      <div className="container">
        <h2 className="text-center mb-md">Feito de grower, para grower.</h2>
        <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
          O My Bud nasceu da frustração de quem já esqueceu uma rega, perdeu o dia da flora ou confundiu genéticas. É um diário esperto, um assistente que entende sua rotina com leveza, privacidade e respeito à sua liberdade de cultivar.
        </p>
        
        <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img 
              className="budzinho-animated"
              src="/images/budzinho/MyBud - Budzinho Colorido 1.svg" 
              alt="Budzinho"
              style={{ 
                width: '100%', 
                maxWidth: '450px', 
                height: 'auto',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
            {personas.map((persona, index) => (
              <div 
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${persona.color}08 0%, ${persona.color}15 100%)`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  border: `2px solid ${persona.color}20`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.background = `linear-gradient(135deg, ${persona.color}15 0%, ${persona.color}25 100%)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.background = `linear-gradient(135deg, ${persona.color}08 0%, ${persona.color}15 100%)`;
                }}
              >
                <div style={{ 
                  fontSize: '40px', 
                  marginBottom: 'var(--spacing-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}>
                  <span>{persona.icon}</span>
                  <span style={{ fontSize: '24px' }}>→</span>
                  <span>Bud {persona.emoji}</span>
                </div>
                <h4 className="mb-sm" style={{ color: persona.color === '#AAD268' ? '#288664' : 'inherit' }}>
                  {persona.title}
                </h4>
                <p style={{ opacity: 0.7 }}>{persona.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

