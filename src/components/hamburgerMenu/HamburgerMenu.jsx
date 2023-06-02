import styles from "./index.module.scss";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburger}>
      <ul className={styles.navBar}>
        <Link className={styles.nav} href="/">
          <li>Home</li>
        </Link>
        <li>Categorie</li>
        <Link className={styles.nav} href="chi-siamo">
          <li>Chi siamo</li>
        </Link>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
