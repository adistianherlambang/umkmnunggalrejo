import styles from "./style.module.css"
import Makanan from "./homeCard"
import Navbar from "@/components/navbar/nav"
import Footer from "@/components/footer/footer"

export default function Product() {
    return(
        <div>
            <Navbar/>
            <div className={styles.spacer}></div>
            <Makanan/>
            <Footer/>
        </div>
    )
}