import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={`${styles.container} hidden`}>
        <h2>Experience</h2>
        <ul>
          <li>
            <div className={styles["experience-item"]}>
              <span className={styles.span}>APRIL 2023 - PRESENT</span>
              <div className={styles["experience-content"]}>
                <h3 className={styles.h3}>Aventi Solutions - Back-end Developer</h3>
                <p>
                  Develop Ecommerce sites using Magento to national and international companies.
                  Implemented improvements in the JavaScript development optimizing the code by 20%
                  and enhanced the use of Docker.
                </p>
                <ul className={styles["experience-skills"]}>
                  <li>Magento</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles["experience-item"]}>
              <span className={styles.span}>APRIL 2022 - JANUARY 2023</span>
              <div className={styles["experience-content"]}>
                <h3 className={styles.h3}>Universidad del Valle - Software Developer</h3>
                <p>
                  Improved the design and functionality of the university’s software for students
                  and professors, using HTML, CSS, JavaScript y PHP.
                </p>
                <ul className={styles["experience-skills"]}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles["experience-item"]}>
              <span className={styles.span}>JUNE 2017 - JUNE 2018</span>
              <div className={styles["experience-content"]}>
                <h3 className={styles.h3}>Abbott - Intern</h3>
                <p>Performed administrative tasks as an office assistant.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
