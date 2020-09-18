import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

import TextParticleAnimation from '../../components/TextParticleAnimation'
import useStyles from './styles'

const About = (props) => {
  console.log('render about')
  const classes = useStyles()
  return (
    <div id='aboutDiv' className={classes.aboutDiv}>
      <Container maxWidth='xs' id='aboutLeftSideContainer'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography id='titleText' variant='h3' className={classNames(classes.title, classes.titleAnimation)}>
          About me
        </Typography>
        <Typography id='paraOneText' variant='body2' className={classNames(classes.sentence, classes.paraOneAnimation)}>
          Worked in a web and android app development industry for 2.7 years. Currently working as a Software Developer at Coradius Technologies, a tech startup which provides financial technical solutions.
        </Typography>
        <Typography id='paraTwoText' variant='body2' className={classNames(classes.sentence, classes.paraTwoAnimation)}>
          Positive thinker, well-organised, problem solver, quick learner and ability to cope with different situations. Working as a software developer, I have learned that I can never quench my thirst of knowledge. Every other developer or colleague has something to teach me.
        </Typography>
        <Typography id='paraThreeText' variant='body2' className={classNames(classes.lastSentence, classes.paraThreeAnimation)}>
          When not working, you'll find me playing my guitar-trying to develop muscle memory for chords, experimenting in the kitchen or playing co-op multiplayer games on steam.
        </Typography>
      </Container>
      <div id='aboutRightSideContainer' className={classes.rightContainer}>
        <TextParticleAnimation
          animationText={'Hi'}
          particleColor={'#949699'}
          delay={1200}
        /> 
      </div>
    </div>
  )
}

export default About