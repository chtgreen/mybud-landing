import { Button } from './Button';

export function Hero() {
  return (
    <>
      {/* Beta Alert Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        fontSize: '14px',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <strong>Junte-se aos primeiros growers:</strong> o My Bud ainda está em beta, mas quem entra agora tem prioridade, voz ativa nas melhorias e acesso premium garantido.
      </div>

      <section className="section bg-gradient-hero" style={{ 
        minHeight: '100vh',
        paddingTop: 'calc(var(--spacing-4xl) + 40px)', // Account for fixed bar
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
            {/* Left Column - Content */}
            <div className="animate-fade-in-up">
              <div className="mb-xl">
                <img 
                  src="/images/logos/MyBud - Logo 1.svg" 
                  alt="MyBud" 
                  style={{ height: '56px', marginBottom: 'var(--spacing-xl)' }}
                />
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(48px, 7vw, 64px)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.1'
              }}>
                My Bud. Você cuida das plantas, a gente cuida do resto.
              </h1>
              
              <p className="subheading" style={{ 
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-xl)',
                maxWidth: '580px'
              }}>
                Transforme voz, fotos e vídeos em registros automáticos do seu cultivo. Timeline por planta, estágios com contador de dias e lembretes que funcionam. Da semente à colheita, sem perder nada.
              </p>
              
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
                <Button 
                  variant="primary" 
                  size="large" 
                  href="#founder-kit"
                  style={{
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 16px rgba(40, 134, 100, 0.2)'
                  }}
                >
                  🌿 Quero meu Kit Founder
                </Button>
                <Button 
                  variant="secondary" 
                  size="large" 
                  href="#demo"
                >
                  ▶ Ver o app em ação
                </Button>
              </div>
              
              <p style={{ 
                fontSize: '14px', 
                opacity: 0.7, 
                maxWidth: '500px',
                marginBottom: 'var(--spacing-md)'
              }}>
                Cada Founder Kit dá direito a entrada antecipada no My Bud + até 6 meses Premium grátis + itens exclusivos que não serão vendidos depois. Estoque limitado, acabou, acabou.
              </p>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                background: 'var(--color-pink)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '15px',
                fontWeight: '600',
                marginBottom: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(235, 76, 128, 0.3)'
              }}>
                ⚡ Só 72 Founder Kits restantes
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: 'var(--spacing-md)', 
                fontSize: '13px',
                opacity: 0.6,
                flexWrap: 'wrap'
              }}>
                <span>🔒 Privacidade primeiro</span>
                <span>•</span>
                <span>📊 Dados anônimos</span>
                <span>•</span>
                <span>📱 iOS & Android (em breve)</span>
              </div>
            </div>
            
            {/* Right Column - Mockup */}
            <div className="animate-fade-in-up" style={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animationDelay: '0.2s'
            }}>
              {/* Phone mockup with breathing animation */}
              <div className="phone-mockup" style={{
                position: 'relative',
                zIndex: 2,
                transform: 'scale(1.3)' // 30% larger
              }}>
                <div style={{
                  width: '280px',
                  height: '560px',
                  background: 'white',
                  borderRadius: '32px',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
                  border: '8px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  {/* Phone notch */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '24px',
                    background: '#000',
                    borderRadius: '0 0 16px 16px'
                  }}></div>
                  
                  {/* Placeholder content */}
                  <div style={{ 
                    textAlign: 'center',
                    color: 'var(--color-primary)',
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>
                    <div style={{ fontSize: '14px', opacity: 0.6 }}>
                      App Screenshot
                      <br />
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Budzinho behind - animated, peeking, with glow */}
              <div className="budzinho-animated glow-pulse" style={{
                position: 'absolute',
                right: '-15%',
                bottom: '-8%',
                opacity: 0.5,
                zIndex: 1,
                cursor: 'pointer'
              }}>
                <img 
                  src="/images/budzinho/MyBud - Budzinho Colorido 2.svg"
                  alt=""
                  style={{ 
                    width: '300px', 
                    height: 'auto',
                    filter: 'drop-shadow(0 0 20px rgba(170, 210, 104, 0.4))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator hide-mobile">
          <span style={{ fontSize: '12px', opacity: 0.6 }}>Role para explorar</span>
          <span style={{ fontSize: '24px' }}>↓</span>
        </div>
      </section>
    </>
  );
}
