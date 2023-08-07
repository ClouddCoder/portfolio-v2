import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} hidden`}>
        <h2>About me</h2>
        <div className={styles["about-me"]}>
          <p>
            <strong>Self-taught</strong> programmer and Systems engineering student from Colombia
            with 1 year of experience as a software developer. Technology have always been my
            passion and it allows me to reach many goals through my life.
          </p>
          <p>
            Learning about Full stack skills is my main objective to scale in the technological
            industry.
          </p>
        </div>
      </div>
      <div className={`${styles.container} hidden`}>
        <h2>My skills</h2>
        <div className={styles["my-skills-list"]}>
          <div>React</div>
          <div>Next</div>
          <div>Javascript</div>
          <div>Docker</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>Material UI</div>
          <div>REST</div>
          <div>Linux</div>
          <div>Jest</div>
          <div>Node.js</div>
          <div>Express</div>
          <div>PostgreSQL</div>
          <div>GCP</div>
        </div>
      </div>
    </section>
  );
}

export default About;
