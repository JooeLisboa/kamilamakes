import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: '#0B0B0C',
        graphite: '#161618',
        champagne: '#F1E5D8',
        nude: '#CEB7A3',
        roseGold: '#B47580',
        gold: '#BEA06C',
        ivory: '#F7F1EA'
      },
      boxShadow: {
        luxe: '0 28px 68px -32px rgba(0,0,0,0.7)',
        silk: '0 18px 45px -26px rgba(180,117,128,0.42)',
        insetSoft: 'inset 0 0 0 1px rgba(241,229,216,0.12)'
      },
      backgroundImage: {
        veil: 'linear-gradient(150deg, rgba(241,229,216,0.06) 0%, rgba(180,117,128,0.04) 42%, rgba(11,11,12,0) 100%)',
        shimmer: 'linear-gradient(120deg, rgba(241,229,216,0.12), rgba(241,229,216,0.02) 40%, rgba(180,117,128,0.1) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
