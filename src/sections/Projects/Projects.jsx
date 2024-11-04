import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div class="row">
        <ProjectCard
          h3="Resume Builder"
          p="Java, Java Swing, MySQL, Derby"
          description="A Java-based resume builder with login, registration, and template selection functionalities, integrated with MySQL and Derby databases to store user information and templates."
        />
        <ProjectCard
          h3="Image Steganography"
          p="Python, Cryptography"
          description="A Python tool for securely encoding messages within images using cryptography techniques, featuring a user-friendly interface for encoding and decoding messages."
        />
        <ProjectCard
          h3="VR Underwater Temple"
          p="Unreal Engine, Blender"
          description="An immersive VR environment simulating an underwater temple, created using Unreal Engine and Blender with custom textures and realistic water properties."
        />
        <ProjectCard
          h3="RGB Lamp Control UI"
          p="Python, Tkinter"
          description="An interactive UI in Python for controlling an RGB lamp with on/off switches, color selection, and an intuitive graphical interface built using Tkinter."
        />
      </div>
      </div>
    </section>
  );
}

export default Projects;
