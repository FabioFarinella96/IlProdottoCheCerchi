import CategoryCard from "../categoryCard/CategoryCard";
import styles from "./index.module.scss";
import { categories } from "@/src/mock/categories";

const CategoriesList = () => {
  return (
    <div className={styles.CategoriesList}>
      <div className={styles.message}>
        <p>Questa sezione è in lavorazione. Sarà presto disponibile.</p>
      </div>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
