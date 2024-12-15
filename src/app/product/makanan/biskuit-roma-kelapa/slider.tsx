"use client";

import { useState } from "react";
import styles from "@/app/product/productDetail.module.css";
import Image from "next/image"

const InfiniteSlider = () => {
  const images = [
    "/product/makanan/biskuit-roma-kelapa/1.jpg",
    "/product/makanan/biskuit-roma-kelapa/2.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imgContainer}>
        <Image width={1000} height={1000} src={mainImage} alt="Main Image" className={styles.mainImage} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <Image
            width={1000}
            height={1000}
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
