import type { Config } from "tailwindcss";

const config: Config = {
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

        'action-base-default': 'var(--action-base-default)',
      },

      fontFamily: {
        'golos-regular': ['var(--font-golos-regular)'],
        unbounded: ['var(--font-unbounded)'],
      }
    },
  },
  plugins: [],
};
export default config;
