import type { FC } from 'react';
import type { LucideIcon } from './icons';
import { t } from '../lib/i18n';
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

const getActivities = (): Activity[] => [
  { 
    type: "watering", 
    icon: Droplet, 
    title: t('activityFeed.activities.watering.title'), 
    entity: t('activityFeed.activities.watering.entity'),
    entityIcon: Sprout,
    details: t('activityFeed.activities.watering.details'),
    time: t('activityFeed.activities.watering.time'), 
    borderColor: "border-l-emerald-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-emerald-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "metric", 
    icon: Thermometer, 
    title: t('activityFeed.activities.metric.title'), 
    entity: t('activityFeed.activities.metric.entity'),
    entityIcon: Flower2,
    details: t('activityFeed.activities.metric.details'),
    time: t('activityFeed.activities.metric.time'), 
    borderColor: "border-l-blue-500",
    entityBg: "bg-blue-100 text-blue-700",
    iconClass: "text-blue-600",
    entityIconClass: "text-blue-700"
  },
  { 
    type: "training", 
    icon: Scissors, 
    title: t('activityFeed.activities.training.title'), 
    entity: t('activityFeed.activities.training.entity'),
    entityIcon: Sprout,
    details: t('activityFeed.activities.training.details'),
    time: t('activityFeed.activities.training.time'), 
    borderColor: "border-l-purple-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-purple-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "note", 
    icon: NotebookPen, 
    title: t('activityFeed.activities.note.title'), 
    entity: t('activityFeed.activities.note.entity'),
    entityIcon: Sprout,
    details: t('activityFeed.activities.note.details'),
    time: t('activityFeed.activities.note.time'), 
    borderColor: "border-l-gray-400",
    entityBg: "bg-gray-100 text-gray-700",
    iconClass: "text-gray-600",
    entityIconClass: "text-emerald-700"
  },
  { 
    type: "stage", 
    icon: Flower2, 
    title: t('activityFeed.activities.stage.title'), 
    entity: t('activityFeed.activities.stage.entity'),
    entityIcon: Sprout,
    details: t('activityFeed.activities.stage.details'),
    time: t('activityFeed.activities.stage.time'), 
    borderColor: "border-l-amber-500",
    entityBg: "bg-emerald-100 text-emerald-700",
    iconClass: "text-amber-500",
    entityIconClass: "text-emerald-700"
  },
];

interface ActivityFeedProps {
  className?: string;
  limit?: number;
  onViewAll?: () => void;
}

export const ActivityFeed: FC<ActivityFeedProps> = ({ className = '', limit, onViewAll }) => {
  const activities = getActivities();
  const displayActivities = limit ? activities.slice(0, limit) : activities;

  const handleViewAllClick = () => {
    if (onViewAll) {
      onViewAll();
      return;
    }

    const betaSection = document.getElementById('beta');
    betaSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl md:text-2xl text-gray-900">
          {t('activityFeed.title')}
        </h3>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
          {t('activityFeed.liveBadge')}
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
        <button
          onClick={handleViewAllClick}
          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline"
        >
          {t('activityFeed.viewAll')} →
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
