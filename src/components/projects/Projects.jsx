import Link from "next/link";
import Image from "next/image";
import Ecommerce from "../../assets/ecommerce.png";
import Encriptador from "../../assets/encriptador.png";
import WeatherApp from "../../assets/weather-app.png";
import TaskManager from "../../assets/task-manager.png";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={`${styles.projects} hidden`}>
      <h2 className={styles.h2}>Projects</h2>
      <div className={styles.container}>
        <div className={styles.project}>
          <figure className={styles.figure}>
            <Image className={styles.img} src={Ecommerce} alt="ecommerce" />
            <figurecaption className={styles.figurecaption}>
              <p className={`${styles.p} ${styles.caption}`}>
                Ecommerce with authentication, cart and checkout
              </p>
              <div className={`${styles.div} ${styles.stack}`}>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
                <span>JWT</span>
                <span>REST</span>
                <span>MUI</span>
              </div>
              <Link
                className={`${styles["btn-visit-website"]} ${styles.a}`}
                href="https://lottus.onrender.com"
                target="_blank"
              >
                Visit Website
              </Link>
            </figurecaption>
          </figure>
        </div>
        <div className={styles.project}>
          <figure className={styles.figure}>
            <Image className={styles.img} src={Encriptador} alt="encriptador" />
            <figurecaption className={styles.figurecaption}>
              <p className={`${styles.p} ${styles.caption}`}>Basic Encryptor</p>
              <div className={`${styles.div} ${styles.stack}`}>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <Link
                className={`${styles["btn-visit-website"]} ${styles.a}`}
                href="https://clouddcoder.github.io/encriptador-alura/"
                target="_blank"
              >
                Visit Website
              </Link>
            </figurecaption>
          </figure>
        </div>
        <div className={styles.project}>
          <figure className={styles.figure}>
            <Image className={styles.img} src={WeatherApp} alt="wheater app" />
            <figurecaption className={styles.figurecaption}>
              <p className={`${styles.p} ${styles.caption}`}>
                Weather App using the OpenWeatherMap API
              </p>
              <div className={`${styles.div} ${styles.stack}`}>
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Tailwind</span>
              </div>
              <Link
                className={`${styles["btn-visit-website"]} ${styles.a}`}
                href="https://weather-app-fm3c.onrender.com"
                target="_blank"
              >
                Visit Website
              </Link>
            </figurecaption>
          </figure>
        </div>
        <div className={styles.project}>
          <figure className={styles.figure}>
            <Image className={styles.img} src={TaskManager} alt="task manager" />
            <figurecaption className={styles.figurecaption}>
              <p className={`${styles.p} ${styles.caption}`}>Task Manager CRUD app</p>
              <div className={`${styles.div} ${styles.stack}`}>
                <span>EJS</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PostgreSQL</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>REST</span>
                <span>Docker</span>
                <span>JWT</span>
              </div>
              <Link
                className={`${styles["btn-visit-website"]} ${styles.a}`}
                href="https://task-manager-sn3p.onrender.com"
                target="_blank"
              >
                Visit Website
              </Link>
            </figurecaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Projects;
