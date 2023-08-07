import Link from "next/link";
import styles from "./ResumeButton.module.css";

function ResumeButton() {
  return (
    <Link className={styles.a} href="./resume.pdf" target="_blank">
      Resume
    </Link>
  );
}

export default ResumeButton;
