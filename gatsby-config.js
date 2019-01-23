const data = {
  title: 'Design Systems Coalition NYC',
  description: '',
}

module.exports = {
  siteMetadata: data,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // defaultLayouts: {}
      }
    },
  ]
}
