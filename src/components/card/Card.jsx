import styles from "./index.module.scss";

const Card = ({ product }) => {
  const { title, price, category, description, image } = product;

  return (
    <div className={styles.Card}>
      <img src={image} alt={title} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p>{price} €</p>
      </div>
      <div className={styles.container}>
        <button className={styles.ctaButton}>Vai all'offerta</button>
        <p>Su Amazon</p>
      </div>
    </div>
  );
};

export default Card;
