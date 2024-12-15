import Link from "next/link"
import styles from "./homeCard.module.css"
import CardButton from "../../components/cardButton/cardButton"

import TasRajut from "./kerajinan/tas-rajut/tas-rajut"
import BiskuitRomaKelapa from "./makanan/biskuit-roma-kelapa/biskuit-roma-kelapa"

export default function Makanan() {
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>Makanan</p>
                <Link href="/product/makanan"><CardButton/></Link>
            </div>
            <div className={styles.cardContainer}>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
                <BiskuitRomaKelapa page="home"/>
            </div>

            <div className={`${styles.titleContainer}  ${styles.section}`}>
                <p className={`${styles.title}`}>Kerajinan</p>
                <Link href="/product/kerajinan"><CardButton/></Link>
            </div>
            <div className={styles.cardContainer}>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
                <TasRajut page="home"/>
            </div>
        </div>
    )
}