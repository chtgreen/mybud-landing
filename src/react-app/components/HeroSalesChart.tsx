import { useEffect, type FC } from 'react';
import { t, tArray } from '../lib/i18n';

interface HeroSalesChartProps {
  variant?: 'light' | 'dark';
}

const HeroSalesChart: FC<HeroSalesChartProps> = ({ variant = 'dark' }) => {
  // no state needed for abstract flow

  useEffect(() => {
    // kickoff animation on mount (no-op placeholder)
    return () => {};
  }, []);

  const isLight = variant === 'light';
  
  // Get translated badges
  const badgeText = t('hero.salesChart.badge');
  const badges = tArray('hero.salesChart.badges');

  // Color tokens per variant
  const bgCard = isLight ? 'bg-white/70 border-gray-200' : 'bg-white/10 border-white/20';
  // reserved text tokens for future overlays if needed
  // const titleText = isLight ? 'text-gray-900' : 'text-white';
  // const subText = isLight ? 'text-gray-700' : 'text-white/90';
  const badgeBase = isLight ? 'bg-gray-100 text-gray-800 border border-gray-200' : 'bg-white/20 text-white/90 border border-white/30';
  const pillBase = isLight ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20';
  const gridStroke = isLight ? 'rgba(156,163,175,0.35)' : 'rgba(255,255,255,0.12)';

  // Curve path (abstract upward growth)
  const width = 420;
  const height = 200;
  const curvePath = `M 0 ${height * 0.8} C ${width * 0.25} ${height * 0.6}, ${width * 0.5} ${height * 0.4}, ${width * 0.75} ${height * 0.35} S ${width * 0.95} ${height * 0.2}, ${width} ${height * 0.25}`;

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
      <style>{`
        @keyframes dashFlow { to { stroke-dashoffset: -1200; } }
        @keyframes floatUp { 0% { transform: translateY(6px); } 50% { transform: translateY(-6px);} 100% { transform: translateY(6px); } }
        @keyframes shimmer { 0% { opacity: .4 } 50% { opacity: 1 } 100% { opacity: .4 } }
      `}</style>
      <div
        className={`relative backdrop-blur-md ${bgCard} rounded-3xl p-6 shadow-2xl w-full border`}
        style={{
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.06) 100%)',
        }}
      >
        {/* Intent badge */}
        <div className={`inline-flex items-center space-x-2 ${badgeBase} px-3 py-1 rounded-full text-xs font-medium mb-4`}> 
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{badgeText}</span>
        </div>

        {/* Abstract growth canvas */}
        <div className="relative">
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="mx-auto">
            <defs>
              <pattern id="softGrid" width="40" height="30" patternUnits="userSpaceOnUse">
                <path d={`M 40 0 L 0 0 0 30`} fill="none" stroke={gridStroke} strokeWidth={0.5} />
              </pattern>
              <linearGradient id="emeraldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Soft grid background */}
            <rect width="100%" height="100%" fill="url(#softGrid)" opacity={isLight ? 0.5 : 0.35} />

            {/* Faint base line as context */}
            <path d={curvePath} fill="none" stroke={isLight ? 'rgba(15,23,42,0.15)' : 'rgba(255,255,255,0.15)'} strokeWidth={3} />

            {/* Glowing growth line */}
            <path
              d={curvePath}
              fill="none"
              stroke="url(#emeraldLine)"
              strokeWidth={4}
              strokeLinecap="round"
              style={{ filter: 'url(#softGlow)' }}
            />

            {/* Flow animation overlay (moving dash) */}
            <path
              d={curvePath}
              fill="none"
              stroke="url(#emeraldLine)"
              strokeWidth={5}
              strokeLinecap="round"
              strokeDasharray="14 24"
              strokeDashoffset={0}
              style={{ animation: 'dashFlow 6s linear infinite' }}
              opacity={0.7}
            />

            {/* Floating particles (abstract, no numbers) */}
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx={width * (0.35 + i * 0.2)}
                cy={height * (0.45 - i * 0.05)}
                r={3 + i}
                fill="#10b981"
                style={{ opacity: 0.85, filter: 'drop-shadow(0 2px 4px rgba(16,185,129,.4))', animation: `floatUp ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>

          {/* Intent badges near curve - now using translations */}
          <div className="pointer-events-none">
            <div className={`absolute -top-2 right-3 ${pillBase} px-3 py-1 rounded-full text-[11px] font-medium`} style={{ animation: 'shimmer 4s ease-in-out infinite' }}>
              {badges[0]}
            </div>
            <div className={`absolute top-12 -right-2 ${pillBase} px-3 py-1 rounded-full text-[11px] font-medium`} style={{ animation: 'shimmer 5s ease-in-out infinite', animationDelay: '0.6s' }}>
              {badges[1]}
            </div>
            <div className={`absolute bottom-6 right-6 ${pillBase} px-3 py-1 rounded-full text-[11px] font-medium`} style={{ animation: 'shimmer 6s ease-in-out infinite', animationDelay: '1.2s' }}>
              {badges[2]}
            </div>
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${pillBase} px-3 py-1 rounded-full text-[11px] font-medium`} style={{ animation: 'shimmer 6.5s ease-in-out infinite', animationDelay: '1.8s' }}>
              {badges[3]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSalesChart; 