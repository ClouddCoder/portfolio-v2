import Image from "next/image";
import Logo from "/public/logo.svg";
import Navbar from "../components/Navbar.astro";
import Menu from "../components/menu/Menu";
import Hero from "../components/Hero.astro";
import About from "../components/About.astro";
import Projects from "../components/Projects.astro";
import Contact from "../components/Contact.astro";
import ResumeButton from "../components/ResumeButton.astro";
import SocialMediaBar from "../components/SocialMediaBar.astro";
import SocialMediaFooter from "../components/SocialMediaFooter.astro";
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
            <Menu client:visible>
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
