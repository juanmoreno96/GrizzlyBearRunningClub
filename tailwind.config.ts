import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060001",
        "primary-container": "#3c0717",
        "on-primary": "#ffffff",
        "on-primary-container": "#bb6e7d",
        "primary-fixed": "#ffd9de",
        "primary-fixed-dim": "#ffb2bf",
        "on-primary-fixed": "#3b0616",
        "on-primary-fixed-variant": "#723240",
        
        secondary: "#a23a4d",
        "secondary-container": "#fc7f92",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#74152c",
        "secondary-fixed": "#ffd9dc",
        "secondary-fixed-dim": "#ffb2ba",
        "on-secondary-fixed": "#400011",
        "on-secondary-fixed-variant": "#832237",
        
        tertiary: "#010101",
        "tertiary-container": "#1c1c1c",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#848484",
        "tertiary-fixed": "#e2e2e2",
        "tertiary-fixed-dim": "#c6c6c6",
        "on-tertiary-fixed": "#1b1b1b",
        "on-tertiary-fixed-variant": "#474747",
        
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        
        background: "#f9f9f9",
        "surface": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "surface-dim": "#dadada",
        "on-background": "#1a1c1c",
        "on-surface": "#1a1c1c",
        
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        
        "surface-variant": "#e2e2e2",
        "on-surface-variant": "#524345",
        
        outline: "#857375",
        "outline-variant": "#d7c1c4",
        
        "inverse-surface": "#2f3131",
        "inverse-on-surface": "#f1f1f1",
        "inverse-primary": "#ffb2bf",
      },
      fontFamily: {
        "headline": ["Lexend"],
        "body": ["Inter"],
        "label": ["Lexend"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
