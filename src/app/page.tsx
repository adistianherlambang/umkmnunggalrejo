import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"
import Navbar from "@/components/navbar/nav";
import Makanan from "@/app/product/homeCard";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.circle}>
        <Image
          src="/home/bg.png"
          width={1000}
          height={1000}
          alt="bg"
        />
      </div>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Official Website Terpercaya,<br /><span className={styles.headerBold}>Produk Berkualitas</span> Khas UMKM Desa Nunggal Rejo <svg className={styles.headerSvg} width="45" height="54" xmlns="http://www.w3.org/2000/svg"><path d="M44 13v34c0 1-.2 2-.5 3-.4.8-1 1.5-1.4 2.1-.6.6-1.3 1.1-2.1 1.4-.8.3-1.7.5-2.6.5H7c-.9 0-1.8-.2-2.6-.5-.8-.3-1.5-.8-2.1-1.4-.6-.6-1-1.3-1.4-2.1-.4-.8-.5-1.7-.5-2.7V13h6V10c0-1.4.3-2.7.8-4C8.8 5 9.5 4 10.4 3c.9-1 2-1.7 3.2-2.2 1.2-.5 2.5-.8 3.9-.8 1.8 0 3.5.5 5.1 1.4C24 0.5 25.6 0 27.4 0c1.4 0 2.7.3 3.9.8 1.2.5 2.3 1.3 3.2 2.2.9 1 1.7 2.2 2.1 3.5.4 1.2.6 2.5.6 3.9v3h6zM34 10c0-.9-.2-1.8-.5-2.6-.3-.8-.8-1.5-1.4-2.1-.6-.6-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-2.6-.5-.8 0-1.5.1-2.2.4.5.6.9 1.2 1.2 1.8.3.6.5 1.2.6 1.8.1.6.2 1.2.3 1.8.1.6.1 1.2.1 2v3h6V10zM10.8 13h13.4V10c0-.9-.2-1.8-.5-2.6-.3-.8-.8-1.5-1.4-2.1-.6-.6-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-2.6-.5-.9 0-1.8.2-2.6.5-.8.3-1.5.8-2.1 1.4-.6.6-1.1 1.3-1.4 2.1-.3.8-.5 1.7-.5 2.6v3h6.7zM31.8 50c-.6-1-1-2.1-1-3.3V17H4V47c0 .5.1 1 .3 1.3.1.4.4.7.7 1 .3.3.7.5 1.1.7.4.2.8.3 1.3.3H31.8zM41 17H34V47c0 .5.1 1 .3 1.3.1.4.4.7.7 1 .3.3.7.5 1.1.7.4.2.8.3 1.3.3.5 0 .9-.1 1.3-.3.4-.2.8-.4 1-.7.3-.3.5-.7.7-1 .2-.4.3-.8.3-1.3V17z" fill="#72B4FF"/></svg>
        </p>
      </div>
      <div className={styles.header2}>
        <p className={styles.header2Text}>Membeli produk unggulan desa<br />berarti membantu kesejahteraannya</p>
        <Image 
          className={styles.obj}
          src="/home/header2/obj.png"
          width={1000}
          height={1000}
          alt="object"
        />
      </div>
      <div className={styles.header3}>
        <div className={styles.headerLeft}>
          <p className={styles.vidTitle}>Tumbuhkan UMKM Desa Nunggal Rejo</p>
          <video autoPlay muted loop preload="metadata" className={styles.vid}>
            <source src="/home/vid.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Link className={styles.headerRight} href="/product">
          <div className={styles.headerRightContent}>
            <p className={styles.vidTitle}>Eksplor Produk</p>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="54" height="54" rx="27" fill="white"/>
              <path d="M15 24.8414C13.8078 24.8414 12.8414 25.8078 12.8414 27C12.8414 28.1922 13.8078 29.1586 15 29.1586L15 24.8414ZM41.5264 28.5264C42.3693 27.6834 42.3693 26.3166 41.5264 25.4736L27.7892 11.7364C26.9462 10.8935 25.5794 10.8935 24.7364 11.7364C23.8935 12.5794 23.8935 13.9462 24.7364 14.7892L36.9473 27L24.7364 39.2108C23.8935 40.0538 23.8935 41.4206 24.7364 42.2636C25.5794 43.1065 26.9462 43.1065 27.7892 42.2636L41.5264 28.5264ZM15 29.1586L40 29.1586L40 24.8414L15 24.8414L15 29.1586Z" fill="#3D3FF6"/>
            </svg>
          </div>
        </Link>
      </div>
      <Makanan />
      <Footer />
    </div>
  );
}
