import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Root from './root'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return data.site.siteMetadata
}

const Page = props => {
  const meta = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta
          name='description'
          content={meta.description}
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon.png'
        />
        <link
          rel='apple-touch-icon'
          href='apple-touch-icon.png'
        />
        <meta name='og:title' content={meta.title} />
        <meta name='og:description' content={meta.description} />
        <meta name='og:image' content='http://designsystems.nyc/apple-touch-icon.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nyc_dsc' />
      </Helmet>
      {props.children}
    </>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>

export const wrapPageElement = ({ element, props }) => {
  return (
    <Page {...props}>
      {element}
    </Page>
  )
}
