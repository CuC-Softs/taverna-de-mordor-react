/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        110: '28rem',
      },
      backgroundImage: {
        'dungeons-and-dragons': "url('./src/resources/images/dungeons-and-dragons.jpg')",
        'vampire-the-mascarade': "url('./src/resources/images/vampire-the-mascarade.jpeg')",
        'al-rpg-club': "url('./src/resources/images/al-rpg-club.jpg')",
        'cyberpunk': "url('./src/resources/images/cyberpunk.jpg')",
        'logo': "url('./src/resources/images/pp.jpg')",
        'tabuleiro-rpg': "url('./src/resources/images/tabuleiro-rpg.jpg')",
        'main-cover': "url('./src/resources/images/cover-rpg.jpg')",
        'main-cover-gradient':
          "linear-gradient(0.03deg, #111827, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.4), rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0)),url('../images/cover-rpg.jpg')",
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '9px',
        '4xs': '5px',
      },
      blur: {
        sm: '2px',
      },
      keyframes: {
        'slide-from-right': {
          '0%': {
            'transform': 'translateX(100%)',
            'opacity': '0.2',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            'transform': 'translateX(0)',
            'opacity': '1',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'slide-from-right': 'slide-from-right 0.5s ease-in-out',
      },
      width: {
        '68': '280px',
        '83': '340px',
        '75': '300px',
        '100': '430px',
        '18': '67px',
        '130': '550px',
        '200': '700px',
        '230': '850px',
        '11/14': '86%',
      },
      height: {
        30: '121px',
        22: '88px',
        66: '270px',
        76: '295px',
      },
      minHeight: {
        60: '230px',
      },
    },
    fontFamily: {
      title: 'Cinzel',
      text: 'Roboto',
    },
  },
  plugins: [require("flowbite/plugin")],
};
