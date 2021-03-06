import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import useStyles from './projectDetailsStyles'
import './work.css'

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

const ProjectDetails = (props) => {
  const classes = useStyles()
  console.log('project props:', props)
  const { id, title, shortDescription, about, banner, cardImgUrl, backCardImgUrl, tags, githubLink, inDevelopment} = props
  const goToLink = () => {
    window.open(githubLink, '_blank')
  }
  return (
    <div id='projectDetailsDiv'>
      <div id='titleDiv'>
        <Typography id='titleText' className={classNames('title', classes.titleAnimation)} variant='h3'>
          {title}
        </Typography>
      </div>
      <Typography id='shortDescText' className={classNames('subtitle', classes.paraOneAnimation)} variant='body1'>
        {shortDescription}
      </Typography>
      <div id='firstLevelInfo'>
        <ThemeProvider theme={theme}>
          <Button
            id='checkoutRepoButton'
            variant='contained'
            color='primary'
            startIcon={<GitHubIcon />}
            onClick={goToLink}
            className={classes.buttonOne}
          >
            Checkout Repo
          </Button>
        </ThemeProvider>
      </div>
      <img id='bannerImageTag' className={classes.image} id='image' src={banner} />
      <div id='aboutDiv'>
        <Typography id={'headingText'} className={classNames('title', classes.titleTwoAnimation)} variant='h4'>
          {'About the project'}
        </Typography>
        <hr className={classes.hrOneAnimation}/>
        {
          about.map((paragraph, index) => {
            return (
              <Typography id={`paragraph`} className={classNames('subtitle', classes.levelTwoPara)} key={`paragraph-${index}`} variant='body1'>
                {paragraph}
              </Typography>
            )
          })
        }
      </div>
      <div id='techInfoDiv'>
        <Typography id={'headingText'} className={classNames('title', classes.titleThreeAnimation)} variant='h4'>
          {'Tech Sheet'}
        </Typography>
        <Typography id='techInfoLabelText' className={classNames('subtitle', classes.levelThreePara)} variant='body1'>
          {'Technologies I used while working on this project'}
        </Typography>
        <hr id='hrOne' className={classes.hrTwoAnimation}/>
        <ul id='listContainer' className={classes.listOneAnimation}>
          {
            tags.map((tag, index) => {
              return (
                <li id={`listItem-${index}`} key={`${tag}`}>
                  <Typography id={`${tag}`} className='subtitle' variant='body1'>
                    {tag}
                  </Typography>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div id='metaInfoDiv' className={classes.footerAnimation}>
        <Typography id={'headingText'} variant='subtitle2'>
          {'What do you think?'}
        </Typography>
        <Typography id={'contentOne'} variant='body2'>
          {'Wanna get in touch or talk about a project?'}
        </Typography>
        <Typography id={'contentTwo'} variant='body2'>
          {`Drop a line in the form at the `}
          <Link id={'link-contact-anchor'} style={{ color: '#949699', fontWeight: 'bolder' }} to={`/contact`}>
            {'Contact'}
          </Link>
          {' section.'}
        </Typography>
      </div>
    </div>
  )
}

export default ProjectDetails
