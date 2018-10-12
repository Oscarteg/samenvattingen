module.exports = {
  title: "My mac os",
  theme: "oscar",
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")]
  },
  themeConfig: {
    sidebarDepth: 0,
    sidebar: "auto",
    displayAllHeaders: true,
    sidebar: {
      "/": [
        {
          title: "Hogeschool Leiden",
          children: [
            "hogeschool-leiden/ieth/",
            "hogeschool-leiden/iitorg/",
            "hogeschool-leiden/iqua/",
            "hogeschool-leiden/isec/"
          ]
        },
        {
          title: "Hogeschool Utrecht",
          children: [
            "hogeschool-utrecht/filosofie/antropologie/",
            "hogeschool-utrecht/filosofie/chinese-filosofie/"
          ]
        }
      ]
    },
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Hogeschool Leiden",
        link: "/hogeschool-leiden/"
      },
      {
        text: "Hogeschool Utrecht",
        items: [
          { text: "Filosofie", link: "/hogeschool-utrecht/filosofie/" },
          {
            text: "Wereldreligies",
            link: "/hogeschool-utrecht/wereldreligies/"
          }
        ]
      }
    ]
  }
};
