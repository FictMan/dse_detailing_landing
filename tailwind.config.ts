import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        current: 'currentColor',
        'hover-from': "rgba(21, 142, 95, 0.08)",
        'hover-to': "rgba(21, 142, 95, 0.24)",
        'base-color': "rgba(255, 255, 255, 0.03)",
        'boder-base-color': "rgba(255, 255, 255, 0.1)",

        'action-base-default': 'var(--action-base-default)',
      },

      fontFamily: {
        'golos-regular': ['var(--font-golos-regular)'],
        unbounded: ['var(--font-unbounded)'],
      },
      fontSize: {
        h3: ['44px', {
          lineHeight: '90%',
          letterSpacing: '-1%',
          fontWeight: '700',
        }],
        h2: ['26px', {
          lineHeight: '90%',
          letterSpacing: '-1%',
          fontWeight: '700',
        }]
      },
    },
  },
  plugins: [],
};
export default config;
