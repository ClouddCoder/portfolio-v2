import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`${styles.container} hidden`}>
        <h2>Experience</h2>
      </div>
    </section>
  );
}

export default Experience;
