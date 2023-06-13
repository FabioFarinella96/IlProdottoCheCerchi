import styles from "./index.module.scss";


const CategoryCard = () => {
  return (
    <div className={styles.CategoryCard}>
        <img className={styles.img}></img>
        <h3 className={styles.title}>Abbigliamento</h3>
        <hr className={styles.hr}></hr>
        <ul className={styles.ul}>
            <li><a>Intimo modellante</a></li>
            <li><a>Giubotti</a></li>
            <li><a>Giacche</a></li>
            <li><a>Guanti</a></li>
            <li><a>Occhiali da sole</a></li>
        </ul>
        <button className={styles.button}></button>
    </div>
  )
}

export default CategoryCard