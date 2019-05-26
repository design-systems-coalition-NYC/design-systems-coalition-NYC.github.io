exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/meetup/code-of-conduct',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/code-of-conduct`,
  })
}
