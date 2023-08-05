import Image from "next/image";
import Logo from "/public/logo.svg";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import ResumeButton from "../components/resume-button/ResumeButton";
import SocialMediaBar from "../components/social-media-bar/SocialMediaBar";
import SocialMediaFooter from "../components/social-media-footer/SocialMediaFooter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <nav className={styles.header__navbar}>
            <div>
              <a href="/portfolio">
                <Image src={Logo} alt="logo" />
              </a>
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
    </>
  );
}
