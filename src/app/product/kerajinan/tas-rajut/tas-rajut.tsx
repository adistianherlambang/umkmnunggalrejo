import Link from "next/link";
import styles from "@/app/product/homeCard.module.css";
import Image from "next/image";

export default function TasRajut({ page }) {
    console.log('Page:', page);
    return (
        <Link
            href="/product/kerajinan/tas-rajut"
            className={`${styles.card} ${page === "home" ? styles.homePage : ""} ${page === "makanan" ? styles.makananPage : ""}`}
        >
            <div className={styles.imgContainer}>
                <Image className={styles.img} alt="photo" width={200} height={200} src="/product/kerajinan/tas-rajut/1.jpg" />
            </div>
            <div className={styles.product}>
                <p className={styles.productTitle}>Tas Rajut</p>
                <p className={styles.seller}>Pondok Indah</p>
            </div>
            <p className={`${styles.productTitle} ${styles.blue}`}>Rp 98.000</p>
        </Link>
    );
}