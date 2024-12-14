import React from 'react';
import styles from "@/app/product/productDetail.module.css"
import Navbar from '@/components/navbar/nav';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteSlider from './slider';

const makananDetail = () => {

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>
        <InfiniteSlider/>
        <div className={styles.productDetail}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Tas Rajut</p>
            <p className={styles.seller}>Pondok Indah</p>
          </div>
        </div>
        <div className={styles.descContainer}>
          <p className={styles.desc}>Di tengah harum kopi yang baru diseduh, Biskuit Roma Kelapa dari Rumah Kopi hadir sebagai teman sempurna yang tak hanya mengisi perut, tapi juga memanjakan lidah. Dengan tekstur renyah yang menggigit lembut, setiap suap biskuit ini membawa rasa kelapa asli yang kaya, berpadu sempurna dengan sedikit sentuhan manis yang mengingatkan pada nostalgia masa kecil. Aroma kelapa yang hangat seolah menyatu dengan wangi kopi yang memeluk udara, menciptakan sensasi kenikmatan yang tak terlupakan. Setiap biskuitnya, terasa seperti pelukan dari rumah yang nyaman, membuat siapa pun yang mencicipi merasa di rumah, meski sedang menikmati momen kecil di tengah kesibukan.</p>
        </div>
      </div>
      <Link href="/" className={styles.button}>
        <p className={styles.price}>Rp 24.000</p>
      </Link>
      <Footer/>
    </div>
  );
};

export default makananDetail;