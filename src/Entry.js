import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Navigation from './components/navigation/Navigation'
import Home from './views/Home'
import About from './views/About'
import Skills from './views/Skills'
import Work from './views/Work'
import Contact from './views/Contact'

const Entry = (props) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  const siderBarData = [
    {
      root: true,
      routeName: 'home',
      iconName: 'home',
      component: Home
    },
    {
      routeName: 'about',
      iconName: 'about',
      component: About
    },
    {
      routeName: 'skills',
      iconName: 'skills',
      component: Skills
    },
    {
      routeName: 'work',
      iconName: 'work',
      component: Work
    },
    {
      routeName: 'contact',
      iconName: 'contact',
      component: Contact
    }
  ]
  if (loading) {
    return (
      <Loading
        colors={['#949699', '#3EFDD8']}
        backgroundColor={'#1d1d1d0d'}
      />
    )
  }
  return (
    <Navigation
      siderBarData={siderBarData}
    />
  )
}

export default Entry
