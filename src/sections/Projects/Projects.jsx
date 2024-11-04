import styles from './ProjectsStyles.module.css';
import ResumeBuilder from '../../assets/ResumeBuilder.png';
import ImageSteganography from '../../assets/ImageSteganography.png';
import VR_UnderwaterTemple from '../../assets/VR_UnderwaterTemple.png';
import RGBLampControl from '../../assets/RGBLampControl.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ResumeBuilder}
          h3="Resume Builder"
          p="Java, Java Swing, MySQL, Derby"
        />
        <ProjectCard
          src={ImageSteganography}
          h3="Image Steganography"
          p="Python, Cryptography"
        />
        <ProjectCard
          src={VR_UnderwaterTemple}
          h3="VR Underwater Temple"
          p="Unreal Engine, Blender"
        />
        <ProjectCard
          src={RGBLampControl}
          h3="RGB Lamp Control UI"
          p="Python, Tkinter"
        />
      </div>
    </section>
  );
}

export default Projects;
