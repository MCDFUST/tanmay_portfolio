import React from 'react';
import styles from './sections/Projects/ProjectCard.module.css';

function ProjectCard({ h3, p, description }) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{h3}</h3>
      <p className={styles.projectTech}>{p}</p>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
}

export default ProjectCard;
