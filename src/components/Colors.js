/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

export default props => {
  const { theme } = useThemeUI()
  console.log(theme)

  return (
    <div>
      Colors TK
    </div>
  )
}
