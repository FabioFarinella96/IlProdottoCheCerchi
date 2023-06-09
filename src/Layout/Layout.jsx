import styles from "./index.module.scss";
import Header from "../components/header";
import HamburgerMenu from "../components/hamburgerMenu";
import Footer from "../components/footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.Layout}>
      <Header setIsOpenModal={setIsOpenModal} />
      {isOpenModal && <HamburgerMenu />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
