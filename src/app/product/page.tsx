import styles from "./style.module.css";
import Makanan from "./homeCard";

export default function Product() {
  return (
    <div>
      <div className={styles.spacer}></div>
      <Makanan />
    </div>
  );
}
