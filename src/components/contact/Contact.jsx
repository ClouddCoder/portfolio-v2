import styles from "./Contact.module.css";

function About() {
  return (
    <section id="contact" className={`${styles.contact} hidden`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in touch</h2>
        <form
          className={styles.form}
          action="https://formsubmit.co/leon16.bs@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_next" value="https://www.spiegell.live/Thanks" />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <div className={styles["container-button"]}>
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default About;
