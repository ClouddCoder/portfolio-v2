import styles from "./ResumeButton.module.css";

function ResumeButton() {
  return (
    <a className={styles.a} href="./resume.pdf" target="_blank">
      Resume
    </a>
  );
}

export default ResumeButton;
