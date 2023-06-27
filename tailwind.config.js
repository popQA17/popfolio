/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
        {
          blue: {
            "primary": "#38bdf8",    
            "secondary": "#1FD65F",
            "accent": "#D99330",
            "neutral": "#110E0E",
            "base-100": "#000",
            "info": "#3b82f6",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
      }
    ]
  }
}
