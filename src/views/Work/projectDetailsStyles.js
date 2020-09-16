import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  titleAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
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
  image: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 0.95s 1 forwards'
  },
  titleTwoAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.2s 1 forwards'
  },
  hrOneAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.45s 1 forwards'
  },
  levelTwoPara: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.7s 1 forwards'
  },
  titleThreeAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.95s 1 forwards'
  },
  levelThreePara: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 2.2s 1 forwards'
  },
  hrTwoAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 2.45s 1 forwards'
  },
  listOneAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 2.7s 1 forwards'
  },
  footerAnimation: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 2.95s 1 forwards'
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
  }
}))

export default useStyles
