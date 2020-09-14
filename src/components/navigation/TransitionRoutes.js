import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import './navBarTransitions.css'

let customTheme = createMuiTheme()

const TransitionRoutes = (props) => {
  const { siderBarData } = props
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames='lift'
        timeout={2000}
      >
        <Switch location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  )
}

export default TransitionRoutes
