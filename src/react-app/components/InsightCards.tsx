import type { FC } from 'react';
import type { LucideIcon } from './icons';
import { AlertTriangle, CheckCircle2, Lightbulb, Sprout } from './icons';

interface Insight {
  type: 'warning' | 'info' | 'success' | 'error';
  icon: LucideIcon;
  message: string;
  action?: string;
}

const insights: Insight[] = [
  { 
    type: "warning", 
    icon: AlertTriangle, 
    message: "Temperatura acima de 32°C — aumente a ventilação para manter o vigor",
    action: "Ajustar clima"
  },
  { 
    type: "info", 
    icon: Lightbulb, 
    message: "Semana 6 de floração — momento perfeito para checar o desenvolvimento dos tricomas",
    action: "Registrar tricomas"
  },
  { 
    type: "success", 
    icon: CheckCircle2, 
    message: "VPD na faixa ideal (0,8-1,2) — condições excelentes de cultivo",
  },
  { 
    type: "info", 
    icon: Sprout, 
    message: "Suas plantas no vegetativo estão voando! Considere LST para melhorar a estrutura",
    action: "Ver como fazer"
  },
];

const insightStyles = {
  warning: {
    border: "border-orange-400",
    bg: "bg-orange-50",
    text: "text-orange-900",
    badge: "bg-orange-100 text-orange-700",
    icon: "text-orange-500"
  },
  info: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-900",
    badge: "bg-blue-100 text-blue-700",
    icon: "text-blue-500"
  },
  success: {
    border: "border-green-400",
    bg: "bg-green-50",
    text: "text-green-900",
    badge: "bg-green-100 text-green-700",
    icon: "text-green-500"
  },
  error: {
    border: "border-red-400",
    bg: "bg-red-50",
    text: "text-red-900",
    badge: "bg-red-100 text-red-700",
    icon: "text-red-500"
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
        const Icon = insight.icon;

        return (
          <div 
            key={i} 
            className={`${styles.bg} ${styles.border} border-l-4 rounded-r-xl p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:shadow-md transition-all duration-300 hover:translate-x-1 group cursor-pointer`}
          >
            <Icon
              className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:scale-110 transition-transform ${styles.icon}`}
              aria-hidden="true"
            />
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
