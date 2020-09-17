import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

import SideNav from './SideNav'

const NavBar = (props) => {
  const { mobileOpen, handleDrawerToggle, navBarRoutes, drawerWidth } = props

  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('xs')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      backgroundColor: '#181818',
      width: drawerWidth,
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none',  /* IE and Edge */
      scrollbarWidth: 'none'
    },
    paperAnchorDockedLeft: {
      borderRight: 'unset'
    },
  }))

  const classes = useStyles()

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <SideNav
            handleDrawerToggle={handleDrawerToggle}
            navBarRoutes={navBarRoutes}
          />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          id={'drawerMenuWeb'}
          classes={{
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.paperAnchorDockedLeft
          }}
          variant='permanent'
          open
        >
          <SideNav
            showLogo
            navBarRoutes={navBarRoutes}
          />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default NavBar
