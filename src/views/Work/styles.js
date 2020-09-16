import { makeStyles } from '@material-ui/core/styles'
import { navBarRoutes } from '../../Routes'

const useStyles = makeStyles((theme) => {
  const workData = navBarRoutes.find(ele => ele.routeName === 'work')
  const initialStyles = {
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
    titleAnimation: {
      opacity: 0,
      transform: `translateY(20px)`,
      color: '#3EFDD8',
      animation: '$slideHomeContent 0.45s ease 0.2s 1 forwards'
    },
    paraOneAnimation: {
      opacity: 0,
      transform: `translateY(20px)`,
      animation: '$slideHomeContent 0.45s ease 0.45s 1 forwards'
    },
    buttonOne: {
      opacity: 0,
      transform: `translateY(20px)`,
      animation: '$slideHomeContent 0.45s ease 0.7s 1 forwards'
    },
    '@keyframes slideHomeContent': {
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
    flexContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      },
      justifyContent: 'center',
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(6),
      '& a': {
        color: 'inherit'
      }
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
  }
  let initialAnimationTime = 0.7
  workData.children.forEach((ele, index) => {
    initialStyles[`flipCard${ele.childProps.id}`] = {
      opacity: 0,
      transform: `translateY(20px)`,
      animation: `$slideHomeContent 0.45s ease ${initialAnimationTime + (0.25 * (1 * index))}s 1 forwards`
    }
  })
  return initialStyles
})

export default useStyles