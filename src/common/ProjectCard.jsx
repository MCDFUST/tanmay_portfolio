import React from 'react';

function ProjectCard({h3, p, description }) {
  return (
    <div class="col-md-3">
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
