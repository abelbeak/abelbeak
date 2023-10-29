import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      spacing: {
        18: '4.5rem',
        15: '3.75rem',
        19: '4.75rem',
        32: '8rem',
        34: '8.5rem',
        62: '15.5rem',
        100: '25rem',
      },
      boxShadow: {
        default: '0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);',
        button: '0px 2px 4px -2px rgba(33, 33, 33, 0.20), 0px 4px 6px -1px rgba(33, 33, 33, 0.20);',
      },
    },
  },
  plugins: [],
};
export default config;
