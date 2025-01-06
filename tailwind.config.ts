import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        paralax: 'url("../assets/img/about/detailAbout.webp")',
      },
      fontFamily: {
        arame: ["Arame, sans-serif"],
        arameBold: ["Arame Bold, sans-serif"],
        barlow: ["Barlow"],
        barlowBold: ["Barlow Bold"],
        barlowSemiBold: ["Barlow SemiBold"],
      },
      fontSize: {
        // TITLES
        "title-28": [
          "1.75rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        "title-26": [
          "1.625rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "title-24": [
          "1.5rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        "title-20": [
          "1.25rem",
          {
            lineHeight: "130%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],

        // BODY
        "body-17": [
          "1.063rem",
          {
            lineHeight: "141.176%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        "body-14": [
          "1.063rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "600",
          },
        ],
        "body-12": [
          "0.75rem",
          {
            lineHeight: "110%",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        olive: "#868C56",
      },
      maxWidth: {
        container: "1170px",
      },
    },
    screens: {
      "@tablet": "640px",
      "@laptop": "1024px",
      "@desktop": "1280px",
      "@fullscreen": "1780px",
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hidden': {
          scrollbarWidth: 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE/Edge */
        },
      });
    }),
  ],
  safelist: [
    "before:w-[100%]",
    "before:w-[100%]",
    "before:w-[100%]",
    "before:w-[83%]",
    "before:w-[75%]",
    "before:w-[62%]",
    "before:w-[51%]",
    "before:w-[40%]",
    "before:w-[25%]",
    "@desktop:col-span-1",
    "@desktop:col-span-2",
  ],
};

export default config;
