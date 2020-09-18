import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'

import NeonButton from '../../components/NeonButton'

const useStyles = makeStyles((theme) => ({
  titleText: {
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$fadeIn 0.45s ease 0.25s 1 forwards'
  },
  subtitle: {
    color: '#949699',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$fadeIn 0.45s ease 0.5s 1 forwards'
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: `translateY(20px)`
    },
    '100%': {
      opacity: 1,
      transform: `translateY(0px)`
    }
  },
  knowMoreButtonDiv: {
    transform: 'translateY(100%)'
  },
  homeDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100vw'
    }
  },
  knowMoreButton: {
    color: '#3EFDD8',
    backgroundColor: '#3EFDD8'
  }
}))

const Home = (props) => {
  console.log('render home')
  const classes = useStyles()
  const history = useHistory()
  const onKnowMore = () => {
    history.push('/about')
  }
  return (
    <div id='homeDiv' className={classes.homeDiv}>
      <Container maxWidth='xs' id='introductionContainer'>
        <Typography id='titleText' variant='h4' className={classes.titleText}>
          Namaste, my name is Shubham
        </Typography>
        <Typography id='subtitleText' variant='h6' className={classes.subtitle}>
          I am a frontend and backend developer, who loves to create awesome web apps and android apps using react, react native and node
        </Typography>
      </Container>
      <div id='knowMoreButtonDiv' className={classes.knowMoreButtonDiv}>
        <NeonButton
          text='KNOW MORE'
          color='#3EFDD8'
          onClick={onKnowMore}
        />
      </div>
    </div>
  )
}

export default Home
