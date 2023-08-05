import styles from "./Navbar.module.css";
import ResumeButton from "../resume-button/ResumeButton";

function Navbar() {
  return (
    <div className={`${styles.header__navbar__container} hidden`}>
      <ul className={styles.header__navbar__links}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <ResumeButton />
      </div>
    </div>
  );
}

export default Navbar;
