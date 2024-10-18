/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "1px 1px 30px 1px rgba(37, 99, 235, .7)",
        "custom-red": "0 4px 6px rgba(255, 0, 0, 0.5)",
        // Add more colored shadows here
      },
    },
  },
  plugins: [],
};
