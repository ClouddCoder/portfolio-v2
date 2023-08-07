import Link from "next/link";
import styles from "./not-found.module.css";

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>404</h1>
        <div className={styles["vertical-line"]}></div>
        <div className={styles["horizontal-line"]}></div>
        <div className={styles.content}>
          <p>Umm, yes. This is an error.</p>
          <p>
            We tried to find the page you were looking for, but we couldn&apos;t. Sorry about that.
          </p>
          <p>
            You may find what you&apos;re looking for on the{" "}
            <Link className={styles.a} href="/">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
