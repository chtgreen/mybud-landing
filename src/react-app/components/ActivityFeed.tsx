import type { FC } from 'react';

interface Activity {
  type: string;
  icon: string;
  title: string;
  entity?: string;
  entityIcon?: string;
  details?: string;
  time: string;
  borderColor: string;
  entityBg?: string;
}

const activities: Activity[] = [
  { 
    type: "watering", 
    icon: "💧", 
    title: "Watered", 
    entity: "Blue Dream",
    entityIcon: "🌿",
    details: "500ml • pH 6.5",
    time: "2 hours ago", 
    borderColor: "border-l-emerald-500",
    entityBg: "bg-emerald-100 text-emerald-700"
  },
  { 
    type: "metric", 
    icon: "🌡️", 
    title: "Temperature: 26°C", 
    entity: "Indoor Tent",
    entityIcon: "🌺",
    details: "Humidity: 60% • VPD: 1.1",
    time: "5 hours ago", 
    borderColor: "border-l-blue-500",
    entityBg: "bg-blue-100 text-blue-700"
  },
  { 
    type: "training", 
    icon: "✂️", 
    title: "LST Training", 
    entity: "Gorilla Glue",
    entityIcon: "🌿",
    details: "Week 3 vegetating",
    time: "1 day ago", 
    borderColor: "border-l-purple-500",
    entityBg: "bg-emerald-100 text-emerald-700"
  },
  { 
    type: "note", 
    icon: "📝", 
    title: "Added note", 
    entity: "All plants",
    entityIcon: "🌿",
    details: "Looking healthy, great color",
    time: "1 day ago", 
    borderColor: "border-l-gray-400",
    entityBg: "bg-gray-100 text-gray-700"
  },
  { 
    type: "stage", 
    icon: "🌸", 
    title: "Started Flowering", 
    entity: "OG Kush",
    entityIcon: "🌿",
    details: "Day 1 of flowering stage",
    time: "2 days ago", 
    borderColor: "border-l-pink-500",
    entityBg: "bg-emerald-100 text-emerald-700"
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
          Recent Activity
        </h3>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
          Live Feed
        </span>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {displayActivities.map((activity, i) => (
          <div 
            key={i} 
            className={`border-l-4 ${activity.borderColor} pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors duration-200 cursor-pointer group`}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {activity.icon}
              </span>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <p className="font-medium text-gray-900 text-sm md:text-base">
                  {activity.title}
                </p>
                
                {/* Entity Badge */}
                {activity.entity && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 ${activity.entityBg} rounded-full text-xs font-medium`}>
                      <span>{activity.entityIcon}</span>
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
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6 text-center">
        <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline">
          View all activities →
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;

