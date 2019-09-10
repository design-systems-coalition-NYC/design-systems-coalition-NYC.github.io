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
        }
      }}>
      <Tag
        {...props}
        href={href}
        target={href ? '_blank' : undefined}
        sx={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
          p: 3,
        }}
      />
    </ThemeProvider>
  )
}
