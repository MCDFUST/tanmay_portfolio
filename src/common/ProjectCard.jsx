import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div>
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
