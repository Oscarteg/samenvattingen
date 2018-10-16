module.exports = {
  title: "Samenvattingen",
  theme: "oscarteg",
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")]
  },
  collapsable: false,
  themeConfig: {
    footer: false,
    sidebarDepth: 0,
    lastUpdated: true,
    search: true,
    subscription: {
      buttonTitle: "Subscribe to my newsletter§",
      actionUrl:
        "https://oscartegiffel.us12.list-manage.com/subscribe/post?u=794fd44a33e214cafd711bbeb&amp;id=7a2125cbd1"
    },
    logo: "/books.png",
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "oscarteg/samenvattingen",
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    sidebar: {
      "/": [
        {
          title: "Hogeschool Leiden",
          collapsable: false,
          children: [
            "hogeschool-leiden/ieth/",
            "hogeschool-leiden/iitorg/",
            "hogeschool-leiden/iqua/",
            "hogeschool-leiden/isec/"
          ]
        },
        {
          title: "Hogeschool Utrecht",
          collapsable: false,
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
