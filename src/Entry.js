import React, { useState, useEffect } from 'react'

import ParticleSpinnerLoading from './components/ParticleSpinnerLoading'
import Navigation from './components/Navigation'
import { navBarRoutes } from './Routes'

const Entry = (props) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2200)
  }, [])

  if (loading) {
    return (
    <div id='lodingDiv'>
      <ParticleSpinnerLoading
        colors={['#949699', '#3EFDD8']}
        backgroundColor={'#1d1d1d0d'}
      />
    </div>
    )
  }
  return (
    <Navigation
      navBarRoutes={navBarRoutes}
    />
  )
}

export default Entry
