import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import FlipCard from '../components/flipCard'

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  rootContainer: {
    textAlign: 'center',
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(4)
      // paddingRight: theme.spacing(4)
    },
    paddingTop: theme.spacing(8)
    // paddingLeft: theme.spacing(8),
    // paddingRight: theme.spacing(0)
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
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    // maxWidth: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    paddingTop: theme.spacing(8)
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: theme.spacing(8)
  },
}))

const Work = (props) => {
  console.log('render skills')
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div id='work' className={classes.aboutDiv}>
      <Container maxWidth='xs' id='skilldiv'
        classes={{
          root: classes.rootContainer
        }}
      >
        <Typography variant="h3" className={classes.title}>
          My Work
        </Typography>
        <Typography variant="body2" className={classes.sentence}>
          Here are some projects that I am have been working on. They are still in development.
        </Typography>
        <Typography variant="body2" className={classes.sentence}>
          
        </Typography>
      </Container>
      <div className={classes.flexContainer}>
        <FlipCard
          styles={{
            margin: theme.spacing(1) 
          }}
          imgUrl={'https://i.imgur.com/9qRzZfs.jpg'}
          backImgUrl={'https://i.imgur.com/2esy9Az.jpg'}
          title={'Discord bot'}
          info={['NodeJS', 'MongoDB']}
          redirectUrl={'https://github.com/ElavanResu/e-bot'}
          inDevelopment
        />
        <FlipCard
          styles={{
            margin: theme.spacing(1) 
          }}
          imgUrl={'https://i.imgur.com/9qRzZfs.jpg'}
          backImgUrl={'https://i.imgur.com/2esy9Az.jpg'}
          title={'Expense App'}
          info={['React Native', 'CSS', 'Watermelon DB']}
          redirectUrl={'https://github.com/ElavanResu/ExpenseTracker'}
          // inDevelopement
        />
      </div>
    </div>
  )
}

export default Work
