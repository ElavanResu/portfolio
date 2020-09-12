import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import SettingsIcon from "@material-ui/icons/Settings";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
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
  }
}));

const IconMapper = {
  'home': HomeIcon,
  'about': PersonIcon,
  'skills': SettingsIcon,
  'work': WorkIcon,
  'contact': ContactMailIcon
}

const SideNav = (props) => {
  const { siderBarData, handleDrawerToggle, showLogo } = props
  const location = useLocation()
  console.log('location: ', location)
  const classes = useStyles()
  return (
    <div className={classes.toolbar}>
      {showLogo && <div className={classes.logoContainer}>My Logo</div>}
      {/* <Divider /> */}
      <List id={'navBarListContainer'}>
        {siderBarData.map((ele, index) => {
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
    </div>
  )
}

export default SideNav