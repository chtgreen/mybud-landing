import React, { type FC } from 'react';
import { t, isB2B } from '../lib/i18n';

interface FeaturesSectionProps {
  background?: 'white' | 'gray';
}

type FeatureConfig = {
  key: string;
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
};

const createSvgIcon = (content: React.ReactNode) => (
  <svg
    className="w-5 h-5"
    style={{ color: 'var(--emerald-600)' }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    {content}
  </svg>
);

const b2cFeatures: FeatureConfig[] = [
  {
    key: 'journal',
    titleKey: 'features.journal.title',
    descKey: 'features.journal.description',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </>
    )
  },
  {
    key: 'voice',
    titleKey: 'features.voice.title',
    descKey: 'features.voice.description',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V9.375c0-.621.504-1.125 1.125-1.125H20.25M8.25 21h8.25M20.25 8.25V6.375c0-.621-.504-1.125-1.125-1.125H18m0 0V3.375c0-.621-.504-1.125-1.125-1.125h-6.75A2.25 2.25 0 007.875 4.5v12.75M18 5.25h2.25A1.125 1.125 0 0121.375 6.375v11.25c0 .621-.504 1.125-1.125 1.125h-9.25M18 5.25v6m-10.125 6V7.875c0-.621.504-1.125 1.125-1.125h3.375c.621 0 1.125.504 1.125 1.125v8.25"
      />
    )
  },
  {
    key: 'alerts',
    titleKey: 'features.alerts.title',
    descKey: 'features.alerts.description',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </>
    )
  },
  {
    key: 'guides',
    titleKey: 'features.guides.title',
    descKey: 'features.guides.description',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
      </>
    )
  }
];

const b2bFeatures: FeatureConfig[] = [
  {
    key: 'seeds',
    titleKey: 'partnershipTypes.seeds.title',
    descKey: 'partnershipTypes.seeds.description',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    )
  },
  {
    key: 'nutrients',
    titleKey: 'partnershipTypes.nutrients.title',
    descKey: 'partnershipTypes.nutrients.description',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    )
  },
  {
    key: 'equipment',
    titleKey: 'partnershipTypes.equipment.title',
    descKey: 'partnershipTypes.equipment.description',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    )
  },
  {
    key: 'devices',
    titleKey: 'partnershipTypes.devices.title',
    descKey: 'partnershipTypes.devices.description',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    )
  },
  {
    key: 'associations',
    titleKey: 'partnershipTypes.associations.title',
    descKey: 'partnershipTypes.associations.description',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 12l3 3 6-6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.25 7.5 3.75h9L21 8.25v7.5l-4.5 4.5h-9L3 15.75v-7.5z"
        />
      </>
    )
  },
  {
    key: 'professionals',
    titleKey: 'partnershipTypes.professionals.title',
    descKey: 'partnershipTypes.professionals.description',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c1.933 0 3.5-1.567 3.5-3.5S13.933 4 12 4 8.5 5.567 8.5 7.5 10.067 11 12 11zm0 2c-3.038 0-5.5 2.239-5.5 5v1h11v-1c0-2.761-2.462-5-5.5-5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9l1.75-1.75M7 9 5.25 7.25"
        />
      </>
    )
  }
];

const FeaturesSection: FC<FeaturesSectionProps> = ({ background = 'gray' }) => {
  const isB2BContext = isB2B();
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
  const features = isB2BContext ? b2bFeatures : b2cFeatures;
  const titleKey = isB2BContext ? 'partnershipTypes.title' : 'features.title';
  const subtitleKey = isB2BContext ? 'partnershipTypes.subtitle' : 'features.subtitle';

  return (
    <section id="features" className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            id="features-title"
          >
            {t(titleKey)}
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
            id="features-subtitle"
          >
            {t(subtitleKey)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div className="card" key={feature.key}>
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg" style={{ background: 'var(--emerald-100)' }}>
                  {createSvgIcon(feature.icon)}
                </div>
                <div>
                  <h3
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-zinc-800)' }}
                    id={`feature-${index + 1}-title`}
                  >
                    {t(feature.titleKey)}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-zinc-600)' }}
                    id={`feature-${index + 1}-desc`}
                  >
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
