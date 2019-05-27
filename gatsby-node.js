exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/meetup/code-of-conduct',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/code-of-conduct`,
  })
  actions.createRedirect({
    fromPath: '/meetup/speaker-guidelines',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/speaker-guidelines`,
  })
  actions.createRedirect({
    fromPath: '/meetup/hosting-guidelines',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/hosting-guidelines`,
  })
}
