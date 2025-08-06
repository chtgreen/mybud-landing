import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-zinc-500 bg-white border-t border-zinc-100">
      © {new Date().getFullYear()} mybud
    </footer>
  );
};

export default Footer;
