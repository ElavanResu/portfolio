import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Logo from '../Logo'

import NavBar from './NavBar'
import ProjectDetails from "../../views/Work/ProjectDetails";

let customTheme = createMuiTheme()

const drawerWidth = 56;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("xs")]: {
      width: `calc(100% - 0px)`
    },
    flex: 1
  },
  appBar: {
    backgroundColor: '#181818'
    // width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    }
  },
  // necessary for content to be below app bar
  icons: {
    color: '#949699'
  },
  content: {
    // flexGrow: 1,
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
}));

function ResponsiveDrawer(props) {
  const { navBarRoutes } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
          <Route path={`/${ele.routeName}/${child.routeName}`} key={`route-${ele.routeName}-${child.routeName}`}>
            <ChildComponent {...child.childProps} />
          </Route>
        )
      })
      childRoutes = [...childRoutes, ...cRoutes]
    }
    return (
      <Route exact={exact} path={`/${ele.routeName}`} key={`route-${ele.routeName}`}>
        <Component children={ele.children} />
      </Route>
    )
  })
  return (
    <Router>
      <div id='navigationRootDiv' className={classes.root}>
        {/* <CssBaseline /> */}
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <div className={classes.title}><Logo /></div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
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
          <Route exact path="/">
            <Redirect to='/home' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ResponsiveDrawer;
