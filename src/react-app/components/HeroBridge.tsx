import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';

interface HeroBridgeProps {
  // Remove onGrowthProgress since we're not updating header anymore
}

const HeroBridge: FC<HeroBridgeProps> = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [autoTooltip, setAutoTooltip] = useState<number | null>(null);
  const [shownTooltips, setShownTooltips] = useState<Set<number>>(new Set());
  const VIEWBOX = { minX: 0, minY: -10, width: 520, height: 170, groupTranslateY: 14 };
  const [isHovering, setIsHovering] = useState(false);

  // Growth data points with better descriptions
  const growthPoints = [
    { x: 20, y: 95, value: 20, description: t('heroBridge.growthPoints.1.description') || "Primeiros growers testando", detail: t('heroBridge.growthPoints.1.detail') || "Validação inicial do produto" },
    { x: 90, y: 85, value: 45, description: t('heroBridge.growthPoints.2.description') || "Crescimento orgânico", detail: t('heroBridge.growthPoints.2.detail') || "Boca a boca funcionando" },
    { x: 160, y: 70, value: 75, description: t('heroBridge.growthPoints.3.description') || "Parcerias estratégicas", detail: t('heroBridge.growthPoints.3.detail') || "Marcas começam a aderir" },
    { x: 230, y: 55, value: 110, description: t('heroBridge.growthPoints.4.description') || "Escala e retenção", detail: t('heroBridge.growthPoints.4.detail') || "Usuários engajados e ativos" },
    { x: 300, y: 40, value: 150, description: t('heroBridge.growthPoints.5.description') || "Expansão de mercado", detail: t('heroBridge.growthPoints.5.detail') || "Novos países e idiomas" },
    { x: 370, y: 25, value: 200, description: t('heroBridge.growthPoints.6.description') || "Consolidação total", detail: t('heroBridge.growthPoints.6.detail') || "Liderança no segmento" },
    { x: 470, y: 10, value: 400, description: t('heroBridge.growthPoints.7.description') || "É só o começo", detail: t('heroBridge.growthPoints.7.detail') || "O potencial real ainda está por vir" }
  ];

  useEffect(() => {
    const element = document.getElementById('hero-bridge');
    if (!element) return;

    // Intersection Observer to detect when component becomes visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            setIsVisible(true);
            // Start time-based animation when component becomes visible
            startTimeBasedAnimation();
          }
        } else {
          // Reset when component goes out of view
          setIsVisible(false);
          setAnimationProgress(0);
          setActiveTooltip(null);
          setAutoTooltip(null);
          setShownTooltips(new Set());
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const startTimeBasedAnimation = () => {
    const animationDuration = 15000; // 15 seconds total animation for better pacing
    const startTime = Date.now();
    let currentTooltipIndex = 0;
    let tooltipStartTime = 0;
    const tooltipDuration = 2500; // 2.5 seconds per tooltip

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setAnimationProgress(progress);

      // Show auto tooltip progression - one at a time, sequentially
      const totalPoints = growthPoints.length;
      const timePerPoint = animationDuration / totalPoints;
      const shouldShowTooltipIndex = Math.floor(elapsed / timePerPoint);
      
      // Only show tooltip if we haven't shown this one yet and we're not hovering
      if (!isHovering && shouldShowTooltipIndex < totalPoints && shouldShowTooltipIndex !== currentTooltipIndex) {
        // Clear current tooltip
        setAutoTooltip(null);
        
        // Set new tooltip after a brief pause
        setTimeout(() => {
          if (!isHovering) {
            setAutoTooltip(shouldShowTooltipIndex);
            setShownTooltips(prev => new Set([...prev, shouldShowTooltipIndex]));
            currentTooltipIndex = shouldShowTooltipIndex;
            tooltipStartTime = currentTime;
          }
        }, 200);
      }

      // Hide current tooltip after its duration
      if (autoTooltip !== null && currentTime - tooltipStartTime > tooltipDuration && !isHovering) {
        setAutoTooltip(null);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Generate the progressive path based on animation progress
  const generateProgressivePath = () => {
    if (growthPoints.length < 2) return '';
    
    const totalProgress = Math.max(0, Math.min(1, animationProgress));
    const totalPoints = growthPoints.length - 1;
    const currentSegment = totalProgress * totalPoints;
    const numCompletePoints = Math.floor(currentSegment) + 1;
    const segmentProgress = currentSegment - Math.floor(currentSegment);
    
    if (numCompletePoints < 2) return '';
    
    // Get the complete points
    const activePoints = growthPoints.slice(0, numCompletePoints);
    
    // If we're partway through a segment, interpolate the final point
    if (segmentProgress > 0 && numCompletePoints < growthPoints.length) {
      const prevPoint = growthPoints[numCompletePoints - 1];
      const nextPoint = growthPoints[numCompletePoints];
      
      const interpolatedPoint = {
        x: prevPoint.x + (nextPoint.x - prevPoint.x) * segmentProgress,
        y: prevPoint.y + (nextPoint.y - prevPoint.y) * segmentProgress,
        value: Math.round(prevPoint.value + (nextPoint.value - prevPoint.value) * segmentProgress),
        description: prevPoint.description,
        detail: prevPoint.detail
      };
      
      activePoints[activePoints.length - 1] = interpolatedPoint;
    }
    
    let path = `M ${activePoints[0].x} ${activePoints[0].y}`;
    for (let i = 1; i < activePoints.length; i++) {
      const prev = activePoints[i - 1];
      const curr = activePoints[i];
      const cp1x = prev.x + (curr.x - prev.x) * 0.4;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.4;
      const cp2y = curr.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return path;
  };

  const getVisiblePoints = () => {
    const totalProgress = Math.max(0, Math.min(1, animationProgress));
    const totalPoints = growthPoints.length - 1;
    const currentSegment = totalProgress * totalPoints;
    const numVisible = Math.min(growthPoints.length, Math.floor(currentSegment) + 1);
    return growthPoints.slice(0, numVisible);
  };

  const handlePointClick = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index);
    setAutoTooltip(null); // Clear auto tooltip when manually clicking
  };

  const getLabelY = (y: number, isLastPoint = false) => {
    // Always position labels above the point, but with padding from top edge
    // Give the last point (+400%) more space above
    const offset = isLastPoint ? 20 : 15;
    const minY = isLastPoint ? -5 : 5;
    return Math.max(y - offset, minY);
  };
  
  const getRectY = (y: number, isLastPoint = false) => {
    // Always position rectangles above the point, but with padding from top edge  
    // Give the last point (+400%) more space above
    const offset = isLastPoint ? 32 : 27;
    const minY = isLastPoint ? -17 : -7;
    return Math.max(y - offset, minY);
  };

  const Icon = ({ path, className = '' }: { path: string; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );

  return (
    <div id="hero-bridge" className="relative w-full max-w-2xl">
      {/* Scroll-Responsive Growth Chart */}
      <div className="relative">
        <svg viewBox="0 -10 520 170" className="w-full h-48" onMouseMove={(e) => {
            const svg = e.currentTarget;
            const rect = svg.getBoundingClientRect();
            const xPx = e.clientX - rect.left;
            const yPx = e.clientY - rect.top;
            const x = VIEWBOX.minX + (xPx / rect.width) * VIEWBOX.width;
            const y = VIEWBOX.minY + (yPx / rect.height) * VIEWBOX.height;
            const yInGroup = y - VIEWBOX.groupTranslateY;
            const visible = getVisiblePoints();
            if (visible.length === 0) return;
            let nearestIndex = 0;
            let nearestDist = Infinity;
            visible.forEach((p, i) => {
              const dx = p.x - x;
              const dy = p.y - yInGroup;
              const d = dx*dx + dy*dy;
              if (d < nearestDist) { nearestDist = d; nearestIndex = i; }
            });
            setIsHovering(true);
            setActiveTooltip(nearestIndex);
            setAutoTooltip(null);
          }}
          onMouseLeave={() => { setIsHovering(false); setActiveTooltip(null); }}
        >
          <style>{`
            @keyframes floatSlow { 0% { transform: translateY(0px) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0px) } }
            @keyframes bubbleRise { 0% { transform: translateY(12px); opacity: .15 } 50% { opacity: .25 } 100% { transform: translateY(-12px); opacity: .1 } }
            @keyframes shimmer { 0% { stop-color: #34d399 } 50% { stop-color: #10b981 } 100% { stop-color: #34d399 } }
          `}</style>

          <defs>
            {/* Gradient for the growth line (animated stops for subtle shimmer) */}
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399">
                <animate attributeName="stop-color" values="#34d399;#10b981;#34d399" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#10b981">
                <animate attributeName="stop-color" values="#10b981;#059669;#10b981" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#059669">
                <animate attributeName="stop-color" values="#059669;#34d399;#059669" dur="6s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            {/* Gradient for the area under curve */}
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.06" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="growthGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* translate down to avoid clipping top labels */}
          <g transform="translate(0,14)">
            {/* Hover overlay area to capture events inside group bounds */}
            <rect x="0" y="0" width="520" height="140" fill="transparent" pointerEvents="all" />
            {/* Subtle floating bubbles behind the curve */}
            <g opacity="0.35">
              <circle cx="70" cy="80" r="10" fill="#34d399">
                <animateTransform attributeName="transform" type="translate" values="0 8; 0 -8; 0 8" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="50" r="8" fill="#10b981">
                <animateTransform attributeName="transform" type="translate" values="0 -6; 0 6; 0 -6" dur="7s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="70" r="12" fill="#059669" opacity="0.25">
                <animateTransform attributeName="transform" type="translate" values="0 10; 0 -10; 0 10" dur="9s" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="30" r="9" fill="#34d399" opacity="0.3">
                <animateTransform attributeName="transform" type="translate" values="0 6; 0 -6; 0 6" dur="10s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Grid lines */}
            <g stroke="rgba(0,0,0,0.06)" strokeWidth="0.5">
              <line x1="20" y1="110" x2="500" y2="110" />
              <line x1="20" y1="85" x2="500" y2="85" />
              <line x1="20" y1="60" x2="500" y2="60" />
              <line x1="20" y1="35" x2="500" y2="35" />
              <line x1="20" y1="10" x2="500" y2="10" />
            </g>

            {/* Area under the curve */}
            <path
              d={`${generateProgressivePath()} L 470 110 L 20 110 Z`}
              fill="url(#areaGradient)"
              className={`transition-all duration-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transition: 'opacity 0.5s ease-out',
                opacity: isVisible && animationProgress > 0.1 ? 1 : 0
              }}
            />

            {/* Main growth curve */}
            <path
              d={generateProgressivePath()}
              fill="none"
              stroke="url(#growthGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#growthGlow)"
              className={`transition-all duration-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                strokeDasharray: '800', 
                strokeDashoffset: isVisible ? `${800 * (1 - animationProgress)}` : '800',
                transition: 'opacity 0.5s ease-out'
              }}
            />

            {/* Data points and labels (with clipping protection) */}
            {getVisiblePoints().map((point, index) => {
              const pointProgress = Math.max(0, Math.min(1, (animationProgress * growthPoints.length) - index));
              const isPointVisible = pointProgress > 0;
              
              return (
                <g key={index}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="#059669"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`transition-all duration-300 ease-out cursor-pointer hover:r-7`}
                    style={{ 
                      opacity: isPointVisible ? 1 : 0,
                      transform: isPointVisible ? 'scale(1)' : 'scale(0)',
                      transformOrigin: `${point.x}px ${point.y}px`, 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                    }}
                    onClick={() => handlePointClick(index)}
                  />
                  <g 
                    className="transition-all duration-300"
                    style={{ 
                      opacity: isPointVisible ? 1 : 0,
                      transform: isPointVisible ? 'scale(1)' : 'scale(0.8)',
                      transformOrigin: `${point.x}px ${point.y}px`
                    }}
                  >
                    <rect x={point.x - 24} y={getRectY(point.y, index === growthPoints.length - 1)} width="48" height="20" rx="10" fill="rgba(255,255,255,0.95)" stroke="rgba(5,150,105,0.25)" strokeWidth="1" />
                    <text x={point.x} y={getLabelY(point.y, index === growthPoints.length - 1)} textAnchor="middle" className="text-[11px] font-bold fill-emerald-700">
                      +{point.value}%
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Shimmering success specks */}
            {[...Array(8)].map((_, i) => (
              <circle key={`spec-${i}`} cx={450 + i * 4} cy={8 + (i % 3) * 3} r="1.8" fill="#34d399" opacity="0.9">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </svg>

        {/* Tooltips */}
        {growthPoints.map((point, index) => {
          const isPointVisible = index < getVisiblePoints().length;
          const shouldShow = (activeTooltip === index) || (autoTooltip === index);
          if (!shouldShow || !isPointVisible) return null;
          
          return (
            <div
              key={`tooltip-${index}`}
              className="absolute z-10 pointer-events-none"
              style={{
                left: `${(point.x / 520) * 100}%`,
                top: `${((point.y - 15) / 170) * 100}%`,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="bg-white rounded-lg shadow-lg border-2 border-emerald-500 p-3 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-700 font-bold text-sm">+{point.value}%</span>
                </div>
                <div className="text-gray-800 font-medium text-sm mb-1">
                  {point.description}
                </div>
                <div className="text-gray-600 text-xs">
                  {point.detail}
                </div>
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-emerald-500"></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-2px] w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle benefits row with SVG icons (no emojis, no boxes) */}
      <div className={`mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <div className="flex items-center gap-2 text-emerald-800/90">
          <Icon className="w-4 h-4 text-emerald-600" path="M3 12l6 6L21 6" />
          <span className="text-xs font-medium">{t('heroBridge.benefits.continuous') || 'Crescimento contínuo'}</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-800/90">
          <Icon className="w-4 h-4 text-emerald-600" path="M12 19V5m0 0l-5 5m5-5l5 5" />
          <span className="text-xs font-medium">{t('heroBridge.benefits.trend') || 'Tendência positiva'}</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-800/90">
          <Icon className="w-4 h-4 text-emerald-600" path="M4 12h16M4 12a8 8 0 0116 0" />
          <span className="text-xs font-medium">{t('heroBridge.benefits.data') || 'Dados reais'}</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-800/90">
          <Icon className="w-4 h-4 text-emerald-600" path="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-9 8a6 6 0 0110 0" />
          <span className="text-xs font-medium">{t('heroBridge.benefits.evolution') || 'Evolução juntos'}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBridge; 