
const React = require('react')
const colors = {
  black: '#222',
  tomato: 'tomato'
}

const baseline = {
  a: 17,
  b: 26
}

// With NYC
const DoubleIcon = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <svg viewBox='0 0 32 32'>
        <rect
          width={32}
          height={32}
          fill={colors.tomato}
        />
        <text
          style={{
            fontSize: 14,
            lineHeight: 1
          }}
          fill={colors.black}
          textAnchor='middle'
          x={16}
          y={baseline.a}>
          DSC
        </text>
        <text
          style={{
            fontSize: 7,
            lineHeight: 1,
            letterSpacing: '0.1em'
          }}
          fill={colors.black}
          textAnchor='middle'
          x={16}
          y={baseline.b}>
          NYC
        </text>
      </svg>
    </div>
  )
}

const Icon = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <svg viewBox='0 0 32 32'>
        <rect
          width={32}
          height={32}
          fill={colors.tomato}
        />
        <text
          style={{
            fontSize: 14,
            lineHeight: 1
          }}
          fill={colors.black}
          textAnchor='middle'
          x={16}
          y={20.5}>
          DSC
        </text>
      </svg>
    </div>
  )
}

module.exports = Icon

const css = `
body {
  font-family: -apple-system;
  font-weight: 700;
  margin: 0;
}
svg {
  display: block;
  width: 512px;
  height: 512px;
  margin: 0;
}
`

