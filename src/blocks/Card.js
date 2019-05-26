/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'

export default ({ href, ...props }) => {
  const Tag = href ? 'a' : 'div'
  return (
    <ThemeProvider
      theme={{
        styles: {
          img: {
            mb: 3,
          },
          h3: {
            // mt: 0, mb: 2,
          },
        }
      }}>
      <Tag
        {...props}
        href={href}
        target={href ? '_blank' : undefined}
        css={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
          p: 3,
          // flex: '1 1 256px',
        }}
      />
    </ThemeProvider>
  )
}
