import React from 'react'

const ProjectDetails = (props) => {
  console.log('project props:', props)
  return (
    <div>
      {`id: ${props.id}`}
      {`title: ${props.title}`}
      {`cardImgUrl: ${props.cardImgUrl}`}
      {`backCardImgUrl: $[backCardImgUrl}`}
      {`tags: ${props.tags}`}
      {`githubLink: ${props.githubLink}`}
      {`inDevelopment: ${props.inDevelopment}`}
    </div>
  )
}

export default ProjectDetails
