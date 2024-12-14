import Link from "next/link";
import styles from "@/app/product/homeCard.module.css";

export default function BiskuitRomaKelapa({ page }) {
    console.log('Page:', page);
    return (
        <Link
            href="/product/makanan/biskuit-roma-kelapa"
            className={`${styles.card} ${page === "home" ? styles.homePage : ""} ${page === "makanan" ? styles.makananPage : ""}`}
        >
            <div className={styles.img}></div>
            <div className={styles.product}>
                <p className={styles.productTitle}>Biskuit Roma Kelapa</p>
                <p className={styles.seller}>Rumah Kopi</p>
            </div>
            <p className={`${styles.productTitle} ${styles.blue}`}>Rp 12.000</p>
        </Link>
    );
}
