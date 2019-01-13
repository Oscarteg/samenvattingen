module.exports = {
  title: "Samenvattingen",
  // theme: "oscarteg",
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")]
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"
      }
    ][
      ("link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      })
    ]
  ],
  extendMarkdown: md => {
    md.use(require("markdown-it-katex"));
  },
  collapsable: false,
  themeConfig: {
    sidebarDepth: 0,
    lastUpdated: true,
    logo: "/books.png",
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "oscarteg/samenvattingen",
    sidebar: {
      "/": [
        {
          title: "Hogeschool Leiden",
          // collapsable: false,
          children: [
            "hogeschool-leiden/ieth/",
            "hogeschool-leiden/iitorg/",
            "hogeschool-leiden/iqua/",
            "hogeschool-leiden/isec/",
            "hogeschool-leiden/ikml/"
          ]
        },
        {
          title: "Hogeschool Utrecht",
          // collapsable: false,
          children: [
            "hogeschool-utrecht/filosofie/antropologie/",
            "hogeschool-utrecht/filosofie/chinese-filosofie/",
            "hogeschool-utrecht/filosofie/cultuur-filosofie/",
            "hogeschool-utrecht/filosofie/epistemologie/",
            "hogeschool-utrecht/filosofie/ethiek/",
            "hogeschool-utrecht/filosofie/indiase-filosofie/",
            "hogeschool-utrecht/filosofie/logica-en-retorica/",
            "hogeschool-utrecht/filosofie/ontologie-en-metafysica/",
            "hogeschool-utrecht/filosofie/politieke-filosofie/",
            "hogeschool-utrecht/filosofie/wetenschapsfilosofie/",
            "hogeschool-utrecht/wereldreligies/antieke-religies/",
            "hogeschool-utrecht/wereldreligies/christendom/",
            "hogeschool-utrecht/wereldreligies/fenomenologie/",
            "hogeschool-utrecht/wereldreligies/godsdienstvergelijken/",
            "hogeschool-utrecht/wereldreligies/hindoeisme/",
            "hogeschool-utrecht/wereldreligies/islam/",
            "hogeschool-utrecht/wereldreligies/jodendom/",
            "hogeschool-utrecht/wereldreligies/protestantisme/",
            "hogeschool-utrecht/wereldreligies/roothaan/",
            "hogeschool-utrecht/oefentoets/"
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
        text: "Homepage",
        link: "https://oscartegiffel.com"
      },
      {
        text: "Hogeschool Leiden",
        link: "/hogeschool-leiden/"
      },
      {
        text: "Hogeschool Utrecht",
        link: "/hogeschool-utrecht/"
      }
    ]
  }
};
