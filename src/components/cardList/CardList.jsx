import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data && data.map((product) => <Card product={product} />)}
    </div>
  );
};

export default CardList;
