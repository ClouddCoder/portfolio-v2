"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.svg";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import ResumeButton from "../components/resume-button/ResumeButton";
import SocialMediaBar from "../components/social-media-bar/SocialMediaBar";
import SocialMediaFooter from "../components/social-media-footer/SocialMediaFooter";
import { handleOnMouseMove } from "../utils/radialGradient";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    document
      .querySelector(".light-container")
      .addEventListener("mousemove", (e) => handleOnMouseMove(e));

    const observer = new IntersectionObserver(
      // The entries is a list of the observed elements that have crossed the threshold.
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
          }
        });
      },
      {
        threshold: [0.5, 1],
      },
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`${styles.container} light-container`}>
      <div className={`${styles.effect} light`} />
      <header className={styles.header}>
        <div className={styles.header__container}>
          <nav className={styles.header__navbar}>
            <div>
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <Navbar />
            <Menu>
              <ResumeButton />
            </Menu>
          </nav>
        </div>
      </header>
      <SocialMediaBar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.inner} hidden`}>
          <SocialMediaFooter />
          <p className={styles.p}>Developed and designed by Brayan Sánchez</p>
          <p className={styles.p}>© Copyrigth 2023</p>
        </div>
      </footer>
    </div>
  );
}
