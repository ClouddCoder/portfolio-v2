"use client";

import { useState, useEffect } from "react";
import style from "./Menu.module.css";

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
    <div className={style.header__menu}>
      {open ? (
        <button className={`${style.toggle_button} ${style.close}`} onClick={() => setOpen(false)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      ) : (
        <button className={style.toggle_button} onClick={() => setOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}
      <aside
        className={
          open ? style.header__menu__overlay : `${style.header__menu__overlay} ${style.isHidden}}`
        }
      >
        <nav className={style.header__menu__overlay__container}>
          <ul className={style.header__menu__overlay__links} onClick={() => setOpen(false)}>
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
            <a href="./resume.pdf" className={style.button_resume}>
              Resume
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Menu;
