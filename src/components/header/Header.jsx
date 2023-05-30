import styles from "./index.module.scss";
import { BsSearch } from "react-icons/bs";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";

const Header = ({ setIsOpenModal }) => {
  const onHandleClick = () => {
    setIsOpenModal((prev) => !prev);
  };  

  return (
    <div className={styles.Header}>
      <Link href="/">
      <img className={styles.logo} src="./img/logo4.png" alt="logo" />
      </Link>
      <ul className={styles.navBar}>
        <li>Home</li>
        <li>Categorie</li>
        <li>Chi siamo</li>
      </ul>
      <div className={styles.searchBar}>
        <BsSearch className={styles.searchIcon} />
        <input className={styles.input} type="text" placeholder="Cerca" />
      </div>
      <div onClick={onHandleClick} className={styles.hamburgerMenu}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
