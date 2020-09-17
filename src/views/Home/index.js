import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'

import NeonButton from '../../components/NeonButton'

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: '#949699'
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
        <Typography variant='h4'>
          Namaste, my name is Shubham
        </Typography>
        <Typography variant='h6' className={classes.subtitle}>
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
