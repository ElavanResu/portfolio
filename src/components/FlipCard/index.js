import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import './flipCard.css'

const useStyles = makeStyles((theme) => ({
  tagText: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const FlipCard = (props) => {
  const classes = useStyles()
  // const onCardClick = () => {
  //   window.open(`${props.githubLink}`, '_blank');
  // }
  return (
    <div className={'flip-card'} style={props.styles}>
      <div className={'front'}
        style={{
          backgroundImage: `url(${props.cardImgUrl})`
        }}
      >
        <div className={'top-label'}>
          <Typography variant="caption">
            {props.title}
          </Typography>
        </div>
        {
          props.inDevelopment && <div className={'bottom-label'}>
            <Typography variant="caption">
              {'In Development'}
            </Typography>
          </div>
        }
      </div>
      <div className='back'
        style={{
          backgroundImage: `url(${props.backCardImgUrl})`
        }}
      >
        <div className={'cover'}>
          {
            props.tags.map((ele, index) => {
              return (
                <div className={'tag-label'} key={`${props.id}-tags-${index}`}>
                  <Typography variant="caption" className={classes.tagText}>
                    {ele}
                  </Typography>
                </div>
              )
            })
          }
          <div className={'tag-label'}>
            <Typography variant="caption" className={classes.tagText}>
              More Details...
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
