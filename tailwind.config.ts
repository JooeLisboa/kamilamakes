import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: '#101010',
        champagne: '#F5E8D8',
        nude: '#D6BFAE',
        roseGold: '#B76E79',
        gold: '#C6A664'
      },
      boxShadow: {
        luxe: '0 24px 60px -20px rgba(0,0,0,0.5)',
        glow: '0 8px 30px rgba(183, 110, 121, 0.35)'
      },
      backgroundImage: {
        'lux-gradient': 'radial-gradient(circle at top right, rgba(183,110,121,0.2), transparent 45%), radial-gradient(circle at bottom left, rgba(198,166,100,0.15), transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;
