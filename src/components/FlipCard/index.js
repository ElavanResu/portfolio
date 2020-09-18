import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import './flipCard.css'

const useStyles = makeStyles((theme) => ({
  tagText: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const FlipCard = (props) => {
  const classes = useStyles()
  const { customClasses } = props
  return (
    <div id='flipCardDivContainer' className={classNames('flip-card', customClasses)} style={props.styles}>
      <div id='cardFrontSideDiv' className={'front'}
        style={{
          backgroundImage: `url(${props.cardImgUrl})`
        }}
      >
        <div id='topLabelDiv' className={'top-label'}>
          <Typography id='topLabelText' variant='caption'>
            {props.title}
          </Typography>
        </div>
        {
          props.inDevelopment && <div id='bottomLabelDiv' className={'bottom-label'}>
            <Typography id='bottomLabelText' variant='caption'>
              {'In Development'}
            </Typography>
          </div>
        }
      </div>
      <div id='cardBackSideDiv' className='back'
        style={{
          backgroundImage: `url(${props.backCardImgUrl})`
        }}
      >
        <div id='cardCoverDiv' className={'cover'}>
          {
            props.tags.map((ele, index) => {
              if (index < 3) {
                return (
                  <div id={`tag-label-div-${ele}`} className={'tag-label'} key={`${props.id}-tags-${index}`}>
                    <Typography id={`tag-label-text-${ele}`} variant='caption' className={classes.tagText}>
                      {ele}
                    </Typography>
                  </div>
                )
              }
              return null
            })
          }
          <div id='tag-label-div-more' className={'tag-label'}>
            <Typography id='tag-label-text-more' variant='caption' className={classes.tagText}>
              More Details...
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
