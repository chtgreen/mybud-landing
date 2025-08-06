import type { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
  onCTAClick: () => void;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, cta, onCTAClick }) => {
  return (
    <section className="text-center py-24 bg-white" id="hero">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-ph-capture="hero_title">
          {title}
        </h1>
        <p className="text-lg text-zinc-600 mb-8">{subtitle}</p>
        <button
          onClick={onCTAClick}
          className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
        >
          {cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;
