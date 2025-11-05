import type { FC } from 'react';
import { useState } from 'react';
import { InsightCards } from './InsightCards';
import { ActivityFeed } from './ActivityFeed';
import { ExpandableModal } from './ExpandableModal';
import { t } from '../lib/i18n';
import {
  BarChart3,
  BookOpenCheck,
  Bot,
  Lightbulb,
  Microscope,
  NotebookPen,
  Target,
} from './icons';

interface InsightsSectionProps {
  onActivate?: () => void;
}

const InsightsSection: FC<InsightsSectionProps> = ({ onActivate }) => {
  const [showInsightsModal, setShowInsightsModal] = useState(false);
  const [showActivitiesModal, setShowActivitiesModal] = useState(false);

  const handleActivateClick = () => {
    if (onActivate) {
      onActivate();
      return;
    }

    const betaSection = document.getElementById('beta');
    betaSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
            <Bot className="w-5 h-5 text-blue-700" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-700">{t('insights.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            {t('insights.title')}<br />
            <span className="text-emerald-600">{t('insights.titleHighlight')}</span>
          </h2>
          
          {/* Subtitle */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
            <img
              src="/MyBud - Budzinho Colorido 2.png"
              alt={t('insights.altImage')}
              className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_12px_24px_rgba(40,134,100,0.25)] rounded-full object-cover"
            />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              {t('insights.subtitle')}
            </p>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('insights.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto mb-20">
          {/* Left - Insights Preview com sombra elevada */}
          <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300 p-8 border border-emerald-100/50 relative flex flex-col h-full">
            {/* Budzinho acenando no canto */}
            <div className="absolute -top-6 -right-6 w-16 h-16">
              <img 
                src="/MyBud - Budzinho Colorido 2.png" 
                alt="Budzinho acenando"
                className="w-full h-full object-contain drop-shadow-lg animate-bounce"
                style={{ 
                  animation: 'wave 2s ease-in-out infinite',
                  transformOrigin: 'bottom right'
                }}
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-black">
                {t('insights.smartRecommendations')}
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                {t('insights.aiPowered')}
              </span>
            </div>
            
            {/* Show only 2 insights */}
            <div className="flex-1">
              <InsightCards limit={2} />
            </div>
            
            {/* See More Button */}
            <button
              onClick={() => setShowInsightsModal(true)}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-emerald-50 to-blue-50 hover:from-emerald-100 hover:to-blue-100 text-emerald-700 font-semibold rounded-xl transition-all duration-300 hover:shadow-md border border-emerald-200"
            >
              {t('insights.seeAllRecommendations')}
            </button>
          </div>

          {/* Right - Activity Feed Preview com sombra elevada */}
          <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300 p-8 border border-blue-100/50 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-black">
                {t('activityFeed.title')}
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                {t('activityFeed.liveBadge')}
              </span>
            </div>
            
            {/* Show only 3 activities */}
            <div className="flex-1">
              <ActivityFeed limit={3} compact={true} />
            </div>
            
            {/* See More Button */}
            <button
              onClick={() => setShowActivitiesModal(true)}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 font-semibold rounded-xl transition-all duration-300 hover:shadow-md border border-blue-200"
            >
              {t('insights.viewAllActivities')}
            </button>
          </div>
        </div>

        {/* Modals */}
        <ExpandableModal
          isOpen={showInsightsModal}
          onClose={() => setShowInsightsModal(false)}
          title={t('insights.smartRecommendations')}
        >
          <InsightCards />
          <div className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {t('insights.contextInsights')}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('insights.contextDescription')}
                </p>
              </div>
            </div>
          </div>
        </ExpandableModal>

        <ExpandableModal
          isOpen={showActivitiesModal}
          onClose={() => setShowActivitiesModal(false)}
          title={t('activityFeed.title')}
        >
          <ActivityFeed onViewAll={handleActivateClick} />
        </ExpandableModal>

        {/* Features Grid - Cards mais elevados com contraste */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {/* Feature 1 */}
          <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(40,134,100,0.15)] border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h4 className="font-bold text-black mb-2">{t('insights.features.byStage.title')}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('insights.features.byStage.description')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(40,134,100,0.15)] border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h4 className="font-bold text-black mb-2">{t('insights.features.monitoring.title')}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('insights.features.monitoring.description')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(40,134,100,0.15)] border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Microscope className="w-7 h-7 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h4 className="font-bold text-black mb-2">{t('insights.features.detection.title')}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('insights.features.detection.description')}
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(40,134,100,0.15)] border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpenCheck className="w-7 h-7 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h4 className="font-bold text-black mb-2">{t('insights.features.learning.title')}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('insights.features.learning.description')}
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            {t('insights.howItWorks')}
          </h3>
          
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
            {/* Step 1 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <NotebookPen className="w-8 h-8 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mb-2">
                  1
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">{t('insights.steps.step1.title')}</h4>
              <p className="text-sm text-gray-600">
                {t('insights.steps.step1.description')}
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:px-2">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mb-2">
                  2
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">{t('insights.steps.step2.title')}</h4>
              <p className="text-sm text-gray-600">
                {t('insights.steps.step2.description')}
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:px-2">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-emerald-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mb-2">
                  3
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">{t('insights.steps.step3.title')}</h4>
              <p className="text-sm text-gray-600">
                {t('insights.steps.step3.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              1000+
            </div>
            <p className="text-gray-600">{t('insights.stats.expertRules')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              19
            </div>
            <p className="text-gray-600">{t('insights.stats.metrics')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              9
            </div>
            <p className="text-gray-600">{t('insights.stats.stages')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
              24/7
            </div>
            <p className="text-gray-600">{t('insights.stats.monitoring')}</p>
          </div>
        </div>

        {/* CTA - Verde escuro primário */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            {t('insights.ctaText')} <strong className="text-emerald-700">{t('insights.ctaHighlight')}</strong>
          </p>
          <button
            onClick={handleActivateClick}
            className="px-10 py-5 bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-bold rounded-xl shadow-[0_8px_30px_rgba(5,150,105,0.3)] hover:shadow-[0_12px_40px_rgba(5,150,105,0.4)] transition-all duration-300 hover:scale-105"
          >
            {t('insights.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
