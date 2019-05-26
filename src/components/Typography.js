/** @jsx jsx */
import {
  jsx,
  useThemeUI,
} from 'theme-ui'

export default props => {
  const { theme } = useThemeUI()
  const { fonts, fontSizes } = theme

  const sizes = [ ...fontSizes ].reverse()

  return (
    <div>
      {Object.keys(fonts).map(key => (
        <div
          css={{
            fontSize: 5,
            fontFamily: key,
          }}>
          {key}: {fonts[key]}
        </div>
      ))}
      {sizes.map((size, i) => (
        <div
          css={{
            fontSize: size,
            fontWeight: 'bold',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
          }}>
          {size}px Hamburgefonz
        </div>
      ))}
    </div>
  )
}
