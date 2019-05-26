import React, {
  useReducer,
  useEffect,
  useContext,
} from 'react'
import { ThemeProvider, useThemeUI } from 'theme-ui'
import merge from 'lodash.merge'
import Button from './Button'

const KEY = 'custom-theme'
const storage = {
  set: (obj) => {
    window.localStorage.setItem(KEY, JSON.stringify(obj))
  },
  get: () => {
    const json = window.localStorage.getItem(KEY) || '{}'
    try {
      return JSON.parse(json)
    } catch (e) {
      console.error(e)
    }
  },
  reset: () => {
    storage.set({})
  }
}

const notAReducer = (state, next) => typeof next === 'function'
  ? next(state)
  : merge({}, state, next)

export const Context = React.createContext()

export const useEditableTheme = () => useContext(Context)

export const ResetTheme = props => {
  const { reset } = useEditableTheme()
  return (
    <Button onClick={reset}>
      Reset Theme
    </Button>
  )
}

export default props => {
  const outer = useThemeUI()
  const [ state, setState ] = useReducer(notAReducer, outer.theme)
  useEffect(() => {
    const init = storage.get()
    setState(init)
  }, [])
  useEffect(() => {
    storage.set(state)
  }, [ state.colors, state.fontSizes, state.fonts ])

  const context = {
    state,
    setState,
    reset: () => {
      setState({ ...outer.theme })
    }
  }

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={state}>
        {props.children}
      </ThemeProvider>
    </Context.Provider>
  )
}
