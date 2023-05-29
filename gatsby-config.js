/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Porównaj ceny domen internetowych u rożnych rejestratorów",
    description:
      "Sprawdź dostępność domen, znajdź i wybierz najtańszą ofertę rejestracji adresu internetowego na Domenowo.org",
    siteUrl: "https://domenowo.org",
    url: "https://domenowo.org",
    author: "Kamil Sitarz",
    keywords:
      "domena,domeny,ceny domen,porównaj ceny domen,domenowo,tania domena,ranking domen",
    image: "src/images/favicon.avif",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        id: "G-JPYF700YN4",
        trackingIds: ["G-JPYF700YN4"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://domenowo.org",
        sitemap: "https://domenowo.org/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "domenowo.org",
        short_name: "domenowo",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
