"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

/**
 * Menu component to display the overlay.
 * @returns {JSX.Element} - Menu component.
 */
function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const blurMainContent = () => {
      const main = document.querySelector("main");
      const footer = document.querySelector("footer");

      if (open) {
        main.classList.add("blur");
        footer.classList.add("blur");
      } else {
        main.classList.remove("blur");
        footer.classList.remove("blur");
      }
    };

    blurMainContent();
  }, [open]);

  return (
    <div className={styles.header__menu}>
      {open ? (
        <button
          className={`${styles.toggle_button} ${styles.close}`}
          onClick={() => setOpen(false)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      ) : (
        <button className={styles.toggle_button} onClick={() => setOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}
      <aside
        className={
          open ? styles.header__menu__overlay : `${styles.header__menu__overlay} ${styles.isHidden}`
        }
      >
        <nav className={styles.header__menu__overlay__container}>
          <ul className={styles.header__menu__overlay__links} onClick={() => setOpen(false)}>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div>
            <Link href="./resume.pdf" className={styles.button_resume}>
              Resume
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Menu;
