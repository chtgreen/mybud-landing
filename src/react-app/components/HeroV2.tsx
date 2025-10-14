import type { FC } from 'react';
import { t } from '../lib/i18n';

interface HeroV2Props {
  onCTAClick: () => void;
}

const HeroV2: FC<HeroV2Props> = ({ onCTAClick }) => {
  return (
    <section className="hero">
      {/* Hero Background - Cannabis Plant Photo (placeholder with overlay) */}
      <div className="hero-background">
        {/* TODO: Add real cannabis plant photo here */}
        <div 
          className="hero-background-image"
          style={{
            background: 'linear-gradient(135deg, rgba(213, 192, 253, 0.2) 0%, rgba(170, 210, 104, 0.15) 50%, rgba(40, 134, 100, 0.1) 100%)',
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            {/* Left: Text & CTAs */}
            <div className="hero-text">
              <h1 className="hero-title animate-fade-in-up">
                {t('hero.title1')} {t('hero.title2')} {t('hero.title3')}
              </h1>
              
              <p className="hero-subtitle animate-fade-in-up delay-1">
                {t('hero.subtitle')}
              </p>

              {/* Microcopy */}
              <p className="hero-microcopy animate-fade-in-up delay-2">
                Cada Founder Kit dá direito a entrada antecipada no My Bud + até 6 meses Premium grátis + itens exclusivos que não serão vendidos depois. Estoque limitado, acabou, acabou.
              </p>

              {/* CTAs */}
              <div className="hero-ctas animate-fade-in-up delay-3">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={onCTAClick}
                >
                  🎁 {t('hero.primaryCta') || 'Quero meu Kit BUD - R$299'}
                </button>
                <button 
                  className="btn btn-secondary btn-lg"
                  onClick={() => {
                    const demo = document.getElementById('demo');
                    if (demo) demo.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ▶️ Assistir à demo (2 min)
                </button>
              </div>

              {/* Scarcity Counter */}
              <div className="hero-scarcity animate-fade-in-up delay-4">
                <span>⚠️ Só</span>
                <span className="hero-scarcity-number">72</span>
                <span>Founder Kits restantes</span>
              </div>

              {/* Trust Badges */}
              <div className="hero-badges animate-fade-in-up delay-5">
                <span className="trust-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Privacidade primeiro
                </span>
                <span className="trust-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                  Dados anônimos
                </span>
                <span className="trust-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                  iOS & Android
                </span>
              </div>
            </div>

            {/* Right: App Screenshot */}
            <div className="hero-image animate-fade-in-right delay-2">
              {/* TODO: Replace with real app screenshot */}
              <div 
                className="hero-phone"
                style={{
                  background: 'linear-gradient(135deg, #288664 0%, #AAD268 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  padding: '40px 20px',
                  textAlign: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>📱</div>
                  <div>App Timeline Screenshot</div>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '10px' }}>
                    (Adicionar screenshot real)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;

