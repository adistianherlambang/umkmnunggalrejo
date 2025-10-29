import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import styles from "./style.module.css";
import BiskuitRomaKelapa from "./biskuit-roma-kelapa/biskuit-roma-kelapa";

export default function makananPage() {
  return (
    <div>
      <p className={styles.title}>Makanan</p>
      <div className={styles.cardContainer}>
        <BiskuitRomaKelapa page="makanan" />
        <BiskuitRomaKelapa page="makanan" />
        <BiskuitRomaKelapa page="makanan" />
        <BiskuitRomaKelapa page="makanan" />
        <BiskuitRomaKelapa page="makanan" />
      </div>
    </div>
  );
}
