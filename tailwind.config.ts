import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // These paths tell Tailwind which files to scan for CSS classes
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
},
  plugins: [
    // Add any Tailwind plugins you want to use here
  ],
};

export default config;