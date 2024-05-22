/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',
     
        // Or if using `src` directory:
        './src/**/*.{js,jsx,ts,tsx,md,mdx}'
      ],
      darkMode : 'class',
      theme: {
        extend: {}
      },
      plugins: []
};
export default config;
