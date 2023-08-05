import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} hidden`}>
        <h2>About me</h2>
        <div className={styles["about-me"]}>
          <p>
            I'm a <strong>Self-taught</strong> programmer and Systems engineering student from
            Colombia with 1 year of experience as a software developer. My interest in technology
            started when I got my first computer in 2009 and I decided to learn about ethical
            hacking, that's how I acquired my
            <strong>Linux</strong> and <strong>virtual machine</strong> skills.
          </p>
          <p>
            Years later I entered the world of programming where I learned new techologies to build
            web applications more focused on the <strong>front-end</strong> with the best practices.
            As a result, I've developed efficient and scalable products and have become a
            well-organized person, problem solver and team player.
          </p>
          <p>
            My main focus these days is to deepen my <strong>back-end</strong> and{" "}
            <strong>GCP</strong> skills to create products for the next generations.
          </p>
        </div>
      </div>
      <div className={`${styles.container} hidden`}>
        <h2>My skills</h2>
        <div className={styles["my-skills-list"]}>
          <div>React</div>
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
          <div>Nginx</div>
          <div>Astro</div>
        </div>
      </div>
    </section>
  );
}

export default About;
