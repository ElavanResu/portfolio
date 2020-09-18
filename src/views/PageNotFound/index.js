import React from 'react'
import classNames from 'classnames'

import useStyles from './styles'

const PageNotFound = (props) => {
  const classes = useStyles()
  return (
    <div id='pageNotFoundDivContainer' className={classes.pageNotFoundContainer}>
      <span content='403' id='notFoundText' class={classNames(classes.notFoundText, classes.errorCodeText)}>
        403
      </span>
      <span content='There is nothing here to see!!!' id='notFoundText' class={classNames(classes.notFoundText, classes.errorCodeMessage)}>
        There is nothing here to see!!!
      </span>
    </div>
  )  
}

export default PageNotFound
