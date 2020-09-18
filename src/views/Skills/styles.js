import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  skillsDiv: {
    display: 'flex',
    overflowX: 'hidden',
    flex: 1,
    flexWrap: 'wrap'
  },
  leftRootContainer: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(10),
      marginBottom: theme.spacing(6)
    },
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(0)
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#3EFDD8'
  },
  titleAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$fadeIn 0.45s ease 0.2s 1 forwards'
  },
  paraOneAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$fadeIn 0.45s ease 0.45s 1 forwards'
  },
  paraTwoAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$fadeIn 0.45s ease 0.7s 1 forwards'
  },
  paraThreeAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$fadeIn 0.45s ease 0.95s 1 forwards'
  },
  paraFourAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$fadeIn 0.45s ease 1.2s 1 forwards'
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
  rightContainer: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      minWidth: 250
    }
  }
}))

export default useStyles
