import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  firstSentence: {
    color: '#949699',
    marginBottom: theme.spacing(2)
  },
  secondSentence: {
    color: '#949699',
    marginBottom: theme.spacing(2)
  },
  thirdSentence: {
    color: '#949699',
  },
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
  }
}));

const About = (props) => {
  console.log('render about')
  const classes = useStyles()
  return (
    <div className={classes.aboutDiv}>
      <Container maxWidth='xs' id='aboutdiv'
        classes={{
          root: classes.rootContainer
        }}
      >
        <Typography variant="h3" className={classes.title}>
          About me
        </Typography>
        <Typography variant="body2" className={classes.firstSentence}>
          Worked in a web and android app development industry for 2.7 years. Currently working as a Software Developer at Coradius Technologies, a tech startup which provides financial technical solutions.
        </Typography>
        <Typography variant="body2" className={classes.secondSentence}>
          Positive thinker, well-organised, problem solver, quick learner and ability to cope with different situations. Working as a software developer, I have learned that I can never quench my thirst of knowledge. Every other developer or colleague has something to teach me.
        </Typography>
        <Typography variant="body2" className={classes.thirdSentence}>
          When not working, you'll find me playing my guitar-trying to develop muscle memory for chords, experimenting in the kitchen or playing co-op multiplayer games on steam.
        </Typography>
      </Container>
    </div>
  )
}

export default About
