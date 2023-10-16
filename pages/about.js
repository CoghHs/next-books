import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <h1>About Us</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer
      </p>
      <p>We hope you enjoy your stay !</p>
      <div>
        <img
          className={styles.img}
          src="https://avatars.githubusercontent.com/u/103933833?s=400&u=90002425fb5af5b5ccc983f2e520b72352188546&v=4"
        />
      </div>
    </div>
  );
}
