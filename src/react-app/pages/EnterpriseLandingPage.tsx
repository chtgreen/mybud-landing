import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
import HeroEnterprise from '../components/HeroEnterprise';
import Footer from '../components/Footer';
import BetaModal from '../components/BetaModal';
import FAQ from '../components/FAQ';
import B2BLeadForm from '../components/B2BLeadForm';

// Enterprise Calendar URL
const ENTERPRISE_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function EnterpriseLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  useScrollEnhancement();

  useEffect(() => {
    // Track page view with unified analytics (PostHog + GA4)
    trackPageView(window.location.pathname, 'MyBud - Enterprise Landing Page');

    // Legacy PostHog tracking
    posthog.capture('enterprise_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Track CTA click with unified analytics (PostHog + GA4)
    trackCTAClick({
      ctaName: 'Schedule Enterprise Demo',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Agendar Demonstração',
      destinationUrl: ENTERPRISE_CALENDAR_URL,
      customProperties: {
        page_type: 'enterprise',
        action: 'calendar_redirect',
        language: currentLanguage
      }
    });

    // Legacy PostHog tracking
    posthog.capture('enterprise_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });

    // Redirect to calendar booking
    window.open(ENTERPRISE_CALENDAR_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO pageType="enterprise" />
      <Header onLanguageChange={changeLanguage} isEnterprise onCTAClick={handleCTAClick} />

      <HeroEnterprise onCTAClick={handleCTAClick} /> {/* Section 1: Hero Enterprise */}
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-800">
              {/* i18n: enterprise.benefits.title */}
              Seus dados, suas regras.
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              {/* i18n: enterprise.benefits.subtitle */}
              Nosso papel é simplificar, não se apropriar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 6 benefits grid */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Rastreabilidade completa
              </h3>
              <p className="text-zinc-600">
                Histórico por planta, lote e paciente. Do clone à colheita, tudo documentado.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Padronização de processos
              </h3>
              <p className="text-zinc-600">
                Cronogramas customizados, relatórios automáticos e auditorias internas simplificadas.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Gestão multiusuário
              </h3>
              <p className="text-zinc-600">
                Perfis de membros, técnicos e médicos com permissões específicas.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Dados sob controle
              </h3>
              <p className="text-zinc-600">
                Armazenamento dedicado, exportação a qualquer momento. Seus dados, suas regras.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Privacidade total
              </h3>
              <p className="text-zinc-600">
                Nenhum dado compartilhado sem consentimento. LGPD-ready desde o design.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-zinc-800">
                Integração futura
              </h3>
              <p className="text-zinc-600">
                Sensores ambientais, QR codes, APIs de ERP e compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-800">
              Organize, padronize e cresça com segurança.
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              O Mybud Enterprise é a ponte entre o cultivo e a gestão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-zinc-800">
                Gestão de cultivos e equipes
              </h3>
              <p className="text-zinc-600">
                Cada cultivo com responsáveis, tarefas, protocolos e alertas de SLA. Controle total sem complicação.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-zinc-800">
                Relatórios automatizados
              </h3>
              <p className="text-zinc-600">
                Relatórios médicos e agronômicos em poucos cliques, sempre prontos para auditoria.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-zinc-800">
                Rastreabilidade e compliance
              </h3>
              <p className="text-zinc-600">
                Histórico completo de cada planta, paciente e lote para manter conformidade.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-zinc-800">
                Integração com parceiros
              </h3>
              <p className="text-zinc-600">
                Conecte fabricantes, clínicas e laboratórios sem atrito operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 border border-emerald-200">
            <p className="text-2xl italic text-zinc-800 mb-6 text-center leading-relaxed">
              "Com o Mybud, conseguimos padronizar relatórios e reduzir 60% do tempo de gestão por cultivo."
            </p>
            <p className="text-center text-zinc-600">
              — <span className="font-medium">Associação Beta</span>, Case piloto
            </p>
          </div>
        </div>
      </section>

      <FAQ background="gray" /> {/* Section: FAQ */}
      <B2BLeadForm background="white" /> {/* Section: Lead Form */}
      <Footer />

      {showModal && (
        <BetaModal open={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

