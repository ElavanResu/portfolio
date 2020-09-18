import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  pageNotFoundContainer: {
    display: 'grid',
    margin: 'auto'
  },
  errorCodeText: {
    color: '#949699',
    fontSize: 70
  },
  errorCodeMessage: {
    color: '#949699',
    fontSize: 30
  },
  notFoundText: {
    position: 'relative',
    animation: '$glitch 2s linear 0s infinite',
    '&:before': {
      content: 'attr(content)',
      position: 'absolute',
      left: 0,
      right: 0,
      animation: '$topGlitch 1s linear 0s infinite',
      clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%)'
    },
    '&:after': {
      content: 'attr(content)',
      position: 'absolute',
      left: 0,
      right: 0,
      animation: '$bottomGlitch 1.5s linear 0s infinite',
      clipPath: 'polygon(0 70%, 100% 70%, 100% 100%, 0 100%)'
    }
  },
  '@keyframes glitch': {
    '2%, 64%': {
      transform: 'translate(2px, 0)'
    },
    '4%, 60%': {
      transform: 'translate(-2px, 0)'
    },
    '62%': {
      transform: 'translate(0, 0)'
    }
  },
  '@keyframes topGlitch': {
    '2%, 64%': {
      transform: 'translate(2px, -2px)'
    },
    '4%, 60%': {
      transform: 'translate(-2px, 2px)'
    },
    '62%': {
      transform: 'translate(13px, -1px)'
    }
  },
  '@keyframes bottomGlitch': {
    '2%, 64%': {
      transform: 'translate(2px, 0)'
    },
    '4%, 60%': {
      transform: 'translate(-2px, 0)'
    },
    '62%': {
      transform: 'translate(-13px, 3px)'
    }
  }
}))

export default useStyles
