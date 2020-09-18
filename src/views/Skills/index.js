import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link, useRouteMatch } from 'react-router-dom'
import classNames from 'classnames'

import TextParticleAnimation from '../../components/TextParticleAnimation'
import useStyles from './styles'

const Skills = (props) => {
  const classes = useStyles()
  console.log('skills render')
  const { path } = useRouteMatch()
  return (
    <div id='skillsDiv' className={classes.skillsDiv}>
      <Container maxWidth='xs' id='skillsLeftSideContainer'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography id='titleText' variant='h3' className={classNames(classes.title, classes.titleAnimation)}>
          Skills
        </Typography>
        <Typography id='paraOneText' variant='body2' className={classNames(classes.sentence, classes.paraOneAnimation)}>
          I have mostly worked in the front end environment, which is the client side of the web.
        </Typography>
        <Typography id='paraTwoText' variant='body2' className={classNames(classes.sentence, classes.paraTwoAnimation)}>
          Worked on HTML, CSS, Javascript, ReactJS, Redux, React Native (Android), PWA to build web and android mobile applications and custom libraries.
        </Typography>
        <Typography id='paraThreeText' variant='body2' className={classNames(classes.sentence, classes.paraThreeAnimation)}>
          I have also worked on back end environment to build REST APIs using node framewords, like express, fastify and feathers to store and retrive data from databases like MongoDB and MySQL.
        </Typography>
        <Typography id='paraFourText' variant='body2' className={classNames(classes.lastSentence, classes.paraFourAnimation)}>
          {'Visit my '}
          <a
            id='linkedInAnchor'
            className={classes.secondaryColor}
            href='https://www.linkedin.com/in/shubhamnavale'
            rel='noopener noreferrer'
            target='_blank'
          >
            LikedIn
          </a>
          {' profile for more details. Or you can just '}
          <Link id='contactAnchor' style={{ color: '#3EFDD8' }} to={`${path}/contact`}>
            {'contact'}
          </Link>
          {' me.'}
        </Typography>
      </Container>
      <div id='skillsRightSideContainer' className={classes.rightContainer}>
        <TextParticleAnimation
          animationText={'JS'}
          particleColor={'#949699'}
          delay={1400}
        />  
      </div>
    </div>
  )
}

export default Skills
