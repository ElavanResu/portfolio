import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  rootContainer: {
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
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
  }
}))

const Contacts = (props) => {
  console.log('render skills')
  const classes = useStyles()
  return (
    <div className={classes.aboutDiv}>
      contact
    </div>
  )
}

export default Contacts
