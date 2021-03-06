import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import classNames from 'classnames'

import TextParticleAnimation from '../../components/TextParticleAnimation'
import useStyles from './styles'

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
  console.log('rerender')
  return (
    <div id='contactDiv' onSubmit={handleSubmit} className={classes.contactDiv}>
      <Container maxWidth='xs' id='contactLeftSideContainer'
        classes={{
          root: classes.leftRootContainer
        }}
      >
        <Typography id='titleText' variant='h3' className={classNames(classes.title, classes.titleAnimation)}>
          Contact me
        </Typography>
        <Typography id='paraOneText' variant='body2' className={classNames(classes.sentence, classes.paraOneAnimation)}>
          I am always open for new opportunities. If have any questions and want to talk with me, don't hesitate to contact me using the below form.
        </Typography>
        <form id='contactFormContainer' className={classes.form} noValidate>
          <div id='gridContainerDiv' className={classes.griDivContainer}>
            <Grid id='mainGrid' container spacing={2}>
              <Grid id='gridItemOne' item xs={12} sm={6} className={classes.fieldOne}>
                <TextField
                  id='nameTextField'
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  name='name'
                  fullWidth
                  id='name'
                  label='Name'
                  onChange={handleInputChange}
                  value={name}
                />
              </Grid>
              <Grid id='gridItemTwo' item xs={12} sm={6} className={classes.fieldTwo}>
                <TextField
                  id='emailTextField'
                  classes={{
                    root: classes.textFieldRoot
                  }}
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
              <Grid id='gridItemThree' item xs={12} className={classes.fieldThree}>
                <TextField
                  id='subjectTextField'
                  classes={{
                    root: classes.textFieldRoot
                  }}
                  name='subject'
                  fullWidth
                  id='subject'
                  label='Subject'
                  onChange={handleInputChange}
                  value={subject}
                />
              </Grid>
              <Grid id='gridItemFour' item xs={12} className={classes.fieldFour}>
                <TextField
                  id='messageTextField'
                  classes={{
                    root: classes.textFieldRoot
                  }}
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
          <div id='formButtonsDiv' className={classes.formButtonsDiv}>
            <ThemeProvider theme={theme}>
              <Button
                id='formClearButton'
                variant='outlined'
                color='secondary'
                className={classNames(classes.clearButton, classes.buttonOne)}
                onClick={onClear}
              >
                Clear
              </Button>
              <Button
                id='formSubmitButton'
                type='submit'
                variant='contained'
                color='primary'
                className={classes.buttonTwo}
              >
                Dispatch
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </Container>
      {
        showAnimation && <div id={'contacRightSideContainer'} className={classes.rightContainer}>
          <TextParticleAnimation
            animationText={'📞'}
            particleColor={'#949699'}
            delay={1200}
          /> 
        </div>
      }
      <Snackbar
        id='dispatchMessageSnackbar'
        open={openSnack}
        classes={{
          root: classes.snackbarRoot
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={
          <Typography id='snackbarText' variant='body2' className={classes.snackbarText}>
            Message Dispatched!!!
          </Typography>
        }
      />
    </div>
  )
}

export default Contacts
