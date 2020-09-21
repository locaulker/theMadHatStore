require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Shopify Starter`,
    description: `Gatsby & Shopify Starter for the WebDevEducation course.`,
    author: `Lawrence O. Caulker`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:100`,
          `Raleway:100i`,
          `Raleway\:300`,
          `Raleway:300i`,
          `Raleway\:400`,
          'Raleway:400i',
          `Raleway\:500`,
          'Raleway:500i',
          `Raleway\:600`,
          'Raleway:600i',
          `Raleway\:700`,
          'Raleway:700i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
