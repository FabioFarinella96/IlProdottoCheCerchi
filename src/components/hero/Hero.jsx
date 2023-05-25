import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.text}>
        <h3>Risparmia tempo e denaro in</h3>
        <h1>IlProdottoCheCerchi.it</h1>
        <h3>
          Ti forniamo un'esperienza di shopping facile, veloce e conveniente.
        </h3>
      </div>
      <img className={styles.img} src="./img/hero.png" alt="hero" />
    </div>
  );
};

export default Hero;
