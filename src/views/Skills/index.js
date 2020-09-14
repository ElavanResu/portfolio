import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextParticleAnimation from '../../components/TextParticleAnimation'

const useStyles = makeStyles((theme) => ({
  skillsDiv: {
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
      flexDirection: 'column'
    },
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
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
  lastSentence: {
    color: '#949699',
  },
  secondaryColor: {
    color: '#3EFDD8'
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

const Skills = (props) => {
  const classes = useStyles()
  console.log('re render')
  return (
    <div id='skillsDiv' className={classes.skillsDiv}>
      <Container maxWidth='xs' id='skillContainer'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography variant='h3' className={classes.title}>
          Skills
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          I have mostly worked in the front end environment, which is the client side of the web.
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          Worked on HTML, CSS, Javascript, ReactJS, Redux, React Native (Android), PWA to build web and android mobile applications and custom libraries.
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          I have also worked on back end environment to build REST APIs using node framewords, like express, fastify and feathers to store and retrive data from databases like MongoDB and MySQL.
        </Typography>
        <Typography variant='body2' className={classes.lastSentence}>
          Visit my <a className={classes.secondaryColor} href='https://www.linkedin.com/in/shubhamnavale' rel='noopener noreferrer' target='_blank'>LikedIn</a> profile for more details. Or you can just <a className={classes.secondaryColor} href='http://localhost:3000/contact'>contact</a> me.
        </Typography>
      </Container>
      <div className={classes.rightContainer}>
        <TextParticleAnimation
          animationText={'JS'}
          particleColor={'#949699'}
        />  
      </div>
    </div>
  )
}

export default Skills
