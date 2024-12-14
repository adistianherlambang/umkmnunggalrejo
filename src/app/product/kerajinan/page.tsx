import Navbar from "@/components/navbar/nav"
import Footer from "@/components/footer/footer"
import styles from "@/app/product/makanan/style.module.css"
import TasRajut from "./tas-rajut/tas-rajut"

export default function kerajinanPage() {
    return(
        <div>
            <Navbar/>
            <p className={styles.title}>Kerajinan</p>
            <div className={styles.cardContainer}>
                <TasRajut page="makanan"/>
                <TasRajut page="makanan"/>
                <TasRajut page="makanan"/>
                <TasRajut page="makanan"/>
                <TasRajut page="makanan"/>
            </div>
            <Footer/>
        </div>
    )
}