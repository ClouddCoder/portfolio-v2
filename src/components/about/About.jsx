import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} hidden`}>
        <h2>About me</h2>
        <div className={styles["about-me"]}>
          <p>
            <strong>Self-taught</strong> programmer and systems engineering student from Colombia
            with 1 year of experience as a back-end developer. Technology has always been my passion
            and it has allowed me to achieve many goals in my life.
          </p>
          <p>
            Perseverance and hard work are always in my mind to be better every day in building
            quality products.
          </p>
        </div>
      </div>
      <div className={`${styles.container} hidden`}>
        <h2>My skills</h2>
        <div className={styles["my-skills-list"]}>
          <div>Node.js</div>
          <div>Express</div>
          <div>React</div>
          <div>Next</div>
          <div>Javascript</div>
          <div>Docker</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>Material UI</div>
          <div>REST</div>
          <div>Linux</div>
          <div>Jest</div>
          <div>PostgreSQL</div>
          <div>GCP</div>
        </div>
      </div>
    </section>
  );
}

export default About;
