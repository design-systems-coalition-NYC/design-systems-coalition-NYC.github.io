/** @jsx jsx */
import {
  jsx,
  useThemeUI,
  Flex,
  Box,
  Styled,
} from 'theme-ui'

const Chip = ({
  name,
  value,
}) =>
  <div
    css={{
    }}>
    <div
      css={{
        width: '100%',
        height: 0,
        paddingBottom: '100%',
        bg: name,
        outline: '1px solid',
      }}
    />
    <div>{name}</div>
    <Styled.code>{value}</Styled.code>
  </div>

export default props => {
  const { theme } = useThemeUI()

  const colors = Object.keys(theme.colors)
    .filter(key => typeof theme.colors[key] === 'string')
    .map(key => ({
      name: key,
      value: theme.colors[key]
    }))

  return (
    <div>
      <Flex
        mx={-3}
        flexWrap='wrap'>
        {colors.map(color => (
          <Box
            key={color.name}
            p={3}
            width={[ 1/2, 1/3, 1 / colors.length ]}
          >
            <Chip {...color} />
          </Box>
        ))}
      </Flex>
    </div>
  )
}
