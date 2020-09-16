import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'
import { Link, useRouteMatch } from 'react-router-dom'
import classNames from 'classnames'

import FlipCard from '../../components/FlipCard'
import TextParticleAnimation from '../../components/TextParticleAnimation'
import useStyles from './styles'

const Work = (props) => {
  const { children } = props
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 840) {
      setShowAnimation(false)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 840 && showAnimation) {
      setShowAnimation(false)
    } else if (window.innerWidth > 840 && !showAnimation) {
      setShowAnimation(true)
    }
  })
  const classes = useStyles()
  console.log('classes: ', classes)
  const theme = useTheme()
  const { path, url } = useRouteMatch()
  console.log('render work', path, url)
  return (
    <div id='workDiv' className={classes.workDiv}>
      <div id='leftSideDiv' className={classes.leftSideDiv}>
        <Container maxWidth='xs' id='workContainer'
          classes={{
            root: classes.rootContainer
          }}
        >
          <Typography variant='h3' className={classNames(classes.title, classes.titleAnimation)}>
            My Work
          </Typography>
          <Typography variant='body2' className={classNames(classes.sentence, classes.paraOneAnimation)}>
            Here are some projects that I have been working on. They are still in development.
          </Typography>
        </Container>
        <div id={'flipCardDiv'} className={classes.flexContainer}>
          {
            children.map(project => {
              return (
                <Link key={`link-${path}-${project.routeName}`} to={`${path}/${project.routeName}`}>
                  <FlipCard
                    customClasses={classes[`flipCard${project.childProps.id}`]}
                    styles={{
                      margin: theme.spacing(2) 
                    }}
                    cardImgUrl={project.childProps.cardImgUrl}
                    backCardImgUrl={project.childProps.backCardImgUrl}
                    title={project.childProps.title}
                    tags={project.childProps.tags}
                    githubLink={project.childProps.githubLink}
                    inDevelopment={project.childProps.inDevelopment}
                    id={project.childProps.id}
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
      {
        showAnimation && <div id='rightSideDiv' className={classes.rightContainer}>
          <TextParticleAnimation
            animationText={'💼'}
            particleColor={'#949699'}
            delay={1200}
          /> 
        </div>
      }
    </div>
  )
}

export default Work
