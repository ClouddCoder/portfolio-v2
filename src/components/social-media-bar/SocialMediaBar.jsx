import Link from "next/link";
import styles from "./SocialMediaBar.module.css";

function SocialMediaBar() {
  return (
    <div className={`${styles["side-social-media"]} hidden`} sstyle={{ "--order": 9 }}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.icon} href="https://github.com/ClouddCoder" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.svg} ${styles.icon} icon-tabler icon-tabler-brand-github`}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--fc-paragraph)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className={styles.icon}
            href="https://www.linkedin.com/in/brayansanchez01/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.svg} ${styles.icon} icon-tabler icon-tabler-brand-linkedin`}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--fc-paragraph)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="11" x2="8" y2="16"></line>
              <line x1="8" y1="8" x2="8" y2="8.01"></line>
              <line x1="12" y1="16" x2="12" y2="11"></line>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaBar;
