const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      animation: {
        fadeIn: "fadeIn 700ms ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [
    require("@tailwindcss/typography"),

    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".filter-none": {
          filter: "none",
        },
        ".filter-grayscale": {
          filter: "grayscale(100%)",
        },
      };

      addUtilities(newUtilities, {
        variants: ["responsive", "hover"],
      });
    }),
  ],
};
