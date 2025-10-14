import { useState, useEffect } from 'react';

export function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: '@Hugo, BA',
      text: '"Falei \'regar planta 2 com FPJ\' e virou tarefa. Brabo."',
      avatar: '🌱'
    },
    {
      name: 'Manu, SP',
      text: '"Agora eu sei exatamente quantos dias de flora tem cada planta."',
      avatar: '🌿'
    },
    {
      name: 'Vinícius, PR',
      text: '"Com o sticker eu não confundo mais as plantas. E fica massa no Insta."',
      avatar: '🪴'
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, white 0%, #E6E7E880 100%)'
    }}>
      <div className="container">
        <h2 className="text-center mb-md">"Quem já testou, recomenda."</h2>
        <p className="text-center subheading mb-xl">
          Antes mesmo do lançamento, o My Bud já organiza cultivos reais.
        </p>
        
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-2xl)',
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--color-primary)',
          background: 'white',
          padding: 'var(--spacing-md) var(--spacing-xl)',
          borderRadius: 'var(--radius-full)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)',
          boxShadow: 'var(--shadow-sm)',
          margin: '0 auto var(--spacing-2xl)'
        }}>
          <span style={{ fontSize: '24px' }}>🌿</span>
          <span>+150 growers já estão usando o My Bud em beta fechado</span>
        </div>
        
        {/* Carousel Container */}
        <div style={{ 
          position: 'relative', 
          maxWidth: '900px', 
          margin: '0 auto',
          padding: '0 var(--spacing-2xl)'
        }}>
          <div style={{ 
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${activeIndex * 100}%)`,
            gap: 'var(--spacing-lg)'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  minWidth: '100%',
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-2xl)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--spacing-lg)',
                  opacity: index === activeIndex ? 1 : 0.5,
                  transition: 'opacity 0.5s ease'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  boxShadow: '0 4px 16px rgba(40, 134, 100, 0.2)'
                }}>
                  {testimonial.avatar}
                </div>
                
                <p style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  maxWidth: '600px',
                  margin: 0
                }}>
                  {testimonial.text}
                </p>
                
                <div style={{ fontWeight: '600', fontSize: '16px', color: 'var(--color-primary)' }}>
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            marginTop: 'var(--spacing-xl)'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: index === activeIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: 'var(--radius-full)',
                  background: index === activeIndex ? 'var(--color-primary)' : 'var(--color-off-white)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
