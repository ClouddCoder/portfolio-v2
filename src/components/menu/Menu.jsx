"use client";

import { useState, useEffect } from "react";
import styles from "./Menu.module.css";

/**
 * Menu component to display the overlay.
 * @returns {JSX.Element} - Menu component.
 */
function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const blurMainContent = () => {
      const body = document.querySelector("body");

      if (open) {
        body.classList.add("blur");
      } else {
        body.classList.remove("blur");
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
          open
            ? styles.header__menu__overlay
            : `${styles.header__menu__overlay} ${styles.isHidden}}`
        }
      >
        <nav className={styles.header__menu__overlay__container}>
          <ul className={styles.header__menu__overlay__links} onClick={() => setOpen(false)}>
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
            <a href="./resume.pdf" className={styles.button_resume}>
              Resume
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Menu;
