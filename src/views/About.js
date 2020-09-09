import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Animation from './Animation'

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    display: 'flex',
    overflowX: 'hidden',
    // flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
    // justifyContent: 'center'
  },
  leftRootContainer: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(10),
      // minHeight: 400,
      // justifyContent: 'unset',
      marginBottom: theme.spacing(6)
    },
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(0)
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#3EFDD8'
  },
  sentence: {
    color: '#949699',
    marginBottom: theme.spacing(2)
  },
  sentence: {
    color: '#949699',
    marginBottom: theme.spacing(2)
  },
  lastSentence: {
    color: '#949699',
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      minWidth: 250,
      // maxheight: 100
    }
  }
}))

const About = (props) => {
  console.log('render about')
  const classes = useStyles()
  return (
    <div className={classes.aboutDiv}>
      <Container maxWidth='xs' id='aboutdiv'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography variant='h3' className={classes.title}>
          About me
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          Worked in a web and android app development industry for 2.7 years. Currently working as a Software Developer at Coradius Technologies, a tech startup which provides financial technical solutions.
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          Positive thinker, well-organised, problem solver, quick learner and ability to cope with different situations. Working as a software developer, I have learned that I can never quench my thirst of knowledge. Every other developer or colleague has something to teach me.
        </Typography>
        <Typography variant='body2' className={classes.lastSentence}>
          When not working, you'll find me playing my guitar-trying to develop muscle memory for chords, experimenting in the kitchen or playing co-op multiplayer games on steam.
        </Typography>
      </Container>
      <div className={classes.rightContainer}>
        <Animation
          animationText={'Hi'}
          particleColor={'#949699'}
        /> 
      </div>
    </div>
  )
}

export default About
