import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../Logo'

const useStyles = makeStyles((theme) => ({
  navBarDiv: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center'
  },
  inactiveIcons: {
    color: '#949699'
  },
  logoContainer: {
    ...theme.mixins.toolbar,
    color: 'white',
    height: 56,
    width: 56
  },
  activeIcon: {
    color: '#3EFDD8'
  },
  listItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  logo: {
    color: 'white !important'
  },
  linkedInIcon: {
    color: '#949699',
    cursor: 'pointer',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 24
  },
  gitHubIcon: {
    color: '#949699',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 'auto',
    cursor: 'pointer'
  }
}));

const IconMapper = {
  'home': HomeIcon,
  'about': PersonIcon,
  'skills': ImportantDevicesIcon,
  'work': WorkIcon,
  'contact': ContactMailIcon
}

const socialLink = {
  linkedIn: 'https://www.linkedin.com/in/shubhamnavale',
  github: 'https://github.com/ElavanResu'
}

const SideNav = (props) => {
  const onSocialLinkClick = (key) => {
    window.open(socialLink[key], '_blank');
  }
  const { navBarRoutes, handleDrawerToggle, showLogo } = props
  const location = useLocation()
  console.log('location: ', location)
  const classes = useStyles()
  return (
    <div id={'navBarDivContainer'} className={classes.navBarDiv}>
      {showLogo && <div className={classes.logoContainer}><Logo /></div>}
      {/* <Divider /> */}
      <List id={'navBarListContainer'}>
        {navBarRoutes.map((ele, index) => {
          const IconType = IconMapper[ele.iconName]
          return (
            <Link key={`link-${ele.routeName}`} to={`/${ele.routeName}`} className={classes.link} onClick={handleDrawerToggle}>
              <ListItem className={classes.listItem} key={ele.routeName}>
                {/* <ListItemIcon> */}
                  <IconType className={(`/${ele.routeName}` === location.pathname) ? classes.activeIcon : classes.inactiveIcons} />
                {/* </ListItemIcon> */}
              </ListItem>
            </Link>
          )
        })}
      </List>
      <GitHubIcon fontSize='small' onClick={() => onSocialLinkClick('github')} className={classes.gitHubIcon} />
      <LinkedInIcon fontSize='small' onClick={() => onSocialLinkClick('linkedIn')} className={classes.linkedInIcon} />
    </div>
  )
}

export default SideNav