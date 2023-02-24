// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const ORG = "dstarner";
const REPO = "howthefuckdoesitwork";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "How the F*ck Does it Work?",
  tagline: "Discover how the world around us works, one crazy thing at a time",
  favicon: "img/favicon.ico",

  url: "https://howthefuckdoesit.work",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "How the F*ck Does It Work?",
        logo: {
          alt: "How the F*ck Does It Work?",
          src: "img/logo.png",
          srcDark: "img/logo-negative.png",
        },
        items: [
          {
            href: `https://github.com/${ORG}/${REPO}`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
