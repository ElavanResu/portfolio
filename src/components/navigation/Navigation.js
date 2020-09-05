import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideNav from './SideNav'

let customTheme = createMuiTheme()

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
    width: `calc(100% - ${drawerWidth}px)`,
    flex: 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: '#181818'
    // width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
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
    flexGrow: 1,
    textAlign: 'left'
  }
}));

function ResponsiveDrawer(props) {
  const { window, siderBarData } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <div className={classes.title}>My Logo</div>
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
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={'right'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <SideNav
                handleDrawerToggle={handleDrawerToggle}
                siderBarData={siderBarData}
              />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
                paperAnchorDockedLeft: classes.paperAnchorDockedLeft
              }}
              variant="permanent"
              open
            >
              <SideNav
                showLogo
                // handleDrawerToggle={handleDrawerToggle}
                siderBarData={siderBarData}
              />
            </Drawer>
          </Hidden>
        </nav>
        <Switch>
          {
            siderBarData.map(ele => {
              const Component = ele.component
              return (
                <Route exact path={(ele.root ? [`/${ele.routeName}`, '/'] : `/${ele.routeName}`)} key={`route-${ele.routeName}`}>
                  <ThemeProvider theme={customTheme}>
                    <Component />
                  </ThemeProvider>
                </Route>
              )
            })
          }
        </Switch>
      </div>
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
