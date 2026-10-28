/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101D32',
          dark: '#0B1422',
          deep: '#070C15',
          light: '#1A2C49',
          border: '#243A5E',
        },
        yellow: {
          DEFAULT: '#FFD629',
          hover: '#ECC017',
          dark: '#D9AB04',
          light: '#FFF5C2',
          badge: '#FFE978',
        },
        charcoal: {
          DEFAULT: '#202B3C',
          soft: '#2E3B50',
          muted: '#4A5B73',
        },
        surface: {
          DEFAULT: '#F4F6F9',
          card: '#FFFFFF',
          subtle: '#EEF2F6',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 29, 50, 0.08), 0 2px 6px -1px rgba(16, 29, 50, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(16, 29, 50, 0.15), 0 10px 15px -5px rgba(16, 29, 50, 0.08)',
        'yellow-glow': '0 8px 25px -4px rgba(255, 214, 41, 0.45)',
        'navy-glow': '0 10px 30px -5px rgba(16, 29, 50, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
