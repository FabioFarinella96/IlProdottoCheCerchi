import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      <h3>Top di oggi</h3>
      {data.map((product) => (
        <Card product={product}key={product.id} />
      ))}
    </div>
  );
};

export default CardList;
