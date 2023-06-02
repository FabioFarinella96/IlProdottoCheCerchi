import styles from "./index.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contattiFooter}>
        <h2 className={styles.h2Footer}>CONTATTI</h2>
        <ul className={styles.ulListFooter}>
          <li>
            <a href="#">Contatti</a>
          </li>
          <li>
            <a href="#">Chi siamo</a>
          </li>
          <li>
            <a href="#">Informativa sulla Privacy</a>
          </li>
          <li>
            <a href="#">Termini di servizio</a>
          </li>
        </ul>
      </div>
      <div className={styles.imageFooter}>
        <Link href="/">
          <img
            className={styles.imgFooter}
            src="./img/logo4.png"
            alt="logo"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
