/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

export default props => {
  const { theme, setTheme } = useThemeUI()
  const { fonts, fontSizes } = theme

  const sizes = [ ...fontSizes ].reverse()

  return (
    <div>
      {Object.keys(fonts).map(key => (
        <div key={key}>
          <label>
            {key}:
            <input
              type='text'
              value={fonts[key]}
              sx={{
                fontFamily: key,
                fontSize: 5,
                border: 0,
                width: '100%',
                bg: 'transparent',
                color: 'inherit',
                ':focus': {
                  outline: '2px solid',
                }
              }}
              onChange={e => {
                setTheme({
                  fonts: {
                    [key]: e.target.value
                  }
                })
              }}
            />
          </label>
        </div>
      ))}
      {sizes.map((size, i) => (
        <div
          key={i}
          sx={{
            fontSize: size,
            fontWeight: 'bold',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
          }}>
          <label>
            <input
              type='number'
              value={size}
              sx={{
                width: '2.5em',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: 'inherit',
                bg: 'transparent',
                p: 0,
                m: 0,
                border: 0,
                ':focus': {
                  outline: '1px solid',
                }
              }}
              onChange={e => {
                const n = parseInt(e.target.value)
                const next = [...fontSizes]
                next[sizes.length - i - 1] = n
                setTheme({
                  fontSizes: next
                })
              }}
            />
            Hamburgefonz
          </label>
        </div>
      ))}
    </div>
  )
}
