import { makeStyles } from '@material-ui/core/styles'

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
  fieldOne: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 0.7s 1 forwards'
  },
  fieldTwo: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 0.95s 1 forwards'
  },
  fieldThree: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.2s 1 forwards'
  },
  fieldFour: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.45s 1 forwards'
  },
  buttonOne: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.7s 1 forwards'
  },
  buttonTwo: {
    opacity: 0,
    transform: `translateY(20px)`,
    animation: '$slideHomeContent 0.45s ease 1.95s 1 forwards'
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

export default useStyles
