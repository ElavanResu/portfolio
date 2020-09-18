import React from 'react'

import './index.css'

const NeonButton = (props) => {
  const { text, onClick } = props
  return (
    <div id='neonButtonDiv' data-text={`${text}`} onClick={onClick}>
      <span id='beamOne'></span>
      <span id='beamTwo'></span>
      <span id='beamThree'></span>
      <span id='beamFour'></span>
        {text}
    </div>
  )
}

export default NeonButton
