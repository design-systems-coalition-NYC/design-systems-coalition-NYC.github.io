/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  useThemeUI,
} from 'theme-ui'

const Chip = ({
  name,
  value,
  onChange,
}) =>
  <div>
    <div
      sx={{
        width: '100%',
        height: 0,
        paddingBottom: '100%',
        bg: name,
        outline: '1px solid',
      }}
    />
    <label>
      <div>{name}</div>
      <input
        type='text'
        value={value}
        sx={{
          fontFamily: 'monospace',
          fontSize: 2,
          color: 'inherit',
          bg: 'transparent',
          border: 0,
          m: 0,
          p: 0,
          ':focus': {
            outline: '1px solid',
          }
        }}
        onChange={e => {
          onChange({ [name]: e.target.value })
        }}
      />
    </label>
  </div>

export default props => {
  const { theme, setTheme } = useThemeUI()

  const colors = Object.keys(theme.colors)
    .filter(key => typeof theme.colors[key] === 'string')
    .map(key => ({
      name: key,
      value: theme.colors[key],
      onChange: next => {
        setTheme({ colors: next })
      }
    }))

  return (
    <div>
      <Flex
        sx={{
          mx: -3,
          flexWrap: 'wrap',
        }}>
        {colors.map(color => (
          <Box
            key={color.name}
            sx={{
              p: 3,
              width: [ 1/2, 1/3, 1 / colors.length ].map(n => (n * 100) + '%'),
            }}>
            <Chip {...color} />
          </Box>
        ))}
      </Flex>
    </div>
  )
}
