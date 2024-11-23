/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'var(--dark-purple)',
        'dogwood-rose': 'var(--dogwood-rose)',
        'russian-violet': 'var(--russian-violet)',
        'raisin-black': 'var(--raisin-black)',
        'white': 'var(--white)',
      },
    },
    
  },
  plugins: [],
}

