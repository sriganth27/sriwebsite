import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({details}) => {
  return (
    <div className='project-card'>
      <h6>{details.title}</h6>
      <div className='project-duration'>{details.date}</div>
      <ul>
        {details.description.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default ProjectCard

