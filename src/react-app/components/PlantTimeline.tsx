import type { FC } from 'react';
import { t } from '../lib/i18n';

interface Stage {
  icon: string;
  name: string;
  nameKey: string;
  duration: string;
  color: string;
  bgColor: string;
}

const stages: Stage[] = [
  { 
    icon: "🌰", 
    name: "Germinating", 
    nameKey: "timeline.germinating",
    duration: "3-7d", 
    color: "text-amber-700",
    bgColor: "bg-amber-100 hover:bg-amber-200"
  },
  { 
    icon: "🌱", 
    name: "Rooting", 
    nameKey: "timeline.rooting",
    duration: "7-14d", 
    color: "text-green-700",
    bgColor: "bg-green-100 hover:bg-green-200"
  },
  { 
    icon: "🌿", 
    name: "Vegetating", 
    nameKey: "timeline.vegetating",
    duration: "3-8w", 
    color: "text-emerald-700",
    bgColor: "bg-emerald-100 hover:bg-emerald-200"
  },
  { 
    icon: "🌸", 
    name: "Flowering", 
    nameKey: "timeline.flowering",
    duration: "8-12w", 
    color: "text-purple-700",
    bgColor: "bg-purple-100 hover:bg-purple-200"
  },
  { 
    icon: "✂️", 
    name: "Harvested", 
    nameKey: "timeline.harvested",
    duration: "", 
    color: "text-blue-700",
    bgColor: "bg-blue-100 hover:bg-blue-200"
  },
  { 
    icon: "⏳", 
    name: "Drying", 
    nameKey: "timeline.drying",
    duration: "7-14d", 
    color: "text-orange-700",
    bgColor: "bg-orange-100 hover:bg-orange-200"
  },
  { 
    icon: "💨", 
    name: "Curing", 
    nameKey: "timeline.curing",
    duration: "2-4w+", 
    color: "text-cyan-700",
    bgColor: "bg-cyan-100 hover:bg-cyan-200"
  },
  { 
    icon: "✅", 
    name: "Finished", 
    nameKey: "timeline.finished",
    duration: "", 
    color: "text-teal-700",
    bgColor: "bg-teal-100 hover:bg-teal-200"
  },
];

interface PlantTimelineProps {
  className?: string;
  compact?: boolean;
}

export const PlantTimeline: FC<PlantTimelineProps> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline Container */}
      <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            {/* Stage Card */}
            <div 
              className={`${stage.bgColor} rounded-2xl p-4 ${compact ? 'min-w-[120px]' : 'min-w-[140px] md:min-w-[160px]'} text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group`}
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {stage.icon}
              </div>
              <div className={`font-semibold ${stage.color} text-sm md:text-base`}>
                {stage.name}
              </div>
              {stage.duration && (
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {stage.duration}
                </div>
              )}
            </div>
            
            {/* Arrow */}
            {i < stages.length - 1 && (
              <svg 
                className="w-6 h-6 md:w-8 md:h-8 text-gray-300 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantTimeline;

