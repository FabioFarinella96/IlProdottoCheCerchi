import styles from "./index.module.scss";
import { AiOutlineAmazon } from "react-icons/ai";

const Card = ({ product }) => {
  const { title, price, img, link } = product;

  return (
    <div className={styles.Card}>
      <a href={link} target="_blank">
        <img src={img} alt={title} />
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p>{price} €</p>
        </div>
        <div className={styles.container}>
          <button className={styles.ctaButton}>Visualizza offerta</button>
          <p className={styles.linkAmz}>
            Su Amazon
            <span>
              <AiOutlineAmazon className={styles.amzIcon} />
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
