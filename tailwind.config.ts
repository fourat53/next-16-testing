import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {},
      scale: {},
      colors: {},
    },
  },
  plugins: [],
};

export default config;
