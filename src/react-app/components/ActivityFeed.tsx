import type { FC } from 'react';
import type { LucideIcon } from './icons';
import {
  Droplet,
  Flower2,
  NotebookPen,
  Scissors,
  Sprout,
  Thermometer,
} from './icons';

interface Activity {
  type: string;
  icon: LucideIcon;
  title: string;
  entity?: string;
  entityIcon?: LucideIcon;
  details?: string;
  time: string;
  borderColor: string;
  entityBg?: string;
  iconClass: string;
  entityIconClass?: string;
}

const activities: Activity[] = [
  { 
    type: "watering", 
    icon: Droplet, 
    title: "Rega", 
    entity: "Blue Dream",
    entityIcon: Sprout,
    details: "500 ml • pH 6,5",
    time: "Há 2 horas", 
    borderColor: "border-l-emerald-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-emerald-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "metric", 
    icon: Thermometer, 
    title: "Temperatura: 26°C", 
    entity: "Estufa interna",
    entityIcon: Flower2,
    details: "Umidade: 60% • VPD: 1,1",
    time: "Há 5 horas", 
    borderColor: "border-l-blue-500",
    entityBg: "bg-blue-100 text-blue-700",
    iconClass: "text-blue-600",
    entityIconClass: "text-blue-700"
  },
  { 
    type: "training", 
    icon: Scissors, 
    title: "Treinamento LST", 
    entity: "Gorilla Glue",
    entityIcon: Sprout,
    details: "Semana 3 em vegetativo",
    time: "Há 1 dia", 
    borderColor: "border-l-purple-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-purple-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "note", 
    icon: NotebookPen, 
    title: "Nova anotação", 
    entity: "Todas as plantas",
    entityIcon: Sprout,
    details: "Plantas saudáveis, cor excelente",
    time: "Há 1 dia", 
    borderColor: "border-l-gray-400",
    entityBg: "bg-gray-100 text-gray-700",
    iconClass: "text-gray-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "stage", 
    icon: Flower2, 
    title: "Início da floração", 
    entity: "OG Kush",
    entityIcon: Sprout,
    details: "Dia 1 da fase de floração",
    time: "Há 2 dias", 
    borderColor: "border-l-pink-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-pink-500",
    entityIconClass: "text-emerald-700"
  },
];

interface ActivityFeedProps {
  className?: string;
  limit?: number;
}

export const ActivityFeed: FC<ActivityFeedProps> = ({ className = '', limit }) => {
  const displayActivities = limit ? activities.slice(0, limit) : activities;
  
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl md:text-2xl text-gray-900">
          Atividades recentes
        </h3>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
          Atualizando ao vivo
        </span>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {displayActivities.map((activity, i) => {
          const Icon = activity.icon;
          const EntityIcon = activity.entityIcon;
          
          return (
            <div 
              key={i} 
              className={`border-l-4 ${activity.borderColor} pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors duration-200 cursor-pointer group`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <Icon
                  className={`w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform ${activity.iconClass}`}
                  aria-hidden="true"
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    {activity.title}
                  </p>
                  
                  {/* Entity Badge */}
                  {activity.entity && activity.entityBg && EntityIcon && (
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 ${activity.entityBg} rounded-full text-xs font-medium`}>
                        <EntityIcon
                          className={`w-4 h-4 ${activity.entityIconClass ?? ''}`}
                          aria-hidden="true"
                        />
                        <span>{activity.entity}</span>
                      </span>
                    </div>
                  )}
                  
                  {/* Details */}
                  {activity.details && (
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {activity.details}
                    </p>
                  )}
                </div>
                
                {/* Time */}
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="mt-6 text-center">
        <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline">
          Ver todas as atividades →
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
