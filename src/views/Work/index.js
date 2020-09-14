import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import FlipCard from '../../components/FlipCard'
import TextParticleAnimation from '../../components/TextParticleAnimation'
import { Link, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  workDiv: {
    height: '100%',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
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
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
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
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
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
      minWidth: 250
    }
  },
  link: {
    color: 'inherit'
  }
}))

const Work = (props) => {
  const { children } = props
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
  const classes = useStyles()
  const theme = useTheme()
  const { path, url } = useRouteMatch()
  console.log('render work', path, url)
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
            Here are some projects that I have been working on. They are still in development.
          </Typography>
        </Container>
        <div id={'flipCardDiv'} className={classes.flexContainer}>
          {
            children.map(project => {
              return (
                <Link key={`link-${path}-${project.routeName}`} to={`${path}/${project.routeName}`} className={classes.link}>
                  <FlipCard
                    styles={{
                      margin: theme.spacing(2) 
                    }}
                    cardImgUrl={project.childProps.cardImgUrl}
                    backCardImgUrl={project.childProps.backCardImgUrl}
                    title={project.childProps.title}
                    tags={project.childProps.tags}
                    githubLink={project.childProps.githubLink}
                    inDevelopment={project.childProps.inDevelopment}
                    id={project.childProps.id}
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
      {
        showAnimation && <div id='rightSideDiv' className={classes.rightContainer}>
          <TextParticleAnimation
            animationText={'💼'}
            particleColor={'#949699'}
          /> 
        </div>
      }
    </div>
  )
}

export default Work
