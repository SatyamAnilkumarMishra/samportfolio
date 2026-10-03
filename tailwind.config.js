/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080A0C',
          surface: '#0D1114',
          elevated: '#11171B',
        },
        border: {
          DEFAULT: '#20282D',
          subtle: '#181F24',
          bright: '#2E3A42',
        },
        txt: {
          primary: '#F1F3F4',
          secondary: '#9AA4AA',
          muted: '#5F696F',
        },
        accent: {
          green: '#7CFF4F',
          cyan: '#53D8FF',
          amber: '#FFB84D',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
      },
    },
  },
  plugins: [],
};
