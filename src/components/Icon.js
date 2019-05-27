// favicon/apple-touch-icon
import React from 'react'

export default ({
  size = 512,
  ...props
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: size / 3,
        letterSpacing: '0.1em',
        color: 'black',
        backgroundColor: 'tomato',
      }}>
      <div
        style={{
          marginLeft: '0.1em',
        }}>
        DSC
      </div>
    </div>
  )
}
