import styles from './ProjectsStyles.module.css';
import GTA_Clone from '../../assets/GTA.png';
import Cartoon_City from '../../assets/Cartoon_City.png';
import Mall from '../../assets/Mall.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={GTA_Clone}
          link="https://jklujaipur-my.sharepoint.com/:v:/g/personal/kumardas_jklu_edu_in/EbnAYeWSkidJlKb9LCnQl2sBSXm04c95geBDh1iD1xuJbQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=es9uB7"
          h3="GTA Clone"
          p="Game"
        />
        <ProjectCard
          src={Cartoon_City}
          link="https://jklujaipur-my.sharepoint.com/:v:/g/personal/kumardas_jklu_edu_in/ETyBLHdNt7dAmpkWCQnyiZ4Bn6FfFXdDLGh7lYURnC0Cqg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=DJHqeK"
          h3="Cartoon City"
          p="Virtual City"
        />
        <ProjectCard
          src={Mall}
          link="https://drive.google.com/file/d/1W4hquVZ0eH2OMpOn4i4EeqFxwCzCGIPM/view?usp=sharing"
          h3="Mall"
          p="3D Design"
        />
      </div>
    </section>
  );
}

export default Projects;
