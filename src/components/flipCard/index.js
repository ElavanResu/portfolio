import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import './flipCard.css'

const useStyles = makeStyles((theme) => ({
  infoText: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const FlipCard = (props) => {
  const classes = useStyles()
  const onCardClick = () => {
    window.open(`${props.redirectUrl}`, '_blank');
  }
  return (
    <div class={'flip-card'} onClick={onCardClick} style={props.styles}>
      <div class={'front'}
        style={{
          backgroundImage: `url(${props.imgUrl})`
        }}
      >
        <div class={'top-label'}>
          <Typography variant="caption">
            {props.title}
          </Typography>
        </div>
        {
          props.inDevelopment && <div class={'bottom-label'}>
            <Typography variant="caption">
              {'In Development'}
            </Typography>
          </div>
        }
      </div>
      <div class='back'
        style={{
          backgroundImage: `url(${props.backImgUrl})`
        }}
      >
        <div class={'cover'}>
          {
            props.info.map(ele => {
              return (
                <div class={'info-label'}>
                  <Typography variant="caption" className={classes.infoText}>
                    {ele}
                  </Typography>
                </div>
              )
            })
          }
          <div class={'info-label'}>
            <Typography variant="caption" className={classes.infoText}>
              More Details...
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
