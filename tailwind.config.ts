import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#FFFFFF",
        parchment: "#F5F5F0",
        beige: "#DECBB7",
        beigeDark: "#C7B8A3",
        ink: "#2F3A45",
        steel: "#5C6B7B",
        mist: "#DECBB7",
        accent: "#7A8BA0",
        accentSoft: "#F5F5F0",
        border: "#DECBB7"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 60px rgba(47, 58, 69, 0.08)"
      },
      backgroundImage: {
        "court-grid":
          "radial-gradient(circle at top, rgba(122, 139, 160, 0.14), transparent 42%), linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(245, 245, 240, 0.94))"
      }
    }
  },
  plugins: []
};

export default config;
