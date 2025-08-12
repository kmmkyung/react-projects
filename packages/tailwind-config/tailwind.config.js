const shared = require("@repo/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [shared],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/**/*.{ts,tsx,js,jsx}" // 공용 컴포넌트 경로
  ],
  theme: {
    extend: {
      colors: { accent: "#FF7A59" } // 앱 전용 색상
    }
  }
}