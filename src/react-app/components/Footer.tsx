export function Footer() {
  return (
    <footer className="section bg-primary" style={{ color: 'white' }}>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          {/* Logo & Tagline */}
          <div>
            <img 
              src="/images/logos/MyBud - Logo 5.svg" 
              alt="MyBud" 
              style={{ 
                height: '40px', 
                marginBottom: 'var(--spacing-md)',
                filter: 'brightness(0) invert(1)'
              }}
            />
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              De grower, para grower.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: '16px', 
              marginBottom: 'var(--spacing-md)',
              color: 'white'
            }}>
              Links
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-sm)',
              fontSize: '14px'
            }}>
              <a 
                href="#about" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s'
                }}
              >
                Sobre
              </a>
              <a 
                href="#privacy" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8
                }}
              >
                Política de Privacidade
              </a>
              <a 
                href="#terms" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8
                }}
              >
                Termos de Uso
              </a>
              <a 
                href="#eula" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8
                }}
              >
                EULA
              </a>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 style={{ 
              fontSize: '16px', 
              marginBottom: 'var(--spacing-md)',
              color: 'white'
            }}>
              Contato
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-sm)',
              fontSize: '14px'
            }}>
              <a 
                href="mailto:hello@mybud.app" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8
                }}
              >
                hello@mybud.app
              </a>
              <a 
                href="mailto:comercial@mybud.app" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.8
                }}
              >
                comercial@mybud.app
              </a>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)' }}>
                <a href="#instagram" style={{ fontSize: '24px' }}>📷</a>
                <a href="#twitter" style={{ fontSize: '24px' }}>🐦</a>
                <a href="#linkedin" style={{ fontSize: '24px' }}>💼</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: 'var(--spacing-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          opacity: 0.7,
          flexWrap: 'wrap',
          gap: 'var(--spacing-md)'
        }}>
          <div>
            © 2024 MyBud. Todos os direitos reservados.
          </div>
          <div>
            by <a href="https://cht.green" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>cht.green</a> 🇧🇷
          </div>
        </div>
        
        {/* Legal Notice */}
        <div style={{
          marginTop: 'var(--spacing-lg)',
          fontSize: '12px',
          opacity: 0.6,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'var(--spacing-lg)'
        }}>
          O My Bud é uma ferramenta de organização e registro. Respeite a legislação local.
        </div>
      </div>
    </footer>
  );
}

