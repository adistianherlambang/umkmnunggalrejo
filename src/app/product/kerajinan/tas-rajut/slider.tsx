"use client";

import { useState } from "react";
import styles from "@/app/product/productDetail.module.css"; // Mengimpor CSS Module

const InfiniteSlider = () => {
  const images = [
    "/product/makanan/biskuit-roma-kelapa.jpg",
    "/product/makanan/hiaceLuxury.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imgContainer}>
        <img src={mainImage} alt="Main Image" className={styles.mainImage} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`${styles.thumbnail} ${mainImage === image ? styles.selected : ""}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
