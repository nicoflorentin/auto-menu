/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // // single component styles
    // "./node_modules/@nextui-org/theme/dist/components/button.js",
    // // or you can use a glob pattern (multiple component styles)
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // './node_modules/@nextui-org/theme/dist/components/(button|input).js'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      fontFamily: {
        inter: ['"Inter"'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.250rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            foreground: '#111111',
            primary: {
              DEFAULT: 'rgb(162, 162, 162)',
              //... 50 to 900
            },
            secondary: {
              DEFAULT: 'rgb(152, 255, 129)',
              foreground: 'rgb(121, 121, 121)',
            }
            // ... rest of the colors
          },
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          },
        },
        dark: {
          colors: {
            myRed: 'rgb(151, 37, 17)',
            background: 'rgb(39, 39, 39)',
            foreground: "#f0f0f0",
            primary: {
              DEFAULT: "rgb(152, 255, 129)",
              foreground: '#101010'
            },
            secondary: {
              DEFAULT: "#e7e5dd",
              background: '#1F1F1F',
              foreground: "#1F1F1F",
            },
            letters: {
              DEFAULT: '#f0f0f0',
              foreground: '#151515'
            }
          },
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          },
        },
      },
    }),
  ],
}