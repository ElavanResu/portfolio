import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  rootContainer: {
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(10)
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
  }
}))

const Skills = (props) => {
  console.log('render skills')
  const classes = useStyles()
  return (
    <div className={classes.aboutDiv}>
      <Container maxWidth='xs' id='skilldiv'
        classes={{
          root: classes.rootContainer
        }}
      >
        <Typography variant="h3" className={classes.title}>
          Skills
        </Typography>
        <Typography variant="body2" className={classes.sentence}>
          I have mostly worked in the front end environment, which is the client side of the web.
        </Typography>
        <Typography variant="body2" className={classes.sentence}>
          Worked on HTML, CSS, Javascript, ReactJS, Redux, React Native (Android), PWA to build web and android mobile applications and custom libraries.
        </Typography>
        <Typography variant="body2" className={classes.sentence}>
          I have also worked on back end environment to build REST APIs using node framewords, like express, fastify and feathers to store and retrive data from databases like MongoDB and MySQL.
        </Typography>
        <Typography variant="body2" className={classes.lastSentence}>
          Visit my <a className={classes.secondaryColor} href='https://www.linkedin.com/in/shubhamnavale' rel="noopener noreferrer" target="_blank">LikedIn</a> profile for more details. Or you can just <a className={classes.secondaryColor} href='http://localhost:3000/contact'>contact</a> me.
        </Typography>
      </Container>
    </div>
  )
}

export default Skills
