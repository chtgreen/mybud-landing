import type { FC } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: readonly Feature[];
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="px-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
