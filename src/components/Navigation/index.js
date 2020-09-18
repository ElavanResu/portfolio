import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Logo from '../Logo'
import NavBar from './NavBar'
import PageNotFound from '../../views/PageNotFound'

const drawerWidth = 56

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - 0px)`
    },
    flex: 1
  },
  appBar: {
    backgroundColor: '#181818'
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      justifyContent: 'space-between'
    }
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  icons: {
    color: '#949699'
  },
  content: {
    padding: theme.spacing(3)
  },
  listItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  title: {
    height: 56,
    width: 56
  }
}))

function ResponsiveDrawer(props) {
  const { navBarRoutes } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  let childRoutes = []
  let parentRoutes = navBarRoutes.map(ele => {
    const Component = ele.component
    let exact = false
    if (ele.children && ele.children.length > 0) {
      console.log('routes: ', ele.routeName)
      exact = true
      let cRoutes = ele.children.map(child => {
        const ChildComponent = child.component
        return (
          <Route id={`${ele.routeName}-${child.routeName}-route-anchor`} path={`/${ele.routeName}/${child.routeName}`} key={`route-${ele.routeName}-${child.routeName}`}>
            <ChildComponent {...child.childProps} />
          </Route>
        )
      })
      childRoutes = [...childRoutes, ...cRoutes]
    }
    return (
      <Route id={`${ele.routeName}-route-anchor`} exact={exact} path={`/${ele.routeName}`} key={`route-${ele.routeName}`}>
        <Component children={ele.children} />
      </Route>
    )
  })
  return (
    <Router>
      <div id='navigationRootDiv' className={classes.root}>
        <Hidden smUp implementation='css'>
          <AppBar id='appBar' position='fixed' className={classes.appBar}>
            <Toolbar id='toolBar' className={classes.toolbar}>
              <div id='mobileLogoDiv' className={classes.title}><Logo /></div>
              <IconButton
                id='menuIconButton'
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon id='menuIcon' />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Hidden>
        <NavBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          navBarRoutes={navBarRoutes}
          drawerWidth={drawerWidth}
        />
        <Switch>
          {parentRoutes}
          {childRoutes}
          <Route id='rootPathAnchor' exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route id='unMatchedRoute' path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default ResponsiveDrawer
