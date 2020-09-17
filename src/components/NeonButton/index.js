import React from 'react'

import './index.css'

const NeonButton = (props) => {
  const { text, onClick } = props
  return (
    <div data-text={`${text}`} id='neonButtonDiv' onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        {text}
    </div>
  )
}

export default NeonButton
