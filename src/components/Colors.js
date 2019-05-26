/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Styled,
} from 'theme-ui'
import { useEditableTheme } from './ThemeEditor'

const Chip = ({
  name,
  value,
  onChange,
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
    <label>
      <div>{name}</div>
      <input
        type='text'
        value={value}
        css={{
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
  const { state, setState } = useEditableTheme()

  const colors = Object.keys(state.colors)
    .filter(key => typeof state.colors[key] === 'string')
    .map(key => ({
      name: key,
      value: state.colors[key],
      onChange: next => {
        setState({ colors: next })
      }
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
