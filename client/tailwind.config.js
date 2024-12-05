/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        "ghost-white": "var(--ghost-white)",
        'dark-purple': 'var(--dark-purple)',
        'dogwood-rose': 'var(--dogwood-rose)',
        'russian-violet': 'var(--russian-violet)',
        'raisin-black': 'var(--raisin-black)',
        'white': 'var(--white)',
        'dark-purple-light': 'var(--dark-purple-light)', /* A lighter shade of dark-purple */
        'dogwood-rose-light': 'var(--dogwood-rose-light)', /* A softer, pastel version */
        'russian-violet-dark': 'var(--russian-violet-dark)', /* A deeper, more dramatic tone */
        'raisin-black-light': 'var(--raisin-black-light)', /* Consistent with the CSS variable name */
        'ivory': 'var(--ivory)', /* A warm, off-white for accents */
        'cool-gray': 'var(--cool-gray)', /* Neutral complement */
        'lavender': 'var(--lavender)', /* Gentle for headers or highlights */
        'peach-puff': 'var(--peach-puff)', /* A warm highlight shade */
        'teal': 'var(--teal)', /* Cool, fresh, and balancing for gradients or hover effects*/ 
        'goldenrod': 'var(--goldenrod)', /* A luxurious accent color */

      },
    },
  },
  plugins: [],

};

