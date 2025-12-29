export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate-950 (Comfortable Dark)
        surface: '#1e293b',    // Slate-800
        surfaceHighlight: '#334155', // Slate-700
        primary: '#818cf8',    // Indigo-400 (Soft Lavender/Indigo)
        primaryHover: '#6366f1', // Indigo-500
        secondary: '#64748b',  // Slate-500
        textMain: '#f1f5f9',   // Slate-100
        textMuted: '#94a3b8',  // Slate-400
        border: '#334155',     // Slate-700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(129, 140, 248, 0.5)',
        'glow-sm': '0 0 10px rgba(129, 140, 248, 0.3)',
      },
    },
  },
  plugins: [],
}
