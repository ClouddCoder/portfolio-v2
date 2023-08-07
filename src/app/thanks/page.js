import styles from "./page.module.css";

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Thanks!</h1>
        <p className={styles.p}>The form was submitted successfully.</p>
        <p>You may return to the homepage.</p>
        <a className={styles.a} href="/">
          Go to homepage
        </a>
      </div>
    </main>
  );
}

export default page;
