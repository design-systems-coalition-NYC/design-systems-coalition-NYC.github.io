/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import Button from './Button'

const modes = [
  'light',
  'dark',
]

export default props => {
  const [ mode, setMode ] = useColorMode()
  const cycleMode = e => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Button
      title='Change color mode'
      onClick={cycleMode}>
      {mode}
    </Button>
  )
}
