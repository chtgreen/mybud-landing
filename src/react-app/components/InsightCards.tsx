import type { FC } from 'react';

interface Insight {
  type: 'warning' | 'info' | 'success' | 'error';
  icon: string;
  message: string;
  action?: string;
}

const insights: Insight[] = [
  { 
    type: "warning", 
    icon: "⚠️", 
    message: "Temperature above 32°C - increase ventilation for optimal growth",
    action: "Adjust climate"
  },
  { 
    type: "info", 
    icon: "💡", 
    message: "Week 6 flowering - perfect time to check trichome development",
    action: "Track trichomes"
  },
  { 
    type: "success", 
    icon: "✅", 
    message: "VPD in optimal range (0.8-1.2) - excellent growing conditions",
  },
  { 
    type: "info", 
    icon: "🌱", 
    message: "Your vegetating plants are thriving! Consider LST training for better structure",
    action: "Learn more"
  },
];

const insightStyles = {
  warning: {
    border: "border-orange-400",
    bg: "bg-orange-50",
    text: "text-orange-900",
    badge: "bg-orange-100 text-orange-700"
  },
  info: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-900",
    badge: "bg-blue-100 text-blue-700"
  },
  success: {
    border: "border-green-400",
    bg: "bg-green-50",
    text: "text-green-900",
    badge: "bg-green-100 text-green-700"
  },
  error: {
    border: "border-red-400",
    bg: "bg-red-50",
    text: "text-red-900",
    badge: "bg-red-100 text-red-700"
  }
};

interface InsightCardsProps {
  className?: string;
  limit?: number;
}

export const InsightCards: FC<InsightCardsProps> = ({ className = '', limit }) => {
  const displayInsights = limit ? insights.slice(0, limit) : insights;
  
  return (
    <div className={`space-y-4 ${className}`}>
      {displayInsights.map((insight, i) => {
        const styles = insightStyles[insight.type];
        
        return (
          <div 
            key={i} 
            className={`${styles.bg} ${styles.border} border-l-4 rounded-r-xl p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:shadow-md transition-all duration-300 hover:translate-x-1 group cursor-pointer`}
          >
            <span className="text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
              {insight.icon}
            </span>
            <div className="flex-1 min-w-0">
              <p className={`${styles.text} text-sm md:text-base leading-relaxed`}>
                {insight.message}
              </p>
              {insight.action && (
                <button className={`${styles.badge} text-xs font-medium px-3 py-1 rounded-full mt-2 hover:scale-105 transition-transform`}>
                  {insight.action} →
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InsightCards;

