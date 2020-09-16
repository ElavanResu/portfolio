import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom'
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
  console.log('project props:', props)
  const { id, title, shortDescription, about, banner, cardImgUrl, backCardImgUrl, tags, githubLink, inDevelopment} = props
  const goToLink = () => {
    window.open(githubLink, '_blank');
  }
  return (
    <div id='projectDetailsDiv'>
      <div id='titleDiv'>
        <Typography id='title' className='title' variant='h3'>
          {title}
        </Typography>
      </div>
      <Typography id='shortDesc' className='subtitle' variant='body1'>
        {shortDescription}
      </Typography>
      <div id='firstLevelInfo'>
        <ThemeProvider theme={theme}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<GitHubIcon />}
            onClick={goToLink}
          >
            Checkout Repo
          </Button>
        </ThemeProvider>
      </div>
      <img id='image' src={banner} />
      <div id='aboutDiv'>
        <Typography id={'heading'} className='title' variant='h4'>
          {'About the project'}
        </Typography>
        <hr />
        {
          about.map((paragraph, index) => {
            return (
              <Typography id={`paragraph`} className='subtitle' key={`paragraph-${index}`} variant='body1'>
                {paragraph}
              </Typography>
            )
          })
        }
      </div>
      <div id='techInfoDiv'>
        <Typography id={'heading'} className='title' variant='h4'>
          {'Tech Sheet'}
        </Typography>
        <Typography id='techInfoLabel' className='subtitle' variant='body1'>
          {'Technologies I used while working on this project'}
        </Typography>
        <hr />
        <ul>
          {
            tags.map((tag, index) => {
              return (
                <li key={`${tag}`}>
                  <Typography id={`${tag}`} className='subtitle' variant='body1'>
                    {tag}
                  </Typography>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div id='metaInfoDiv'>
        <Typography id={'heading'} variant='subtitle2'>
          {'What do you think?'}
        </Typography>
        <Typography id={'content1'} variant='body2'>
          {'Wanna get in touch or talk about a project?'}
        </Typography>
        <Typography id={'content2'} variant='body2'>
          {`Drop a line in the form at the `}
          <Link style={{ color: '#949699', fontWeight: 'bolder' }} to={`/contact`}>
            {'Contact'}
          </Link>
          {' section.'}
        </Typography>
      </div>
    </div>
  )
}

export default ProjectDetails
