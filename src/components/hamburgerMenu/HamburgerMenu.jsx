import styles from "./index.module.scss";

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburger}>
      <ul className={styles.navBar}>
        <li>Home</li>
        <li>Categorie</li>
        <li>Chi siamo</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
