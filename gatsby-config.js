const remarkPlugins = [
  require('remark-unwrap-images'),
]

const data = {
  title: 'Design Systems Coalition NYC',
  description: 'A community for people who build design systems to share and learn from each other.',
}

module.exports = {
  siteMetadata: data,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins,
      }
    },
  ]
}
