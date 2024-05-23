/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: ['./pages/**/*.{js,jsx,ts,tsx,md,mdx}', './components/**/*.{js,jsx,ts,tsx,md,mdx}', './theme.config.tsx'],
} satisfies Config
