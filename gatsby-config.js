module.exports = {
  siteMetadata: {
    title: `Gatsy Started`,
    description: `Simple Gatsby theme with scss and material-ui support`,
    author: `@luchoster`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-luchoster-base',
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
