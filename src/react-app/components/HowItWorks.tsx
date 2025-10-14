export function HowItWorks() {
  const features = [
    {
      icon: '🎙️',
      title: 'Linha do tempo da planta',
      text: 'Histórico visual e organizado por estágios e dias.'
    },
    {
      icon: '📸',
      title: 'Registro por voz',
      text: 'Fale o que quiser e o My Bud transforma em nota ou tarefa.'
    },
    {
      icon: '🌿',
      title: 'Tarefas e lembretes',
      text: 'Nada fica pra trás: rega, poda, nutrientes no momento certo.'
    }
  ];

  return (
    <section className="section bg-gradient-features" id="how-it-works">
      <div className="container">
        <h2 className="text-center mb-md">Nunca mais se perca no cultivo.</h2>
        <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
          Na correria, anotar tudo é chato — e quando falha, o prejuízo é real. O My Bud registra seu diário de cultivo: fale, tire uma foto, filme e pronto! O app organiza por planta, data e fase. Você vê onde está e o que vem a seguir.
        </p>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginTop: 'var(--spacing-xl)',
          position: 'relative',
          zIndex: 1
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{
                animationDelay: `${index * 0.1}s`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-off-white)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--spacing-md)',
                fontSize: '32px',
                border: '2px solid var(--color-primary)',
                position: 'relative'
              }}>
                <span style={{ fontSize: '48px' }}>{feature.icon}</span>
              </div>
              <h4 className="card-title" style={{ fontSize: '22px', fontWeight: '700' }}>
                {feature.title}
              </h4>
              <p className="card-text" style={{ fontSize: '16px' }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

