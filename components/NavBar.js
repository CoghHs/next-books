import Link from "next/link";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarLink}>
        <div className={styles.navbarBtn}>
          <Link href="/" legacyBehavior>
            <a className={styles.navbarA}>Home</a>
          </Link>
        </div>
        <h1 className={styles.navbarTitle}>
          THE NEW YORK TIMES BEST SELLER EXPLORER
        </h1>
        <div className={styles.navbarBtn}>
          <Link href="/about" legacyBehavior>
            <a className={styles.navbarA}>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
