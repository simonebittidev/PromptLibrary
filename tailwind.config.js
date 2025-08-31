/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx,mdx}',
      './docs/**/*.{md,mdx}',
      './blog/**/*.{md,mdx}',
      './docusaurus.config.{js,ts}',
      './sidebars.{js,ts}',
    ],
    // Allinea il dark mode a Docusaurus
    darkMode: ["class", '[data-theme="dark"]'],
  
    // Evita collisioni con Infima
    prefix: "tw-",
  
    // Tema minimal tipo OpenAI: neutri + accento teal soft
    theme: {
      extend: {
        colors: {
          primary: { DEFAULT: "#0ea5a5", 600: "#0b8a8a", 700: "#0a7d7d" },
          border: { DEFAULT: "#e5e7eb", dark: "#23262b" },
          muted: { DEFAULT: "#6b7280", dark: "#a3a3a3" },
          bg: { DEFAULT: "#ffffff", subtle: "#fafafa", dark: "#0b0b0c", darkSubtle: "#111214" },
        },
        boxShadow: { subtle: "0 2px 24px rgba(0,0,0,0.04)" },
        borderRadius: { xl2: "16px" },
      },
    },
  
    // Plugin tipografico per i blocchi MDX
    plugins: [require("@tailwindcss/typography")],
  };
  
