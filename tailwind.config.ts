import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        //tablet
        sm: { min: "768px", max: "1024px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        // desktop
        md: { min: "1025px", max: "1439px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        // laptop
        lg: { min: "1440px", max: "5000px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
    },
  },
  plugins: [],
}
export default config
