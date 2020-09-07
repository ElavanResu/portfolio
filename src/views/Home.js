import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: '#949699'
  },
  knowMoreButtonDiv: {
    position: 'absolute',
    bottom: theme.spacing(10),
    left: 'auto',
    right: 'auto'
  },
  homeDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      width: '100vw'
    }
  },
  knowMoreButton: {
    color: '#3EFDD8',
    backgroundColor: '#3EFDD8'
  }
}));

const Home = (props) => {
  console.log('render home')
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#3EFDD8'
      },
    },
  });
  const classes = useStyles()
  const history = useHistory()
  const onKnowMore = () => {
    history.push('/about')
  }
  return (
    <div className={classes.homeDiv}>
      <Container maxWidth='xs' id='homediv'>
        <Typography variant="h4">
          Namaste, my name is Shubham
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          I am a frontend and backend developer, who loves to create awesome web apps and android apps using react, react native and node
        </Typography>
      </Container>
      <div className={classes.knowMoreButtonDiv}>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color={'secondary'} onClick={onKnowMore}>
            KNOW MORE
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Home
