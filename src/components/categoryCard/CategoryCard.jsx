import styles from "./index.module.scss";

const CategoryCard = ({ category }) => {
  const { title, list } = category;

  return (
    <div className={styles.CategoryCard}>
      <img className={styles.img}></img>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.hr}></hr>
      <ul className={styles.list}>
        {list.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
      <button className={styles.button}>Mostra di più</button>
    </div>
  );
};

export default CategoryCard;
