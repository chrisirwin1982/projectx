const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: {
          '50':  '#fbf9f6',
          '100': '#fbf5e8',
          '200': '#f7e6c7',
          '300': '#f3ce93',
          '400': '#eda44f',
          '500': '#e77b26',
          '600': '#d05517',
          '700': '#a24019',
          '800': '#77311b',
          '900': '#5a2719',
        },
        blue: {
          '50':  '#f9faf9',
          '100': '#f5f7f2',
          '200': '#e9eddd',
          '300': '#d8dac0',
          '400': '#b5b88e',
          '500': '#8a935b',
          '600': '#646d3b',
          '700': '#4b5433',
          '800': '#393f2d',
          '900': '#2c3226',
        },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },  
    },
  },
  // ...
}


}