require('events').EventEmitter.defaultMaxListeners = 20;

module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    description: 'Personal Portfolio Site',
    author: 'Your Name',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              placeholder: 'blurred', // ✅ updated: replaces tracedSVG
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // ✅ temporarily removed gatsby-plugin-robots-txt since you're on Gatsby v3
    // Add it back later after upgrading to Gatsby v5
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // Ensure this icon file exists
      },
    },
    `gatsby-plugin-offline`, // Optional: for PWA support
  ],
};
