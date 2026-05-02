/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          bg: "#ffffff", // Body
          secondBg: "#ececec", // Sections
          thirdBg: "#2993cd", // Special Bg Color
          buttonBg: "#ffcb3d", // Button Bg Color
          buttonHover: "#fdb900", // Button Hover
          textDarkColor: "#131314", // Dark Text Color
          textDarkGray: "#383838", // Dark Text Color
          textLightColor: "#ffffff", // White Text Color
          secondTextColor: "#FDB900", // Special Text Color
          red: "#F27070", // Error Color
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.webp')",
        "divider-bg": "url('/images/page-header-bg.webp')",
        "testimonial-bg": "url('/images/map-pattern.webp')",
        "divider2-bg": "url('/images/download (6).webp')",
        "contact-bg": "url('/images/our-service-background.webp')",
        "footer-bg": "url('/images/footerbg.png')",
      },
      fontSize: {
        h1: "clamp(1.5rem, 0.9706rem + 4.7059vw, 3.3rem)",
        h2Typing: "clamp(0.9rem, 2.5vw, 1.3rem)",
        h2: "clamp(1.4rem, 3vw, 2.5rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1.2rem, 2vw, 1.2rem)",
        description: "clamp(0.9rem, 2vw, 1.1rem)",
      },
      keyframes: {
        pingSlow: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        pingSlower: {
          "0%": { transform: "scale(1)", opacity: "0.4" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "ping-slow": "pingSlow 3s linear infinite",
        "ping-slower": "pingSlower 4s linear infinite",
      },
    },
  },
  plugins: [],
};
