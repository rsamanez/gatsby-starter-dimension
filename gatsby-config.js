module.exports = {
  siteMetadata: {
    title: "Personal Web Page",
    author: "Rommel Samanez",
    description: "This is my First Personal Web Page."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-web-page',
        short_name: 'myweb',
        start_url: '/',
        background_color: '#0B152E',
        theme_color: '#0B152E',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
