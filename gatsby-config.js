module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `This is my developer portfolio.`,
    author: `@yourname`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
        showCaptions: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
