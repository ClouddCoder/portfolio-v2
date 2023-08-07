import Link from "next/link";
import ResumeButton from "../resume-button/ResumeButton";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={`${styles.header__navbar__container} hidden`}>
      <ul className={styles.header__navbar__links}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div>
        <ResumeButton />
      </div>
    </div>
  );
}

export default Navbar;
