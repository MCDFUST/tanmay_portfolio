import React from 'react';

function ProjectCard({h3, p, description }) {
  return (
    <div style="width:25%">
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
