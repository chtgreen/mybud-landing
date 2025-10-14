import { useState, useEffect } from 'react';
import { Button } from './Button';

export function FounderKit() {
  const [kitsRemaining, setKitsRemaining] = useState(72);
  
  // Simulate dynamic counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setKitsRemaining(prev => Math.max(50, prev - Math.floor(Math.random() * 2)));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-gradient-lavender-fade" id="founder-kit">
      <div className="container">
        <h2 className="text-center mb-md">Founder Kits: faça parte desde o começo.</h2>
        <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
          Apoie o projeto, garanta acesso antecipado e receba itens colecionáveis feitos pra quem ama a cultura canábica.
        </p>
        
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
            {/* Product Image */}
            <div style={{
              background: 'linear-gradient(135deg, #D5C0FD15 0%, #D5C0FD30 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              border: '2px solid #D5C0FD40'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '100px', marginBottom: 'var(--spacing-md)' }}>📦</div>
                <div style={{ fontSize: '14px', opacity: 0.6, fontWeight: '500' }}>
                  Founder Kit
                  <br />
                  Product Image
                </div>
              </div>
            </div>
            
            {/* Kit Details */}
            <div>
              {/* Badges */}
              <div style={{ 
                display: 'flex', 
                gap: 'var(--spacing-sm)', 
                marginBottom: 'var(--spacing-md)',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  background: '#EB4C80',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(235, 76, 128, 0.3)'
                }}>
                  ✨ Edição Limitada
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  background: '#288664',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(40, 134, 100, 0.3)'
                }}>
                  ⭐ +6 meses Premium incluídos
                </span>
              </div>
              
              {/* Price Box */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--spacing-lg)',
                background: 'white',
                border: '3px solid #D5C0FD',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <h3 style={{ margin: 0 }}>Kit BUD</h3>
                <div style={{ 
                  fontSize: '40px', 
                  fontWeight: '700', 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  R$299
                </div>
              </div>
              
              {/* Benefits */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-xl)',
                paddingBottom: 'var(--spacing-xl)',
                borderBottom: '1px solid var(--color-off-white)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <span style={{ fontSize: '28px' }}>✅</span>
                  <span style={{ fontSize: '17px', fontWeight: '500' }}>6 meses Premium</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <span style={{ fontSize: '28px' }}>👕</span>
                  <span style={{ fontSize: '17px', fontWeight: '500' }}>Camisa exclusiva My Bud</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <span style={{ fontSize: '28px' }}>🚬</span>
                  <span style={{ fontSize: '17px', fontWeight: '500' }}>Piteira premium</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  <span style={{ fontSize: '28px' }}>🖼️</span>
                  <span style={{ fontSize: '17px', fontWeight: '500' }}>Cartaz arte canábica</span>
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                variant="primary" 
                size="large" 
                style={{ 
                  width: '100%', 
                  marginBottom: 'var(--spacing-md)',
                  fontSize: '18px',
                  padding: '20px 32px'
                }}
              >
                🌿 Quero meu Kit BUD + acesso Premium
              </Button>
              
              {/* Animated Counter */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-sm)',
                background: 'linear-gradient(135deg, var(--color-pink) 0%, #c93d6a 100%)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: 'var(--radius-full)',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: 'var(--spacing-md)',
                boxShadow: '0 4px 16px rgba(235, 76, 128, 0.4)',
                animation: 'fadeScaleIn 0.5s ease-out'
              }}>
                <span style={{ fontSize: '24px' }}>⚡</span>
                <span>Restam apenas <span style={{ 
                  fontSize: '22px',
                  textDecoration: 'underline',
                  animation: 'pulse 2s infinite'
                }}>{kitsRemaining}</span> kits</span>
              </div>
              
              <p style={{ fontSize: '13px', opacity: 0.7, textAlign: 'center', lineHeight: '1.5' }}>
                Cada Founder Kit dá direito a entrada antecipada no My Bud + até 6 meses Premium grátis + itens exclusivos que não serão vendidos depois. Estoque limitado, acabou, acabou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
