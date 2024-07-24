import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.5rem'
      },
      colors: {
        'custom-brown': '#291507'
      }
    }
  },
  plugins: [],
};
export default config;
