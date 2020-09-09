import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Animation from './Animation'

const useStyles = makeStyles((theme) => ({
  contactDiv: {
    display: 'flex',
    overflow: 'hidden',
    flex: 1,
  },
  leftRootContainer: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center'
    },
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(10),
    },
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(0)
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#3EFDD8'
  },
  sentence: {
    color: '#949699',
  },
  snackbarText: {
    color: '#3EFDD8',
    textAlign: 'center'
  },
  form: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  },
  textFieldRoot: {
    '& .MuiInputBase-root': {
      color: '#949699',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#949699',
      borderBottomWidth: '2px'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#949699',
      borderBottomWidth: '2px'
    },
    '& .Mui-error:after': {
      borderBottomColor: '#f44336 !important'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3EFDD8'
    },
    '& .Mui-focused:not(.Mui-error)': {
      color: '#3EFDD8'
    },
    '& .MuiFormLabel-root:not(.Mui-focused):not(.Mui-error)': {
      color: '#949699'
    }
  },
  submitButtonDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2)
  },
  snackbarRoot: {
    '& .MuiSnackbarContent-root': {
      justifyContent: 'center'
    }
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      minWidth: 250,
      // maxheight: 100
    }
  },
  clearButton: {
    marginRight: theme.spacing(1)
  },
  griDivContainer: {
    flex: 1
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3EFDD8'
    },
    secondary: {
      main: '#949699'
    }
  }
})

const Contacts = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState([])
  const [openSnack, setOpenSnack] = useState(false)
  const [showAnimation, setShowAnimation] = useState(true)
  const classes = useStyles()

  useEffect(() => {
    if (window.innerWidth < 700) {
      setShowAnimation(false)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 700 && showAnimation) {
      setShowAnimation(false)
    } else if (window.innerWidth > 700 && !showAnimation) {
      setShowAnimation(true)
    }
  })

  const onClear = event => {
    console.log('resey')
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setErrors([])
  }

  const handleInputChange = event => {
    event.preventDefault()
    const target = event.target
    const name = target.name
    if (name === 'name') {
      setName(target.value)
    } else if (name === 'email') {
      setEmail(target.value)
    } else if (name === 'subject') {
      setSubject(target.value)
    } else if (name === 'message') {
      setMessage(target.value)
    }
  }

  const checkForErrors = () => {
    let newErrorSet = [...errors]
    const emailKey = newErrorSet.findIndex(ele => ele.key === 'email')
    const messageKey = newErrorSet.findIndex(ele => ele.key === 'message')
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      if (emailKey === -1) {
        newErrorSet.push({
          key: 'email',
          message: 'Enter valid email id'
        })
      }
    } else {
      newErrorSet = newErrorSet.filter(ele => ele.key !== 'email')
    }
    if (message === undefined || message === null || (message !== undefined && message.length === 0)) {
      if (messageKey === -1) {
        newErrorSet.push({
          key: 'message',
          message: 'Enter your message'
        })
      }
    } else {
      newErrorSet = newErrorSet.filter(ele => ele.key !== 'message')
    }
    return newErrorSet
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    event.persist()
    const errorsList = checkForErrors()
    if (errorsList.length > 0) {
      console.log('got error: ', errorsList)
      setErrors(errorsList)
    } else {
      console.log('name: ', name)
      console.log('email: ', email)
      console.log('subject: ', subject)
      console.log('message: ', message)
      setErrors([])
      fetch('https://discordapp.com/api/webhooks/752084764277866578/rfttZtgOMXx8mhvr_5vr21EVLPC47JzHi7d3RhOl8q3_FEcQYVHTp06U_CooAKBwP2_y', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({content: `**Got new message:**
        Name:  \`${name}\`
        email:  \`${email}\`
        subject:  \`${subject}\`
        message:  \`${message}\``})
      }).then(function(response) {
        setOpenSnack(true)
        setTimeout(() => setOpenSnack(false), 4000)
        console.log('response: ',response)
      }).catch(function(error) {
        console.log('error in sending: ', error)
      })
    }
  }
  // return (
  //   <div onSubmit={handleSubmit} className={classes.contactDiv}>
  //     <div
  //       id='div1'
  //       style={{
  //         display: 'flex',
  //         flex: 1,
  //         flexDirection: 'column'
  //       }}>
  //         <div id='div1'>div1</div>
  //         <div id='div2'>div2</div>
  //         <div id='div3'>div3</div>
  //         <div style={{ position: 'absolute', bottom: '16px'}}id='div4'>div4</div>

  //       </div>
  //     <div
  //       style={{
  //         display: 'flex',
  //         flex: 1
  //       }}
  //       id='div2'
  //     >div2</div>
  //   </div>
  // )
  console.log('rerender')
  return (
    <div id='contactDiv' onSubmit={handleSubmit} className={classes.contactDiv}>
      <Container maxWidth='xs' id='aboutdiv'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography variant='h3' className={classes.title}>
          Contact me
        </Typography>
        <Typography variant='body2' className={classes.sentence}>
          I am always open for new opportunities. If have any questions and want to talk with me, don't hesitate to contact me using the below form.
        </Typography>
        <form className={classes.form} noValidate>
          <div id='gridContainerDiv' className={classes.griDivContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  // autoComplete='name'
                  name='name'
                  fullWidth
                  id='name'
                  label='Name'
                  onChange={handleInputChange}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  // autoComplete='email'
                  name='email'
                  required
                  error={errors.findIndex(ele => ele.key === 'email') !== -1}
                  fullWidth
                  id='email'
                  label='Email'
                  onChange={handleInputChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  // autoComplete='email'
                  name='subject'
                  fullWidth
                  id='subject'
                  label='Subject'
                  onChange={handleInputChange}
                  value={subject}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  // autoComplete='email'
                  name='message'
                  required
                  error={errors.findIndex(ele => ele.key === 'message') !== -1}
                  fullWidth
                  id='message'
                  label='Message'
                  onChange={handleInputChange}
                  value={message}
                />
              </Grid>
            </Grid>
          </div>
          <div id='submitButtonDiv' className={classes.submitButtonDiv}>
            <ThemeProvider theme={theme}>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.clearButton}
                onClick={onClear}
              >
                Clear
              </Button>
              <Button
                type='submit'
                variant='contained'
                color='primary'
              >
                Dispatch
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </Container>
      {
        showAnimation && <div id={'contactAnimationDiv'} className={classes.rightContainer}>
          <Animation
            animationText={'📞'}
            particleColor={'#949699'}
          /> 
        </div>
      }
      <Snackbar
        open={openSnack}
        classes={{
          root: classes.snackbarRoot
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={
          <Typography variant='body2' className={classes.snackbarText}>
            Message Dispatched!!!
          </Typography>
        }
      />
    </div>
  )
}

export default Contacts
