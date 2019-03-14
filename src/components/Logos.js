import React from 'react'
import Box from './Box'

const Logos = (props) => (
  <Box width={[1, 2/3, 1/2]}>
    <iframe
      title='figma'
      style={{
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: '#eee',
        width:'800px',
        height:'450px'
      }}
      src='https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/QaYbQ2LGdA3lefOWZCosDcrt/DSC-NYC-logos'
      allowFullScreen
    />
  </Box>
)

export default Logos
