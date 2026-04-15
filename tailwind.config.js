/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            // Amber/Gold accent - warm premium feel
            accent: {
               50: "#fffbeb",
               100: "#fef3c7",
               200: "#fde68a",
               300: "#fcd34d",
               400: "#fbbf24",
               500: "#f59e0b",
               600: "#d97706",
               700: "#b45309",
               800: "#92400e",
               900: "#78350f",
            },
            // Custom dark surfaces - neutral (no blue tint), matching the reference design
            surface: {
               DEFAULT: "#111111", // page background
               raised: "#161616", // alternate section background
               card: "#1c1c1c", // card backgrounds
               border: "#272727", // borders & dividers
               muted: "#333333", // subtle elements
            },
         },
         fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
            mono: ['"JetBrains Mono"', "monospace"],
         },
         keyframes: {
            fadeInUp: {
               "0%": { opacity: "0", transform: "translateY(24px)" },
               "100%": { opacity: "1", transform: "translateY(0)" },
            },
         },
         animation: {
            "fade-in-up": "fadeInUp 0.6s ease-out forwards",
         },
      },
   },
   plugins: [require("@tailwindcss/typography")],
};
