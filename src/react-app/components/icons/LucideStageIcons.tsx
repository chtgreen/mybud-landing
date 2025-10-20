import type { FC, SVGProps, JSX } from 'react';

export type StageIconComponent = FC<SVGProps<SVGSVGElement>>;

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const createSvg = (
  children: JSX.Element | JSX.Element[],
  displayName: string
): StageIconComponent => {
  const Icon: StageIconComponent = ({ className, ...props }) => (
    <svg
      {...svgProps}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );

  Icon.displayName = displayName;
  return Icon;
};

export const BeanIcon = createSvg(
  [
    <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" key="bean-body" />,
    <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" key="bean-shadow" />,
  ],
  'BeanIcon'
);

export const SproutIcon = createSvg(
  [
    <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" key="sprout-stem" />,
    <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" key="sprout-leaf" />,
    <path d="M5 21h14" key="sprout-ground" />,
  ],
  'SproutIcon'
);

export const LeafIcon = createSvg(
  [
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" key="leaf-body" />,
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" key="leaf-vein" />,
  ],
  'LeafIcon'
);

export const FlowerIcon = createSvg(
  [
    <circle cx="12" cy="12" r="3" key="flower-center" />,
    <path
      d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
      key="flower-petals"
    />,
    <path d="M12 7.5V9" key="flower-n" />,
    <path d="M7.5 12H9" key="flower-w" />,
    <path d="M16.5 12H15" key="flower-e" />,
    <path d="M12 16.5V15" key="flower-s" />,
    <path d="m8 8 1.88 1.88" key="flower-nw" />,
    <path d="M14.12 9.88 16 8" key="flower-ne" />,
    <path d="m8 16 1.88-1.88" key="flower-sw" />,
    <path d="M14.12 14.12 16 16" key="flower-se" />,
  ],
  'FlowerIcon'
);

export const ScissorsIcon = createSvg(
  [
    <circle cx="6" cy="6" r="3" key="scissors-top-handle" />,
    <path d="M8.12 8.12 12 12" key="scissors-top-blade" />,
    <path d="M20 4 8.12 15.88" key="scissors-main-blade" />,
    <circle cx="6" cy="18" r="3" key="scissors-bottom-handle" />,
    <path d="M14.8 14.8 20 20" key="scissors-bottom-blade" />,
  ],
  'ScissorsIcon'
);

export const HourglassIcon = createSvg(
  [
    <path d="M5 22h14" key="hourglass-base-bottom" />,
    <path d="M5 2h14" key="hourglass-base-top" />,
    <path
      d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
      key="hourglass-bottom"
    />,
    <path
      d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
      key="hourglass-top"
    />,
  ],
  'HourglassIcon'
);

export const WindIcon = createSvg(
  [
    <path d="M12.8 19.6A2 2 0 1 0 14 16H2" key="wind-bottom" />,
    <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" key="wind-middle" />,
    <path d="M9.8 4.4A2 2 0 1 1 11 8H2" key="wind-top" />,
  ],
  'WindIcon'
);

export const CheckIcon = createSvg(
  <path d="M20 6 9 17l-5-5" key="check" />,
  'CheckIcon'
);

export const ChevronLeftIcon = createSvg(
  <path d="m15 18-6-6 6-6" key="chevron-left" />,
  'ChevronLeftIcon'
);

export const ChevronRightIcon = createSvg(
  <path d="m9 6 6 6-6 6" key="chevron-right" />,
  'ChevronRightIcon'
);
