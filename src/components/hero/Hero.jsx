import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles["hero-field"]} ${styles.h1} hidden`} style={{ "--order": 5 }}>
        Hi, my name is
      </h1>
      <h2
        className={`${styles["hero-field"]} ${styles["my-name"]} hidden`}
        style={{ "--order": 6 }}
      >
        Brayan Sanchez.
      </h2>
      <h3 className={`${styles["hero-field"]} hidden`} style={{ "--order": 7 }}>
        Always learning to be better.
      </h3>
      <p className={`${styles["hero-field"]} ${styles.p} hidden `} style={{ "--order": 8 }}>
        <strong>Software developer</strong> focused on building scalable and user-friendly
        <strong> web applications</strong> implementing the best tools to optimize the performance.
      </p>
    </section>
  );
}

export default Hero;
