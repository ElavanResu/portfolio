import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FlipCard from '../components/flipCard'
import Animation from './Animation'

const useStyles = makeStyles((theme) => ({
  workDiv: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   width: '100vw'
    // }
    height: '100%',

    display: 'flex',
    // overflowX: 'hidden',
    // flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    // [theme.breakpoints.down("sm")]: {
    //   width: '100vw'
    // }
    // justifyContent: 'center'
  },
  leftSideDiv: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
  },
  rootContainer: {
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('xs')]: {
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
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    // maxWidth: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(4)
    },
    justifyContent: 'center',
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: theme.spacing(8)
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

const Work = (props) => {
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

  console.log('render skills')
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div id='workDiv' className={classes.workDiv}>
      <div id='leftSideDiv' className={classes.leftSideDiv}>
        <Container maxWidth='xs' id='workContainer'
          classes={{
            root: classes.rootContainer
          }}
        >
          <Typography variant='h3' className={classes.title}>
            My Work
          </Typography>
          <Typography variant='body2' className={classes.sentence}>
            Here are some projects that I am have been working on. They are still in development.
          </Typography>
        </Container>
        <div id={'flipCardDiv'} className={classes.flexContainer}>
          <FlipCard
            styles={{
              margin: theme.spacing(2) 
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
              margin: theme.spacing(2) 
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
      {
        showAnimation && <div id='rightSideDiv' className={classes.rightContainer}>
          <Animation
            animationText={'💼'}
            particleColor={'#949699'}
          /> 
        </div>
      }
    </div>
  )
}

export default Work
