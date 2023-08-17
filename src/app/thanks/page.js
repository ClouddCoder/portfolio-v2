import Link from "next/link";
import styles from "./page.module.css";

function page() {
  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Thanks!</h1>
          <p className={styles.p}>The form was submitted successfully.</p>
          <p>You may return to the homepage.</p>
          <Link className={styles.a} href="/">
            Go to homepage
          </Link>
        </div>
      </main>
    </div>
  );
}

export default page;
